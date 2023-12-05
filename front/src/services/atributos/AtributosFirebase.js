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
import { deleteAtributo } from "../product/productFirebase";
import { obtenerNombreArchivoDesdeURL } from "../../utils/obtener-nombre-de-url";

export const listarAtributos = async () => {
  const collectionRef = collection(db, "atributos");
  try {
    const atributosData = await getDocs(collectionRef);
    const atributos = atributosData.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    return atributos;
  } catch (error) {
    console.log(error);
  }
};

export const uploadAtributoImagen = async (file) => {
  try {
    const folderRef = ref(storage, `atributosImagenes/${file.name}`);
    await uploadBytes(folderRef, file);
    const url = await getDownloadURL(folderRef);
    return url;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAtributoImagen = async (url) => {
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

export const crearAtributo = async (data) => {
  try {
    // Subir la imagen y obtener la URL
    data.urlImage = await uploadAtributoImagen(data.imagen);

    // quito la propiedad imagen del objeto
    const { imagen, ...nuevoObjeto } = data;

    // Crear la categoría en Firestore
    const collectionRef = collection(db, "atributos");
    const nuevoDocumento = await addDoc(collectionRef, nuevoObjeto);

    // Obtener el id del nuevo documento
    const nuevoDocumentoId = nuevoDocumento.id;

    // Actualizar el documento recién creado con el mismo id
    const atributoRef = doc(collectionRef, nuevoDocumentoId);
    const atributo = await setDoc(
      atributoRef,
      { id: nuevoDocumentoId },
      { merge: true }
    );

    console.log("Atributo creado exitosamente", atributo);
    return atributo;
  } catch (error) {
    console.log("Error al guardar el atributo en BD", error);
    return null;
  }
};

export const eliminarAtributoById = async (id) => {
  try {
    // Todos los productos con esta caracteristica se elimina de su listado
    await deleteAtributo(id);

    const collectionRef = collection(db, "atributos");

    const AtributoRef = doc(collectionRef, id);

    // Obtener el producto antes de eliminarlo
    const atributoSnapshot = await getDoc(AtributoRef);
    const atributoData = atributoSnapshot.data();

    // eliminar el producto de la bd
    const confirmacion = await deleteDoc(AtributoRef);

    // Eliminar la imagen asociada
    await deleteAtributoImagen(atributoData.urlImage);

    return confirmacion;
  } catch (error) {
    console.log(error);
  }
};

export const editarAtributoById = async (id, data) => {
  try {
    // Subir la imagen y obtener la URL
    data.urlImage = await uploadAtributoImagen(data.imagen);

    const collectionRef = collection(db, "atributos");

    const { imagen, ...nuevoObjeto } = data;

    const atributoRef = doc(collectionRef, id);
    await setDoc(atributoRef, nuevoObjeto, { merge: true });
    console.log("Edicion correcta del atributo :", id);
  } catch (error) {
    console.log(error);
  }
};

export const getAtributoById = async (id)=>{
  try {
    const collectionRef = collection(db, "atributos");

    const documentRef = doc(collectionRef, id);

    // traer datos que cumplan con la query
    const atributoData = await getDoc(documentRef);

    if (atributoData.exists()) {
      const atributo = atributoData.data();
      return atributo;
    } else {
      console.log("El documento no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}