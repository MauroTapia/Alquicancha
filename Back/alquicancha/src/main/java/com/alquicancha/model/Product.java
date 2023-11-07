package com.alquicancha.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private LocalDate fromDate;
    private LocalDate toDate;
    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    private Set<Photo> photos = new HashSet<>();

    public Product(){

    }

    public Product(String name, String description, LocalDate fromDate, LocalDate toDate) {
        this.name = name;
        this.description = description;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }

    public void addPhoto(Photo photo){
        photo.setProduct(this);
        this.photos.add(photo);
    }

    public void removePhoto(Photo photo){
        this.photos.remove(photo);
    }
}