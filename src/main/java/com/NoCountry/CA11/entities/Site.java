package com.NoCountry.CA11.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import com.NoCountry.CA11.enumerate.SiteTypeEnum;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SQLDelete(sql = "UPDATE site SET soft_delete = true WHERE id=?")
@Where(clause = "soft_delete = false")
public class Site {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @Column(nullable = false)
    @Enumerated
    @NotEmpty(message = "The field must not be empty.")
    private SiteTypeEnum type;

    @Column(nullable = false)
    private Integer numberPeople;

    @ManyToOne
    private User user;

}
