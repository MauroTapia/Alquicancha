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
import { obtenerNombreArchivoDesdeURL } from "../../utils/obtener-nombre-de-url";

export const listarProductos = async () => {
  const collectionRef = collection(db, "productos");
  try {
    const productosData = await getDocs(collectionRef);
    const productos = productosData.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    return productos;
  } catch (error) {
    console.log(error);
  }
};

export const uploadProductImage = async (file) => {
  try {
    const folderRef = ref(storage, `productosImagenes/${file.name}`);
    await uploadBytes(folderRef, file);
    const url = await getDownloadURL(folderRef);
    return url;
  } catch (error) {
    console.log(error);
    return null; // Devuelve null en caso de error
  }
};

export const deleteProductoImagen = async (url) => {
  try {
    // Obtener el nombre del archivo a partir de la URL
    const nombreArchivo = obtenerNombreArchivoDesdeURL(url);
    const storageRef = ref(storage, `productosImagenes/${nombreArchivo}`);

    // Eliminar el objeto en Storage
    await deleteObject(storageRef);

    console.log("Imagen eliminada con éxito");
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (data) => {
  try {
    if (data.imagenes.length) {
      // Subir todas las imágenes y obtener las URLs
      const urls = await Promise.all(
        data.imagenes.map(
          async (imagen) => await uploadProductImage(imagen.img)
        )
      );

      // Crear una nueva lista de imágenes con las URLs
      const nuevasImagenes = urls.map((url) => ({ urlImage: url }));

      // Crear el objeto de datos del producto con la nueva lista de imágenes
      const nuevoProducto = { ...data, imagenes: nuevasImagenes };

      const collectionRef = collection(db, "productos");
      const nuevoDocumento = await addDoc(collectionRef, nuevoProducto);

      // Obtener el id del nuevo documento
      const nuevoDocumentoId = nuevoDocumento.id;

      // Actualizar el documento recién creado con el mismo id
      const productRef = doc(collectionRef, nuevoDocumentoId);
      const producto = await setDoc(
        productRef,
        { id: nuevoDocumentoId },
        { merge: true }
      );

      console.log("Producto creado exitosamente", producto);
      return producto;
    } else {
      // Si no hay imágenes, agregar el producto sin cambios
      const collectionRef = collection(db, "productos");
      const nuevoDocumento = await addDoc(collectionRef, data);

      // Obtener el id del nuevo documento
      const nuevoDocumentoId = nuevoDocumento.id;

      // Actualizar el documento recién creado con el mismo id
      const productRef = doc(collectionRef, nuevoDocumentoId);
      const producto = await setDoc(
        productRef,
        { id: nuevoDocumentoId },
        { merge: true }
      );

      console.log("Producto creado exitosamente", producto);
      return producto;
    }
  } catch (error) {
    console.log("Error al guardar producto en BD", error);
    return null;
  }
};

export const eliminarProductoById = async (id) => {
  try {
    const collectionRef = collection(db, "productos");

    const productRef = doc(collectionRef, id);

    // Obtener el producto antes de eliminarlo
    const productSnapshot = await getDoc(productRef);
    const productData = productSnapshot.data();

    // eliminar el producto de la bd
    const confirmacion = await deleteDoc(productRef);

    // Iterar sobre la lista de imágenes y eliminar cada una
    for (const imagen of productData.imagenes) {
      await deleteProductoImagen(imagen.urlImage);
    }

    console.log("Producto y sus imágenes asociadas eliminadas con éxito");

    return confirmacion;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoById = async (id, data) => {
  try {
    if (data.imagenes.length) {
      // Subir todas las imágenes y obtener las URLs
      const urls = await Promise.all(
        data.imagenes.map(
          async (imagen) => await uploadProductImage(imagen.img)
        )
      );

      // Crear una nueva lista de imágenes con las URLs
      const nuevasImagenes = urls.map((url) => ({ urlImage: url }));

      // Crear el objeto de datos del producto con la nueva lista de imágenes

      const nuevoProducto = { ...data, imagenes: nuevasImagenes };

      const collectionRef = collection(db, "productos");

      const prodRef = doc(collectionRef, id);
      const result = await setDoc(prodRef, nuevoProducto, { merge: true });
      console.log("Edicion correcta de producto :", id);
    } else {
      const collectionRef = collection(db, "productos");

      const prodRef = doc(collectionRef, id);
      const result = await setDoc(prodRef, data, { merge: true });
      console.log("Edicion correcta de producto :", id);
    }
  } catch (error) {
    console.log(error);
  }
};

export const productoById = async (id) => {
  try {
    const collectionRef = collection(db, "productos");

    const documentRef = doc(collectionRef, id);

    // traer datos que cumplan con la query
    const productData = await getDoc(documentRef);

    if (productData.exists()) {
      const producto = productData.data();
      return producto;
    } else {
      console.log("El documento no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const allProductsBy = async (campo, busqueda) => {
  try {
    const collectionRef = collection(db, "productos");
    // crear query
    const queryDesc = query(collectionRef, where(campo, "==", busqueda));

    // traer datos que cumplan con la query
    const productosData = await getDocs(queryDesc);
    const productos = productosData.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    return productos;
  } catch (error) {
    console.log(error);
  }
};

export const changeCategory = async (id, newId) => {
  // buscar todos los productos que tengan de categoria el id
  const productosEncontrados = await allProductsBy("categoria", id);

  // cambiar su valor por el id en newId y guarda los cambios
  const newList = productosEncontrados.map(async (producto) => {
    producto.categoria = newId;
    await editarProductoById(producto.id, producto);
  });
};

export const deleteAtributo = async (id) => {
  // buscar todos los productos que tengan de categoria el id
  const productosEncontrados = await allProductsBy("atributos", id);

  // cambiar su valor por el id en newId y guarda los cambios
  const newList = productosEncontrados.map(async (producto) => {
    if ((producto.atributos = producto.atributos.filter((id) => id !== id)));
    await editarProductoById(producto.id, producto);
  });

  await Promise.all(newList);

  console.log("Atributo eliminado exitosamente de los productos.");
};

export const editarProductoByIdNoImage = async (id, data) => {
  try {
    const collectionRef = collection(db, "productos");

    const prodRef = doc(collectionRef, id);
    const result = await setDoc(prodRef, data, { merge: true });
    console.log("Edicion correcta de producto :", id);
  } catch (error) {
    console.log(error);
  }
};
