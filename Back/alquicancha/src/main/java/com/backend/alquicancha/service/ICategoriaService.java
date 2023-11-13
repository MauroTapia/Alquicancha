package com.backend.alquicancha.service;

import com.backend.alquicancha.dto.CategoriaDto;
import com.backend.alquicancha.entity.Categoria;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;

import javax.validation.Valid;
import java.util.List;

public interface ICategoriaService {

    CategoriaDto guardarCategoria(com.backend.alquicancha.entity.Categoria categoria) throws BadRequestException;

    List<CategoriaDto> listarCategorias();

    void eliminarCategoria(Long id) throws ResourceNotFoundException;

    CategoriaDto buscarCategoria(Long id);

    CategoriaDto actualizarCategoria(@Valid Categoria categoria, Long id) throws ResourceNotFoundException;
}
