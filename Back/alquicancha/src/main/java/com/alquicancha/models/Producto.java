package com.alquicancha.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    private String descripcion;
    private LocalDate fechaDesde;
    private LocalDate fechaHasta;
    private Set<String> fotos = new HashSet<>();

    public Producto(){

    }

    public Producto(String nombre, String descripcion, LocalDate fechaDesde, LocalDate fechaHasta, Set<String> fotos) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.fotos = fotos;
    }

    public Long getId() {
        return id;
    }


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public LocalDate getFechaDesde() {
        return fechaDesde;
    }

    public void setFechaDesde(LocalDate fechaDesde) {
        this.fechaDesde = fechaDesde;
    }

    public LocalDate getFechaHasta() {
        return fechaHasta;
    }

    public void setFechaHasta(LocalDate fechaHasta) {
        this.fechaHasta = fechaHasta;
    }

    public Set<String> getFotos() {
        return fotos;
    }

    public void setFotos(Set<String> fotos) {
        this.fotos = fotos;
    }
}
