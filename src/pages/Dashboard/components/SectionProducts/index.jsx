import React, { useContext, useEffect, useState } from "react";

import {
  ButtonNew,
  ButtonNewContainer,
  Buttons,
  Header,
  ItemTitle,
  ProductItem,
  Wrapper,
} from "./sectionProducts.style";
import Paginator from "./modules/Paginator";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { HiMiniDocumentPlus } from "react-icons/hi2";
import NewProduct from "../NewProduct";
import {
  eliminarProductoById,
  listarProductos,
} from "../../../../services/product/productFirebase";
import { ContextGlobal } from "../../../../context/context";

const SectionProducts = ({ changeSection }) => {
  const { productos, setProductData, categorias } =
    useContext(ContextGlobal).contextValue;

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const productData = await listarProductos();
      setProducts(productData);
      setProductData(productData);
      const total = Math.ceil(products?.length / productsPerPage);
      setTotalPages(total);
    };

    fetchData();

    setCategories(categorias);
  }, []);

  const getCatName = (id) => {
    const categoria = categorias.find((item) => item.id === id);
    return categoria.titulo;
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
        // const deleted = await eliminarProductoById(id);
        await eliminarProductoById(id).then(async () => {
          setProducts(await listarProductos());
          notify("Producto eliminado correctamente!");
        });

        //     // const total = Math.ceil(result.length / productsPerPage);
      }
    });
  };

  return (
    <Wrapper>
      <ButtonNewContainer>
        <ButtonNew onClick={() => changeSection("Edit")}>
          Agregar nuevo
          <HiMiniDocumentPlus />
        </ButtonNew>
      </ButtonNewContainer>

      {/* <Paginator
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
        indexOfFirstProduct={indexOfFirstProduct}
        indexOfLastProduct={indexOfLastProduct}
        products={products}
      /> */}

      <Header>
        <p>Nombre</p>
        <p>Categoria</p>
        <p>Precio</p>
        <p>Acciones</p>
      </Header>

      {products.map((product, index) => (
        <ProductItem key={index}>
          <ItemTitle>{product.titulo}</ItemTitle>
          <p>{getCatName(product.categoria)}</p>
          <p>{product.precio}</p>
          <Buttons>
            <button onClick={() => changeSection("Edit", product)}>
              Editar
            </button>
            <button onClick={() => handleDelete(product.id, product.titulo)}>
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
