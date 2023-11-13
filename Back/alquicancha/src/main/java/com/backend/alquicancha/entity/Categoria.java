package com.backend.alquicancha.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "CATEGORIAS")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 15, message = "El nombre debe tener hasta 15 caracteres")
    @NotNull(message = "El nombre no puede ser nulo")
    @NotBlank(message = "Debe especificarse un nombre")
    private String nombre;

    @Size(max = 50, message = "La imagen debe tener hasta 50 caracteres")
    @NotNull(message = "La imagen no puede ser nulo")
    @NotBlank(message = "Debe especificarse una imagen")
    private String imagen;

    public Categoria() {
    }

    public Categoria(Long id, String nombre, String imagen) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
    }
    public Categoria(String nombre, String imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }


    public Long getId() {
        return id;
    }


    @Override
    public String toString() {
        return "\n ID: " + id + " - Categoria: " + nombre + " " + " Imagen: " + imagen + ".";
    }
}
