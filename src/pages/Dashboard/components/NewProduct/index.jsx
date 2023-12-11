import React, { useContext, useEffect, useState } from "react";
import {
  Atributo,
  Buttons,
  ButtonsContainer,
  FormWrapper,
  InputContainer,
  Inputs,
  Labels,
  Selects,
  TextAreas,
  Titulo,
} from "./newProduct.style";
import { findProductTitle } from "../../../../services/product";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import MultipleImageUploader from "./MultipleImageUpload";
import {
  crearProducto,
  editarProductoById,
} from "../../../../services/product/productFirebase";
import { ContextGlobal } from "../../../../context/context";
import {
  getAtributoById,
  listarAtributos,
} from "../../../../services/atributos/AtributosFirebase";

const NewProduct = ({ data, changeSection }) => {
  const { categorias } = useContext(ContextGlobal).contextValue;

  const { categoria, precio, descripcion, detalles, imagenes, titulo, id } =
    data || {};

  const [product, setProduct] = useState({
    titulo: titulo || "",
    descripcion: descripcion || "",
    detalles: detalles,
    precio: precio || "",
    imagenes: imagenes || [],
    categoria: categoria || "",
    id: id || "",
  });

  const [isEdit, setIsEdit] = useState(data ? true : false);
  const [categories, setCategories] = useState(null);

  const [uploadedFiles, setUploadedFiles] = useState(product.imagenes);

  const [atributos, setAtributos] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});

  const [prodAtributos, setProdAtributos] = useState([]);

  useEffect(() => {
    setCategories(categorias);

    const getAtributos = async () => {
      const atr = await listarAtributos();
      setAtributos(atr);

      // Inicializar el estado de los checkboxes
      const initialCheckboxStates = {};
      atr.forEach((atributo) => {
        if(product.detalles.length) {
          initialCheckboxStates[atributo.id] = product.detalles.includes(atributo.id);
        }else{
          initialCheckboxStates[atributo.id] = false;
        }
      });
      setCheckboxStates(initialCheckboxStates);
    };

    getAtributos();

    // const atr = getAtributos()

    // const getAtributos = async () => {
    //   if (detalles) {
    //     // Usamos Promise.all para esperar a que todas las promesas se resuelvan
    //     const atributosPromises = detalles.map(async (detalle) => {
    //       const atributo = await getAtributoById(detalle);
    //       return atributo;
    //     });

    //     // Esperamos a que todas las promesas se resuelvan
    //     const atributosArray = await Promise.all(atributosPromises);

    //     // Actualizamos el estado con los nuevos atributos
    //     setAtributos(atributosArray);
    //   }
    // };

    // getAtributos();
  }, [detalles]);

  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.value;

    setCheckboxStates((prevCheckboxStates) => ({
      ...prevCheckboxStates,
      [checkboxId]: e.target.checked,
    }));
  
    // setProduct((prevProduct) => ({
    //   ...prevProduct,
    //   detalles: {
    //     ...prevProduct.detalles,
    //     checkboxId
    //   },
    // }));

    // setProdAtributos((prev) => ({
    //   ...prev,
    //   checkboxId
    // }));

    
  };

  const formatImagenes = async () => {
    product.imagenes.length = 0;

    uploadedFiles.forEach((image) => {
      const imagen = {
        img: image,
      };
      product.imagenes.push(imagen);
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const detallesArray = Object.keys(checkboxStates).filter((key) => checkboxStates[key]);

    product.detalles = detallesArray;

    if (true) {
      formatImagenes();
      if (product.categoria === "") product.categoria = categorias[0].id;
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
            ? (await crearProducto(product),
              setTimeout(() => {
                changeSection("SectionProducts");
              }, 2000),
              notify("Nuevo producto creado con éxito!"))
            : (await editarProductoById(product.id, product),
              setTimeout(() => {
                changeSection("SectionProducts");
              }, 2000),
              notify("Nuevo producto editado con éxito!"));
        }
      });
    } else {
      Swal.fire({
        title: "Atención",
        text: `El producto ya existe en la BD`,
        icon: "warning",
        confirmButtonText: `Ok`,
      });
    }
  };

  const handleChange = (e, fieldName) => {
    const value = e.target.value;

    // Si el campo es "categoria" y el valor es el valor por defecto del primer elemento
    if (fieldName === "categoria" && value === categorias[0].id) {
      // Establecer el valor en el id de la primera categoría
      setProduct((prevProduct) => ({
        ...prevProduct,
        [fieldName]: categorias[0].id,
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [fieldName]: value,
      }));
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
        changeSection("SectionProducts");
      }
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Labels htmlFor="name">Nombre:</Labels>
          <Inputs
            type="text"
            value={product.titulo}
            id="name"
            onChange={(e) => handleChange(e, "titulo")}
          />
        </InputContainer>

        <InputContainer>
          <Labels htmlFor="description">Descripción:</Labels>
          <TextAreas
            value={product.descripcion}
            id="description"
            onChange={(e) => handleChange(e, "descripcion")}
          />
        </InputContainer>

        <InputContainer>
          <Labels htmlFor="price">Precio diario:</Labels>
          <Inputs
            type="number"
            value={product.precio}
            id="price"
            onChange={(e) => handleChange(e, "precio")}
          />
        </InputContainer>

        <InputContainer>
          <Labels htmlFor="category">Categoria:</Labels>
          <Selects
            id="category"
            name="categoria"
            onChange={(e) => handleChange(e, "categoria")}
            value={
              product.categoria !== "" ? product.categoria : categorias[0].id
            }
          >
            {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.titulo}
                </option>
              ))}
          </Selects>
        </InputContainer>
        
        <InputContainer>
          <Labels>Atributos</Labels>
          {atributos.length > 1 && (
            <Atributo>
              {atributos.map((atributo, index) => (
                <Titulo key={index}>
                  <input
                    type="checkbox"
                    id={atributo.id}
                    value={atributo.id}
                    checked={checkboxStates[atributo.id]}
                    onChange={handleCheckboxChange}
                    style={{ marginRight: 12 }}
                  />
                  {atributo.titulo}
                </Titulo>
              ))}
            </Atributo>
          )}
        </InputContainer>

        <InputContainer>
          <Labels>Imagenes</Labels>
          <MultipleImageUploader
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </InputContainer>

        <ButtonsContainer>
          <Buttons type="button" onClick={handleCancel}>
            Cancelar
          </Buttons>
          <Buttons type="submit">Guardar</Buttons>
        </ButtonsContainer>
      </form>

      <ToastContainer />
    </FormWrapper>
  );
};

export default NewProduct;
