import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../../services/product";
import {
  Buttons,
  Header,
  ItemTitle,
  ProductItem,
  Wrapper,
} from "./sectionProducts.style";
import { getAllCategories } from "../../../../services/categories";
import Paginator from "./modules/Paginator";

const SectionProducts = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);

    getAllProducts().then((result) => {
      setProducts(result);

      const total = Math.ceil(result.length / productsPerPage);
      setTotalPages(total);
    });

    getAllCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  const getCatName = (id) => {
    const category = categories.find(
      (category) => category.id === parseInt(id)
    );
    return category.title;
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (!products) {
    return <p>Cargando...</p>;
  }

  return (
    <Wrapper>
      <Paginator
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
        indexOfFirstProduct={indexOfFirstProduct}
        indexOfLastProduct={indexOfLastProduct}
        products={products}
      />

      <Header>
        <p>Id</p>
        <p>Nombre</p>
        <p>Categoria</p>
        <p>Precio</p>
        <p>Acciones</p>
      </Header>

      {currentProducts.map((product, index) => (
        <ProductItem key={index}>
          <p># {product.id}</p>
          <ItemTitle>{product.title}</ItemTitle>
          <p>{getCatName(product.category)}</p>
          <p>{product.dayPrice}</p>
          <Buttons>
            <button>Editar</button>
            <button>Eliminar</button>
          </Buttons>
        </ProductItem>
      ))}
    </Wrapper>
  );
};

export default SectionProducts;
