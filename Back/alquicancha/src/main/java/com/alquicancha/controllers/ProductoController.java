package com.alquicancha.controllers;

import com.alquicancha.models.Producto;
import com.alquicancha.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping
    public List<Producto> listarProductos(){
        return productoRepository.findAll();
    }

    @PostMapping("/registrar")
    public ResponseEntity<Producto> registrarProducto(@RequestBody Producto producto){
        return new ResponseEntity<>(productoRepository.save(producto),null, HttpStatus.CREATED);
    }
}
