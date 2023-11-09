package com.backend.alquicancha.service.impl;


import com.backend.alquicancha.dto.ProductDto;
import com.backend.alquicancha.entity.Product;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;
import com.backend.alquicancha.repository.IProductRepository;
import com.backend.alquicancha.service.IProductService;
import com.backend.alquicancha.utils.JsonPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductService.class);
    private final IProductRepository productRepository;
    private final ObjectMapper mapper;

    @Autowired
    public ProductService(IProductRepository productRepository, ObjectMapper mapper) {
        this.productRepository = productRepository;
        this.mapper = mapper;
    }

    @Override
    public ProductDto guardarProducto(Product product) throws BadRequestException {
        ProductDto productDto = mapper.convertValue(productRepository.save(product), ProductDto.class);

        if (productDto == null) {
            LOGGER.error("Error al registrar el product");
            throw new BadRequestException("Error al registrar el product");
        }

        LOGGER.info("Nuevo product registrado con exito: {}", JsonPrinter.toString(productDto));
        return productDto;
    }

    @Override
    public List<ProductDto> listarProductos() {
        List<ProductDto> productDtos = productRepository.findAll().stream().map(product -> mapper.convertValue(product, ProductDto.class)).toList();
        LOGGER.info("Lista de todos los productos: {}", JsonPrinter.toString(productDtos));

        return productDtos;
    }

    @Override
    public void eliminarProducto(Long id) throws ResourceNotFoundException {
        if (buscarProducto(id) != null) {
            productRepository.deleteById(id);
            LOGGER.warn("Se ha eliminado el pruducto con id {}", id);
        } else {
            LOGGER.error("No se ha encontrado el pruducto con id " + id);
            throw new ResourceNotFoundException("No se ha encontrado el pruducto con id " + id);
        }
    }

    @Override
    public ProductDto buscarProducto(Long id)   {
        Product productoBuscado = productRepository.findById(id).orElse(null);
        ProductDto productDto = null;
        if (productoBuscado != null) {
            productDto = mapper.convertValue(productoBuscado, ProductDto.class);
            LOGGER.info("Producto encontrado: {}", JsonPrinter.toString(productDto));
        } else {
            LOGGER.info("El producto con id: " + id + " no existe en la base de datos");

        }
        return productDto;
    }

    @Override
    public ProductDto actualizarProducto(Product product) throws ResourceNotFoundException {
        Product productoActualizar = productRepository.findById(product.getId()).orElse(null);
        ProductDto productoDtoActualizado = null;

        if (productoActualizar != null) {
            productoActualizar = product;
            productRepository.save(productoActualizar);
            productoDtoActualizado = mapper.convertValue(productoActualizar, ProductDto.class);
            LOGGER.info("Producto actualizado con exito: {}", JsonPrinter.toString(productoDtoActualizado));
        } else {
            LOGGER.info("No se pudo actualizar, el producto no se encuentra registrado.");
            throw new ResourceNotFoundException("No fue posible encontrar el producto");
        }
        return productoDtoActualizado;
    }
}
