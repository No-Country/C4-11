package com.NoCountry.CA11.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.NoCountry.CA11.enumerate.SiteTypeEnum;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "SITES")
@SQLDelete(sql = "UPDATE sites SET soft_delete = true WHERE id=?")
@Where(clause = "soft_delete = false")
public class SiteEntity {

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;

	@Column(name = "TYPE", nullable = false)
	@Enumerated(EnumType.STRING)
	@NotEmpty(message = "The field must not be empty.")
	private SiteTypeEnum type;

	@Column(name = "ACTIVE", nullable = false)
	@NotEmpty(message = "The field must not be empty.")
	private Boolean active;

}
