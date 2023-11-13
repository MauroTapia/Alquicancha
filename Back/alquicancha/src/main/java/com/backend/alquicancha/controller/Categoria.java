package com.backend.alquicancha.controller;

import com.backend.alquicancha.dto.CategoriaDto;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;
import com.backend.alquicancha.service.ICategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin

public class Categoria {

    private ICategoriaService categoriaService;

    @Autowired
    public Categoria(ICategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    // LIST
    @Operation(summary = "Listado de todos las categorias")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Listado correcto",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CategoriaDto.class))}),
            @ApiResponse(responseCode = "404", description = "Categorias no encontradas",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @GetMapping()
    public List<CategoriaDto> listarCategorias() {
        return categoriaService.listarCategorias();
    }

    // READ
    @Operation(summary = "Busqueda de una categoria por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Categoria encontrada correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CategoriaDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Categoria no encontrada",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDto> buscarCategoriaPorId(@PathVariable Long id) {
        return new ResponseEntity<>(categoriaService.buscarCategoria(id), null, HttpStatus.OK);
    }

    // DELETE
    @Operation(summary = "Eliminación de una categoria por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "CAtegoria eliminada correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CategoriaDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarCategoriaPorId(@PathVariable Long id) throws ResourceNotFoundException {
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.ok("Categoria eliminada");
    }

    // CREATE
    @Operation(summary = "Creación de una categoria")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Categoria creada correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CategoriaDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @PostMapping("/registrar")
    public ResponseEntity<CategoriaDto> registrarCategoria(@Valid @RequestBody com.backend.alquicancha.entity.Categoria categoria) throws BadRequestException {
        return new ResponseEntity<>(categoriaService.guardarCategoria(categoria), null, HttpStatus.CREATED);
    }


    // UPDATE
    @Operation(summary = "Modificación de una categoria por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Categoria modificada correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CategoriaDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<CategoriaDto> actualizarCategoria(@Valid @RequestBody com.backend.alquicancha.entity.Categoria categoria, @PathVariable long id) throws ResourceNotFoundException {
        return new ResponseEntity<>(categoriaService.actualizarCategoria(categoria, id), null, HttpStatus.OK);
    }

}
