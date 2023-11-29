import React, { useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { crearAtributo, editarAtributoById } from "../../../../../services/atributos/AtributosFirebase";

const NewAtributo = ({ data, changeSection }) => {
  const { id, imagen, titulo } = data || {};

  const [atributo, setAtributo] = useState({
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
      setAtributo((prevAtributo) => ({
        ...prevAtributo,
        imagen: imagen,
      }));
    } else {
      // Para otros campos, asigna el valor directamente
      const value = e.target.value;
      setAtributo((prevAtributo) => ({
        ...prevAtributo,
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
              await crearAtributo(atributo),
              setTimeout(() => {
                changeSection("SectionAtributos");
              }, 2000),
              notify("Nuevo atributo creado con éxito!"))
            : (
              // categoria.imagen = categoria.imagen.name,
              await editarAtributoById(atributo.id, atributo),
              setTimeout(() => {
                changeSection("SectionAtributos");
              }, 2000),
              notify("Atributo creado con éxito!"));
        }
      });
    }
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Atención",
      text: `Desea cancelar y volver al listado?`,
      icon: "question",
      confirmButtonText: `Salir`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        changeSection("SectionAtributos");
      }
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: 20,
        }}
      >
        <label htmlFor="titulo">Titulo</label>
        <input
          type="text"
          value={atributo.titulo}
          onChange={(e) => handleChange(e, "titulo")}
        />

        <label htmlFor="imagen">Imagen</label>
        <input
          type="file"
          // value={categoria.imagen}
          onChange={(e) => handleChange(e, "imagen")}
        />

        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <button style={{ width: 300, padding: 10 }} onClick={handleCancel}>
            Cancelar
          </button>
          <button style={{ width: 300, padding: 10 }}>
            {isEdit ? "Editar" : "Guardar"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewAtributo;
