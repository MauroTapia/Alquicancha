import { storage, db } from "../../firebase/credenciales";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { changeCategory } from "../product/productFirebase";
import { obtenerNombreArchivoDesdeURL } from "../../utils/obtener-nombre-de-url";

export const listarCategorias = async () => {
  const collectionRef = collection(db, "categorias");
  try {
    const categoriasData = await getDocs(collectionRef);
    const categorias = categoriasData.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    return categorias;
  } catch (error) {
    console.log(error);
  }
};

export const uploadCategoriaImagen = async (file) => {
  try {
    const folderRef = ref(storage, `categoriasImagenes/${file.name}`);
    await uploadBytes(folderRef, file);
    const url = await getDownloadURL(folderRef);
    return url;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategoriaImagen = async (url) => {
  try {
    // Obtener el nombre del archivo a partir de la URL
    const nombreArchivo = obtenerNombreArchivoDesdeURL(url);
    const storageRef = ref(storage, `${nombreArchivo}`);

    // Eliminar el objeto en Storage
    await deleteObject(storageRef);

    console.log("Imagen eliminada con éxito");
  } catch (error) {
    console.log(error);
  }
};

export const crearCategoria = async (data) => {
  try {
    // Subir la imagen y obtener la URL
    data.urlImage = await uploadCategoriaImagen(data.imagen);

    // quito la propiedad imagen del objeto
    const { imagen, ...nuevoObjeto } = data;

    // Crear la categoría en Firestore
    const collectionRef = collection(db, "categorias");
    const nuevoDocumento = await addDoc(collectionRef, nuevoObjeto);

    // Obtener el id del nuevo documento
    const nuevoDocumentoId = nuevoDocumento.id;

    // Actualizar el documento recién creado con el mismo id
    const categoriaRef = doc(collectionRef, nuevoDocumentoId);
    const categoria = await setDoc(
      categoriaRef,
      { id: nuevoDocumentoId },
      { merge: true }
    );

    console.log("Categoria creada exitosamente", categoria);
    return categoria;
  } catch (error) {
    console.log("Error al guardar categoria en BD", error);
    return null;
  }
};

export const eliminarCategoriaById = async (id) => {
  if (id === "9a9crFjibptLfhr3glcE") {
    console.log("No se puede eliminar la categoria principal!");
    changeCategory(id, "9a9crFjibptLfhr3glcE");

    return null;
  }
  try {
    // Todos los productos con la categoria a borrar se cambia por la categoria principal
    changeCategory(id, "9a9crFjibptLfhr3glcE");

    const collectionRef = collection(db, "categorias");

    const categoriaRef = doc(collectionRef, id);

    // Obtener el producto antes de eliminarlo
    const categoriaSnapshot = await getDoc(categoriaRef);
    const categoriaData = categoriaSnapshot.data();

    // eliminar la categoria de la bd
    const confirmacion = await deleteDoc(categoriaRef);

    // Eliminar la imagen asociada
    await deleteCategoriaImagen(categoriaData.urlImage);

    return confirmacion;
  } catch (error) {
    console.log(error);
  }
};

export const editarCategoriaById = async (id, data) => {
  try {
    // Subir la imagen y obtener la URL
    data.urlImage = await uploadCategoriaImagen(data.imagen);

    const collectionRef = collection(db, "categorias");

    const { imagen, ...nuevoObjeto } = data;

    const categoriaRef = doc(collectionRef, id);
    await setDoc(categoriaRef, nuevoObjeto, { merge: true });
    console.log("Edicion correcta de la categoria :", id);
  } catch (error) {
    console.log(error);
  }
};
