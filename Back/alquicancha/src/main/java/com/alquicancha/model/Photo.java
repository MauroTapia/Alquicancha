package com.alquicancha.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String url;
    private String description;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Photo() {
    }
    public Photo(String name, String url, String description) {
        this.name = name;
        this.url = url;
        this.description = description;
    }

    public Photo(Photo photo) {
    }
}