package com.NoCountry.CA11.security;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.NoCountry.CA11.entities.Role;
import com.NoCountry.CA11.entities.User;
import com.NoCountry.CA11.repositories.UserRepo;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepo.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with this email: " + email));
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
				mapRoles(user.getRoles()));
	}

	private Collection<? extends GrantedAuthority> mapRoles(Set<Role> roles) {
		return roles.stream().map(rol -> new SimpleGrantedAuthority(rol.getRolType())).collect(Collectors.toList());
	}

}
