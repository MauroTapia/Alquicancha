package com.backend.alquicancha.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UsuarioDto {

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String phone;
    private int dni;

    private boolean isAdmin;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate fechaIngreso;
    private DomicilioDto domicilio;

    public UsuarioDto() {
    }

    public UsuarioDto(Long id, String nombre, String apellido, String email, String password, String phone, int dni, boolean isAdmin, LocalDate fechaIngreso, DomicilioDto domicilio) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.apellido = apellido;
        this.dni = dni;
        this.isAdmin = isAdmin;
        this.fechaIngreso = fechaIngreso;
        this.domicilio = domicilio;
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

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getDni() {
        return dni;
    }

    public void setDni(int dni) {
        this.dni = dni;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(LocalDate fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public DomicilioDto getDomicilioDto() {
        return domicilio;
    }

    public void setDomicilioDto(DomicilioDto domicilioDto) {
        this.domicilio = domicilioDto;
    }
}
