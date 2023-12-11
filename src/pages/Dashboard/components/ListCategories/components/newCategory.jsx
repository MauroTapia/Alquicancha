import React, { useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { crearCategoria, editarCategoriaById } from "../../../../../services/categories/categoriesFirebase";
import { 
  NewCategoryDiv, 
  InputContainer, 
  Labels, 
  Inputs, 
  ButtonsContainer, 
  Buttons 
} from "../components/newCategory.style";

const NewCategory = ({ data, changeSection }) => {
  const { id, imagen, titulo } = data || {};

  const [categoria, setCategoria] = useState({
    titulo: titulo || "",
    imagen: imagen || "",
    id: id || "",
  });

  const [isEdit, setIsEdit] = useState(data ? true : false);

  const notify = (msj) => {
    toast.success(msj, {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: true,
      style: {
        background: "#b7e4c7",
      },
    });
  };

  const handleChange = (e, fieldName) => {
    if (fieldName === "imagen") {
      // Si el campo es "imagen", asigna el objeto de archivo directamente
      const imagen = e.target.files[0];
      setCategoria((prevCategoria) => ({
        ...prevCategoria,
        imagen: imagen,
      }));
    } else {
      // Para otros campos, asigna el valor directamente
      const value = e.target.value;
      setCategoria((prevCategoria) => ({
        ...prevCategoria,
        [fieldName]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titulo !== "" && imagen !== null) {
      Swal.fire({
        title: "Guardar cambios",
        text: `Desea guardar los cambios?`,
        icon: "info",
        confirmButtonText: `Guardar`,
        showCancelButton: true,
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          !isEdit
            ? (
              // categoria.imagen = categoria.imagen.name,
              await crearCategoria(categoria),
              setTimeout(() => {
                changeSection("SectionCategories");
              }, 2000),
              notify("Nueva categoria creada con éxito!"))
            : (
              // categoria.imagen = categoria.imagen.name,
              await editarCategoriaById(categoria.id, categoria),
              setTimeout(() => {
                changeSection("SectionCategories");
              }, 2000),
              notify("Categoria editada con éxito!"));
        }
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Atención",
      text: `Desea cancelar y volver al listado?`,
      icon: "question",
      confirmButtonText: `Salir`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        changeSection("SectionCategories");
      }
    });
  };

  return (
    <NewCategoryDiv>
      <form
        onSubmit={handleSubmit}>
        <InputContainer>
          <Labels htmlFor="name">Titulo:</Labels>
          <Inputs
            type="text"
            value={categoria.titulo}
            id="name"
            onChange={(e) => handleChange(e, "titulo")}
          />
        </InputContainer>

        <Labels htmlFor="imagen">Imagen:  </Labels>
        <Inputs
          type="file"
          // value={categoria.imagen}
          onChange={(e) => handleChange(e, "imagen")}
        />

        <ButtonsContainer>
          <Buttons onClick={handleCancel}>
            Cancelar
          </Buttons>
          <Buttons>
            {isEdit ? "Editar" : "Guardar"}
          </Buttons>
        </ButtonsContainer>
      </form>
      <ToastContainer />
    </NewCategoryDiv>
  );
};

export default NewCategory;
