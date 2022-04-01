package com.NoCountry.CA11.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.NoCountry.CA11.enumerate.ProductTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PRODUCTS")
@SQLDelete(sql = "UPDATE users SET soft_delete = true WHERE id=?")
@Where(clause = "soft_delete = false")
public class ProductEntity {

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	
	@Column(name = "NAME", nullable = false)
	@Size(min = 2, max = 30, message = "The length of the name must be between 2 to 30 characters.")
	@NotEmpty(message = "The field must not be empty.")
	private String name;
	
	@Column(name = "QUANTITY", nullable = false)
	@NotEmpty(message = "The field must not be empty.")
	private Integer quantity;
	
	@Column(name = "TYPE", nullable = false)
	@Enumerated(EnumType.STRING)
	@NotEmpty(message = "The field must not be empty.")
	private ProductTypeEnum type;
	
	@Column(name = "SOFT_DELETE", nullable = false)
	private Boolean softDelete = false;
	
}
