package com.NoCountry.CA11.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;

	@Column(nullable = false)
	@Size(min = 4, message = "The password must be at least four characters.")
	@NotEmpty(message = "The field must not be empty.")
	private String name;

	@Column(nullable = false, unique = true)
	@Email(message = "Must be a properly formatted email address.")
	@NotEmpty(message = "The field must not be empty.")
	private String email;

	@Column(nullable = false)
	@Size(min = 8, message = "The password must be at least eight characters.")
	@NotEmpty(message = "The field must not be empty.")
	private String password;

	@CreationTimestamp
	@Column(name = "registration_date", nullable = false, updatable = false)
	private LocalDateTime timestamps;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "rol_id", referencedColumnName = "id"))
	private Set<Role> roles = new HashSet<>();

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDateTime getTimestamps() {
		return timestamps;
	}

	public void setTimestamps(LocalDateTime timestamps) {
		this.timestamps = timestamps;
	}
	
	
	
}
