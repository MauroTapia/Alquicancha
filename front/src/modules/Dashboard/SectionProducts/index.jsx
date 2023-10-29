import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/product";
import {
  Buttons,
  Header,
  ItemTitle,
  ProductItem,
  Wrapper,
} from "./sectionProducts.style";
import { getAllCategories } from "../../../services/categories";

const SectionProducts = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    getAllProducts().then((result) => {
      setProducts(result);
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

  if (!products) {
    return <p>Cargando...</p>;
  }

  return (
    <Wrapper>
      <Header>
        <p>Id</p>
        <p>Nombre</p>
        <p>Categoria</p>
        <p>Precio</p>
        <p>Acciones</p>
      </Header>

      {products.map((product, index) => (
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
