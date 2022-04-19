package com.NoCountry.CA11.controllers;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
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
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	CustomUserDetailsService userDetails;
	
	@PostMapping("/registrer")
	public ResponseEntity<?> userRegistrer(@RequestBody User user){
		if (userRepo.existsByEmail(user.getEmail())) {
			return new ResponseEntity<>("this user email already exist",HttpStatus.BAD_REQUEST);
		}
		
		User newUser = new User();
		newUser.setName(user.getName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		newUser.setTimestamps(user.getTimestamps());
		
		Role roles = roleRepo.findByRolType("ROLE_USER").get();
		newUser.setRoles(Collections.singleton(roles));
		
		userRepo.save(newUser);
		return new ResponseEntity<>("Successfully registered user", HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user){
		userDetails.loadUserByUsername(user.getEmail());
		return ResponseEntity.ok().body("User logged in");
	}
}
