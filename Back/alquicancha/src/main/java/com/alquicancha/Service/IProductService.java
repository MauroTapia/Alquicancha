package com.alquicancha.Service;
import com.alquicancha.controllers.dto.ProductDTO;
import com.alquicancha.model.Product;

import java.time.LocalDate;
import java.util.Set;


public interface IProductService {
    Set<ProductDTO> findAll();
    ProductDTO findById(Long id);
    ProductDTO register(String name, String description, LocalDate fromDate, LocalDate toDate);
    void delete(Long id);
    ProductDTO update(Product product);


}
