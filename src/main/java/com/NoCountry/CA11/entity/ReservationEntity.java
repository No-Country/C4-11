package com.NoCountry.CA11.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "RESERVARTIONS")
@SQLDelete(sql = "UPDATE reservations SET soft_delete = true WHERE id=?")
@Where(clause = "soft_delete = false")
public class ReservationEntity {

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;

	@Column(name = "SITE", nullable = false)
	@NotEmpty(message = "The field must not be empty. You must choose a site before booking.")
	private SiteEntity site;

	@Column(name = "QUANTITY", nullable = false)
	@NotEmpty(message = "The field must not be empty.")
	private Integer quantity;

}
