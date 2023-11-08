package com.backend.alquicancha.service;

import com.backend.alquicancha.dto.ProductDto;
import com.backend.alquicancha.entity.Product;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;

import java.util.List;

public interface IProductService {

    ProductDto guardarProducto(Product product) throws BadRequestException;

    List<ProductDto> listarProductos();

    void eliminarProducto(Long id) throws ResourceNotFoundException;

    ProductDto buscarProducto(Long id) ;

    ProductDto actualizarProducto(Product product) throws ResourceNotFoundException;
}
