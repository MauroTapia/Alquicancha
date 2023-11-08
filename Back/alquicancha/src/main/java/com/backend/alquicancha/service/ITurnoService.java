package com.backend.alquicancha.service;

import com.backend.alquicancha.dto.TurnoDto;
import com.backend.alquicancha.entity.Turno;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;

import java.util.List;

public interface ITurnoService {
    TurnoDto guardarTurno(Turno turno) throws BadRequestException;

    List<TurnoDto> listarTodos();

    TurnoDto buscarTurnoPorId(Long id) throws ResourceNotFoundException;

    TurnoDto actualizarTurno(Turno turno) throws ResourceNotFoundException, BadRequestException;

    void eliminarTurno(Long id) throws ResourceNotFoundException;
}