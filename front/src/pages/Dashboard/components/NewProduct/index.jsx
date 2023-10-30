import React, { useEffect, useState } from "react";
import {
  Buttons,
  ButtonsContainer,
  FormWrapper,
  InputContainer,
  Inputs,
  Labels,
  Selects,
  TextAreas,
} from "./newProduct.style";
import { getAllCategories } from "../../../../services/categories";
import { editProductById, findProductTitle, newProduct } from "../../../../services/product";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import MultipleImageUploader from "./MultipleImageUpload";

const NewProduct = ({ data, changeSection }) => {
  const { category, dayPrice, description, details, images, title, id } =
    data || {};

  const [product, setProduct] = useState({
    title: title || "",
    description: description || "",
    details: details || "",
    dayPrice: dayPrice || "",
    images: images || [],
    category: category || "",
  });

  const [isEdit, setIsEdit] = useState(data ? true : false);
  const [categories, setCategories] = useState(null);

  const [uploadedFiles, setUploadedFiles] = useState(product.images);

  useEffect(() => {
    getAllCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  const imagePath = (image)=>{
    if(image.path){
      if(image.name.includes('/canchas/')){
        return image
      }
      return `/canchas/${image.name}`;
    }
    return image.img
  }

  const validateForm = async () => {
    console.log(uploadedFiles);
    product.images.length = 0;
    uploadedFiles.forEach((image) =>{
      console.log(image);
      const img = {
        img: imagePath(image),
        alt: product.title
      }
      product.images.push(img);
    });
    console.log(product);
    if(!isEdit){
      const existProduct = await findProductTitle(product.title);
  
      if(existProduct) return false

    }

    return true;
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

    if ( await validateForm()) {
      Swal.fire({
        title: "Guardar cambios",
        text: `Desea guardar los cambios?`,
        icon: "info",
        confirmButtonText: `Guardar`,
        showCancelButton: true,
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          product.id = id;
          isEdit
            ? (
              editProductById(id, product),
              setTimeout(() => {
                changeSection("SectionProducts");
              }, 2000),
              notify("Producto editado con éxito!"))
            : (newProduct(product),
              setTimeout(() => {
                changeSection("SectionProducts");
              }, 2000),
              notify("Nuevo producto creado con éxito!"));
        }
      });
    }else{
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
    setProduct((prevProduct) => ({
      ...prevProduct,
      [fieldName]: value,
    }));
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
            value={product.title}
            id="name"
            onChange={(e) => handleChange(e, "title")}
          />
        </InputContainer>

        <InputContainer>
          <Labels htmlFor="description">Descripción:</Labels>
          <TextAreas
            value={product.description}
            id="description"
            onChange={(e) => handleChange(e, "description")}
          />
        </InputContainer>

        <InputContainer>
          <Labels htmlFor="price">Precio diario:</Labels>
          <Inputs
            type="number"
            value={product.dayPrice}
            id="price"
            onChange={(e) => handleChange(e, "dayPrice")}
          />
        </InputContainer>

        <InputContainer>
          <Labels htmlFor="category">Categoria:</Labels>
          <Selects
            id="categories"
            name="categories"
            onChange={(e) => handleChange(e, "category")}
          >
            {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
          </Selects>
        </InputContainer>
        
        <InputContainer>
          <Labels>Imagenes</Labels>
          <MultipleImageUploader uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>
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
