import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { eliminarAtributoById, listarAtributos } from "../../../../services/atributos/AtributosFirebase";

const ListAtributos = ({ changeSection }) => {
  const [atributos, setAtributos] = useState([]);

  useEffect(() => {
    const getAtributos = async () => {
      const atr = await listarAtributos();
      setAtributos(atr);
    };
    getAtributos();
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
    Swal.fire({
      title: "Eliminar?",
      text: `Desea eliminar el atributo: "${name}"?`,
      icon: "warning",
      confirmButtonText: `Eliminar`,
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        // const deleted = await eliminarProductoById(id);
        await eliminarAtributoById(id).then(async () => {
          setAtributos(await listarAtributos());
          notify("Atributo eliminado correctamente!");
        });
      }
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        style={{ alignSelf: "flex-end", padding: 8, margin: 4 }}
        onClick={() => changeSection("NewAtributo")}
      >
        Nueva
      </button>
      {atributos &&
        atributos.map((atributo, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
                alignItems: "center",
              }}
              key={index}
            >
              <p>{atributo.titulo}</p>
              <div style={{width:50, height: 50}}>
                <img src={atributo?.urlImage} style={{width:'100%', height:'auto'}}/>
              </div>
              <button
                style={{ backgroundColor: "green", padding: 8 }}
                onClick={() => changeSection("NewAtributo", atributo)}
              >
                Editar
              </button>
              <button
                style={{ backgroundColor: "red", padding: 8 }}
                onClick={() => handleDelete(atributo.id, atributo.titulo)}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      <ToastContainer />
    </div>
  );
};

export default ListAtributos;
