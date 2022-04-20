/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.NoCountry.CA11.repositories;

import com.NoCountry.CA11.entities.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface UserRepo extends JpaRepository<User,String> {
	
	public Optional<User> findByEmail(String email);
	
	public Boolean existsByEmail(String email);
    
}