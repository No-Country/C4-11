package com.NoCountry.CA11.controllers;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.CA11.entities.Role;
import com.NoCountry.CA11.entities.User;
import com.NoCountry.CA11.repositories.RoleRepo;
import com.NoCountry.CA11.repositories.UserRepo;
import com.NoCountry.CA11.security.CustomUserDetailsService;

@RestController
@RequestMapping("/auth")
public class Auth {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	CustomUserDetailsService userDetails;
	

	@PostMapping("/registrer")
	public ResponseEntity<User> userRegister(@RequestBody User user){
		
		User newUser = new User();
		
		if (userRepo.existsByEmail(user.getEmail())) {
			return new ResponseEntity<User>(newUser,HttpStatus.BAD_REQUEST);
		}
		
		newUser.setName(user.getName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		
		LocalDateTime date = LocalDateTime.now();
		
		newUser.setTimestamps(date);
		
		Role roles = roleRepo.findByRolType("ROLE_USER").get();
		newUser.setRoles(Collections.singleton(roles));
		
		userRepo.save(newUser);
		return new ResponseEntity<User>(newUser, HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user){
		userDetails.loadUserByUsername(user.getEmail());
		return ResponseEntity.ok().body("User logged in");
	}
}
