import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { eliminarAtributoById, listarAtributos } from "../../../../services/atributos/AtributosFirebase";
import { HiMiniDocumentPlus } from "react-icons/hi2";
import listAtributosStyles from './listAtributos.style';


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
      <div style={listAtributosStyles.container}>
        <div style={listAtributosStyles.header}>
          <button
            style={listAtributosStyles.addButton}
            onClick={() => changeSection("NewAtributo")}
          >
            Agregar nuevo
            <HiMiniDocumentPlus style={listAtributosStyles.miniDocumentIcon} />
          </button>
        </div>
        {atributos &&
          atributos.map((atributo, index) => {
            return (
              <div style={listAtributosStyles.listItem} key={index}>
                <p>{atributo.titulo}</p>
                <div style={{ width: 50, height: 50 }}>
                  <img src={atributo?.urlImage} style={{ width: '100%', height: 'auto' }} />
                </div>
                
                <button
                  style={listAtributosStyles.editButton}
                  onClick={() => changeSection("NewAtributo", atributo)}
                >
                  Editar
                </button>
                <button
                  style={listAtributosStyles.deleteButton}
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
  }
export default ListAtributos;
