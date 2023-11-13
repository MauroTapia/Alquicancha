package com.backend.alquicancha.service.impl;


import com.backend.alquicancha.dto.CategoriaDto;
import com.backend.alquicancha.dto.UsuarioDto;
import com.backend.alquicancha.entity.Categoria;
import com.backend.alquicancha.entity.Usuario;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;
import com.backend.alquicancha.repository.ICategoriaRepository;
import com.backend.alquicancha.service.ICategoriaService;
import com.backend.alquicancha.utils.JsonPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService implements ICategoriaService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoriaService.class);
    private final  ICategoriaRepository categoriaRepository;
    private final ObjectMapper mapper;

    @Autowired
    public CategoriaService(ICategoriaRepository categoriaRepository, ObjectMapper mapper) {
        this.categoriaRepository = categoriaRepository;
        this.mapper = mapper;
    }

    @Override
    public CategoriaDto guardarCategoria(com.backend.alquicancha.entity.Categoria categoria) throws BadRequestException {
        Categoria categoriaNueva = categoriaRepository.save(categoria);
        CategoriaDto categoriaDtoNueva = mapper.convertValue(categoriaNueva, CategoriaDto.class);

        if (categoriaNueva == null) {
            LOGGER.error("Error al registrar la categoria");
            throw new BadRequestException("Error al registrar la categoria");
        }
        LOGGER.info("Nueva categoria registrada con exito: {}", JsonPrinter.toString(categoriaDtoNueva));

        return categoriaDtoNueva;
    }

    @Override
    public List<CategoriaDto> listarCategorias() {
        List<Categoria> categorias = categoriaRepository.findAll();
        List<CategoriaDto> categoriaDtos = categorias.stream()
                .map(categoria -> {
                    return new CategoriaDto(categoria.getId(), categoria.getNombre(), categoria.getImagen());
                })
                .toList();
        return categoriaDtos;
    }

    @Override
    public void eliminarCategoria(Long id) throws ResourceNotFoundException {
        if (buscarCategoria(id) != null) {
            categoriaRepository.deleteById(id);
            LOGGER.warn("Se ha eliminado la categoria con id {}", id);
        } else {
            LOGGER.error("No se ha encontrado la categoria con id {} " + id);
            throw new ResourceNotFoundException("No se ha encontrado la categoria con id " + id);
        }
    }

    @Override
    public CategoriaDto buscarCategoria(Long id) {

        Categoria categoriaBuscada = categoriaRepository.findById(id).orElse(null);
        CategoriaDto categoriaDto = null;
        if (categoriaBuscada != null) {
            categoriaDto  = mapper.convertValue(categoriaBuscada, CategoriaDto.class);
            LOGGER.info("Usuario encontrado: {}", JsonPrinter.toString(categoriaDto));
        } else {
            LOGGER.info("El id no se encuentra registrado en la base de datos");

        }

        return categoriaDto;
    }

    @Override
    public CategoriaDto actualizarCategoria(Categoria categoria, Long id) throws ResourceNotFoundException {
        Categoria categoriaAActualizar = categoriaRepository.findById(id).orElse(null);
        CategoriaDto categoriaActualizadaDto = null;

        if (categoriaAActualizar != null) {
            categoriaAActualizar.setNombre(categoria.getNombre());
            categoriaAActualizar.setImagen(categoria.getImagen());

            categoriaRepository.save(categoriaAActualizar);
            categoriaActualizadaDto = mapper.convertValue(categoriaAActualizar, CategoriaDto.class);
            LOGGER.info("Usuario actualizado con exito: {}", JsonPrinter.toString(categoriaActualizadaDto));
        } else {
            LOGGER.error("No fue posible actualizar los datos ya que el usuario no se encuentra registrado");
            throw new ResourceNotFoundException("No fue posible actualizar los datos ya que el usuario no se encuentra registrado");
        }

        return categoriaActualizadaDto;
    }

}
