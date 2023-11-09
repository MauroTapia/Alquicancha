import React, { useEffect, useState } from "react";
import {
  deleteProductById,
  getAllProducts,
} from "../../../../services/product";
import {
  ButtonNew,
  ButtonNewContainer,
  Buttons,
  Header,
  ItemTitle,
  ProductItem,
  Wrapper,
} from "./sectionProducts.style";
import { getAllCategories } from "../../../../services/categories";
import Paginator from "./modules/Paginator";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { HiMiniDocumentPlus } from "react-icons/hi2";
import NewProduct from "../NewProduct";

const SectionProducts = ( {changeSection} ) => {

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);

    getAllProducts().then((result) => {
      setProducts(result);

      result.sort((a,b) => parseInt(a.id) - parseInt(b.id));

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

  const notify = (msj) => {
    toast.success(msj, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      style: {
        background: "#b7e4c7",
      },
    });
  };

  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Eliminar?",
      text: `Desea eliminar el producto: "${name}"?`,
      icon: "warning",
      confirmButtonText: `Eliminar`,
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProductById(id);
        getAllProducts().then((result) => {
          setProducts(result);

          const total = Math.ceil(result.length / productsPerPage);
          setTotalPages(total);
        });
        notify("Producto eliminado correctamente!");
      }
    });
  };

  return (
        <Wrapper>
          <ButtonNewContainer>
            <ButtonNew
              onClick={()=>changeSection('Edit')}
            >
              Agregar nuevo
              <HiMiniDocumentPlus />
            </ButtonNew>
          </ButtonNewContainer>

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
                <button onClick={() => changeSection('Edit', product)}>Editar</button>
                <button onClick={() => handleDelete(product.id, product.title)}>
                  Eliminar
                </button>
              </Buttons>
            </ProductItem>
          ))}
          <ToastContainer />
        </Wrapper>

  );
};

export default SectionProducts;
