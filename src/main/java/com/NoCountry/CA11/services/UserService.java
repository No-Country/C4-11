package com.NoCountry.CA11.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.NoCountry.CA11.entities.User;
import com.NoCountry.CA11.repositories.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Transactional(readOnly = true)
	public List<User> userList() {
		return userRepo.findAll();
	}
	
	@Transactional
	public void saveUser(User user) {
		userRepo.save(user);
	}

	@Transactional
	public void deleteUser(String id) {
		userRepo.deleteById(id);
	}

	@Transactional(readOnly = true)
	public User getUserbyId(String id) {
		return userRepo.findById(id).get();
	}
}
