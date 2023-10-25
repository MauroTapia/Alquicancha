package com.alquicancha.controllers;

import com.alquicancha.Service.ProductoService;
import com.alquicancha.models.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;
    //private ProductoRepository productoRepository; cambie esto.

    @GetMapping("/listar")
    public ResponseEntity<List<Producto>> getAllProducto(){
        return new ResponseEntity<List<Producto>>(productoService.allProductos(), HttpStatus.OK);
    }

    //cree el service y lo relacione, pero hay que revisar si esta bien
    @PostMapping
    public ResponseEntity<Producto> registrarProducto(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.guardarProducto(producto));
    }
}
