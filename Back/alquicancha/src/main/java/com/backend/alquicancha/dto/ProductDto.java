package com.backend.alquicancha.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDto {

    private Long id;
    private String title;
    private String description;
    private double price;
    private List<String> imagenes;

    public ProductDto(Long id, String title, String description, double price, List<String> imagenes) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imagenes = imagenes;
    }

    public ProductDto() {
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
    public List<String> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<String> imagenes) {
        this.imagenes = imagenes;
    }


}
