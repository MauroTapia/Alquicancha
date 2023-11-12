package com.backend.alquicancha.entity;

import com.backend.alquicancha.exceptions.ValidarNumero;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.List;

@Entity
@Table(name = "PRODUCTOS")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 50, message = "El titulo debe tener hasta 50 caracteres")
    @NotNull(message = "El titulo no puede ser nulo")
    @NotBlank(message = "Debe especificarse un titulo")
    private String title;

    @Size(max = 350, message = "La descripción debe tener hasta 350 caracteres")
    @NotNull(message = "La descripción no puede ser nulo")
    @NotBlank(message = "Debe especificarse una descripción")
    private String description;

    @ValidarNumero(message = "El precio debe ser solo numeros")
    @Min(1)
    @NotNull(message = "El precio no puede ser nula")
    private double price;

    @ElementCollection
    @CollectionTable(name = "PRODUCT_IMAGES", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "image_name")
    private List<String> imagenes;

    public Product() {
    }

    public Product(String title, String description, double price, List<String> imagenes) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imagenes = imagenes;
    }

    public Product(Long id, String title, String description, double price, List<String> imagenes) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imagenes = imagenes;
    }

    public Long getId() {
        return id;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<String> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<String> imageNames) {
        this.imagenes = imageNames;
    }

    @Override
    public String toString() {
        return "\n ID: " + id + " - Producto: " + title + " " + description + " Precio: " + price + ".";
    }
}
