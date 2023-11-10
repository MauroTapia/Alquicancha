package com.backend.alquicancha.dto;

import com.backend.alquicancha.entity.Reserva;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservaDto {

    private Long id;
    private Long idPaciente;
    private Long idOdontologo;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm")
    private LocalDateTime fecha;

    public ReservaDto() {
    }

    public ReservaDto(Long id, Long idPaciente, Long idOdontologo, LocalDateTime fecha) {

        this.id = id;
        this.idPaciente = idPaciente;

        this.idOdontologo = idOdontologo;
        this.fecha = fecha;
    }

    public ReservaDto(UsuarioDto pacienteTurno, ProductDto odontologoTurno, LocalDateTime fecha) {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPaciente() {
        return idPaciente;
    }

    public void setPaciente(Long paciente) {
        this.idPaciente = idPaciente;
    }

    public Long getOdontologo() {
        return idOdontologo;
    }

    public void setOdontologo(Long odontologo) {
        this.idOdontologo = idOdontologo;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public static ReservaDto fromTurno(Reserva reserva) {
        Long paciente = reserva.getUsuario().getId();
        Long odontologo = reserva.getProducto().getId();
        return new ReservaDto(reserva.getId(), paciente, odontologo, reserva.getFecha());
    }
}
