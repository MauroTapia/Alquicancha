package com.backend.alquicancha.entity;

import com.backend.alquicancha.exceptions.ValidarNumero;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.time.LocalDate;


@Entity
@Table(name = "USUARIOS")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Pattern(regexp = "^[a-zA-Z\\s]*$", message = "El campo no debe contener números")
    @Size(max = 50, message = "El nombre debe tener hasta 50 caracteres")
    @NotNull(message = "El nombre el usuario no puede ser nulo")
    @NotBlank(message = "Debe especificarse el nombre del usuario")
    private String nombre;
    @Pattern(regexp = "^[a-zA-Z\\s]*$", message = "El campo no debe contener números")
    @Size(max = 50, message = "El apellido debe tener hasta 50 caracteres")
    @NotNull(message = "El apellido el usuario no puede ser nulo")
    @NotBlank(message = "Debe especificarse el apellido del usuario")
    private String apellido;

    @Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "El campo no debe ser un email valido")
    @Size(max = 64, message = "El email debe tener maximo 64 caracteres")
    @NotNull(message = "El email del usuario no puede ser nulo")
    @NotBlank(message = "Debe especificarse el email del usuario")
    private String email;

    @Pattern(regexp = "^\\d{14}$", message = "El campo solo debe contener números")
    @Size(max = 14, message = "El numero debe tener hasta 14 caracteres")
    @NotNull(message = "El telefono del usuario no puede ser nulo")
    @NotBlank(message = "Debe especificarse el telefono del usuario")
    private String phone;

    @ValidarNumero(message = "Debe ingresar un numero en DNI")
    @NotNull(message = "El DNI no puede ser nulo")
    @Min(value = 1, message = "El DNI debe ser un número entero mayor o igual a 1.")
    private int dni;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @FutureOrPresent(message = "La fecha no puede ser anterior al día de hoy")
    @NotNull(message = "Debe especificarse la fecha de ingreso del usuario")
    private LocalDate fechaIngreso;

    @NotNull(message = "Debe especificarse si es administrador")
    private boolean isAdmin;

    @Valid
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "domicilio_id")
    private Domicilio domicilio;


    public Usuario() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Usuario(String nombre, String apellido, String email, String phone, int dni, LocalDate fechaIngreso, boolean isAdmin, Domicilio domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.phone = phone;
        this.fechaIngreso = fechaIngreso;
        this.isAdmin = isAdmin;
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

    public LocalDate getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(LocalDate fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
    public Domicilio getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(Domicilio domicilio) {
        this.domicilio = domicilio;
    }

    @Override
    public String toString() {
        return "Id: " + id + " - Nombre: " + nombre + " - Apellido: " + apellido + " - DNI: " + dni + " - Email: " + email + " - Telefono: " + phone + " - Fechas de ingreso: " + fechaIngreso + " - Es administrador: " + isAdmin + " - Domicilio: " + domicilio;
    }
}
