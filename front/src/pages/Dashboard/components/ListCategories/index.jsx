import React, { useEffect, useState } from "react";
import {
  eliminarCategoriaById,
  listarCategorias,
} from "../../../../services/categories/categoriesFirebase";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { HiMiniDocumentPlus } from "react-icons/hi2";
import listCategoriesStyles from "./newCategory.style";

const ListCategories = ({ changeSection }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getCategorias = async () => {
      const cat = await listarCategorias();
      setCategorias(cat);
    };
    getCategorias();
  }, []);

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
    if(id === '9a9crFjibptLfhr3glcE'){
      Swal.fire({
        title: "Denegado",
        text: `No se puede eliminar la categoría: "${name}"?, por ser la principal.`,
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Eliminar?",
      text: `Desea eliminar la categoria: "${name}"?, todos los productos con esta categoría pasaran a ser de la categoría principal.`,
      icon: "warning",
      confirmButtonText: `Eliminar`,
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        // const deleted = await eliminarProductoById(id);
        await eliminarCategoriaById(id).then(async () => {
          setCategorias(await listarCategorias());
          notify("Categoria eliminada correctamente!");
        });
      }
    });
  };

  return (
    <div style={listCategoriesStyles.container}>
      <div style={listCategoriesStyles.header}>
      <button
            style={listCategoriesStyles.addButton}
            onClick={() => changeSection("NewCategory")}
          >
            Agregar nuevo
            <HiMiniDocumentPlus style={listCategoriesStyles.miniDocumentIcon} />
          </button>
        </div>
      {categorias &&
        categorias.map((categoria, index) => (
          <div
            style={listCategoriesStyles.listItem}
            key={index}
          >
            <p>{categoria.titulo}</p>
            <div style={{ width: 50, height: 50 }}>
              <img src={categoria?.urlImage} style={{ width: "100%", height: "auto" }} />
            </div>
            <button
              style={listCategoriesStyles.editButton}
              onClick={() => changeSection("NewCategory", categoria)}
            >
              Editar
            </button>
            <button
              style={listCategoriesStyles.deleteButton}
              onClick={() => handleDelete(categoria.id, categoria.titulo)}
            >
              Eliminar
            </button>
          </div>
        ))}
      <ToastContainer />
    </div>
  );
};

export default ListCategories;
