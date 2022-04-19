package com.NoCountry.CA11.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.NoCountry.CA11.entities.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role, String>{
	
	public Optional<Role> findByRolType(String rolType);
}
