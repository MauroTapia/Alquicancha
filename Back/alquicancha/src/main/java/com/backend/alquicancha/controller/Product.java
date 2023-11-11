package com.backend.alquicancha.controller;

import com.backend.alquicancha.dto.ProductDto;
import com.backend.alquicancha.dto.UsuarioDto;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;
import com.backend.alquicancha.service.IProductService;
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
@RequestMapping("/products")
@CrossOrigin

public class Product {

    private IProductService productService;

    @Autowired
    public Product(IProductService productService) {
        this.productService = productService;
    }

    // LIST
    @Operation(summary = "Listado de todos los productos")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Listado correcto",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDto.class))}),
            @ApiResponse(responseCode = "404", description = "Productos no encontrados",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @GetMapping()
    public List<ProductDto> listarProductos() {
        return productService.listarProductos();
    }

    // READ
    @Operation(summary = "Busqueda de un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Producto encontrado correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> buscarProductoPorId(@PathVariable Long id) {
        return new ResponseEntity<>(productService.buscarProducto(id), null, HttpStatus.OK);
    }

    // DELETE
    @Operation(summary = "Eliminación de un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Producto eliminado correctamente",
            content = {@Content(mediaType = "application/json",
                schema = @Schema(implementation = ProductDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                content = @Content)
    })
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {
        productService.eliminarProducto(id);
        return ResponseEntity.ok("Producto eliminado");
    }

    // CREATE
    @Operation(summary = "Creación de un producto")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Producto creado correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @PostMapping("/registrar")
    public ResponseEntity<ProductDto> registrarProducto(@Valid @RequestBody ProductDto productDto) throws BadRequestException {
        return new ResponseEntity<>(productService.guardarProducto(productDto), null, HttpStatus.CREATED);
    }


    // UPDATE
    @Operation(summary = "Modificación de un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Producto modificado correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<ProductDto> actualizarProducto(@Valid @RequestBody com.backend.alquicancha.entity.Product product, @PathVariable long id) throws ResourceNotFoundException {
        return new ResponseEntity<>(productService.actualizarProducto(product, id), null, HttpStatus.OK);
    }

}
