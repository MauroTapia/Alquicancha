import { API_URL } from '../../utils/urls';
import { storage, db } from "../../firebase/credenciales";
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
const url = API_URL;

//Cambiar por el back
export const getAllReservas = async () => {

  try {
    const response = await fetch(`${url}/reservas`);
    if(!response.ok){
      throw new Error('Error response was no ok');
    }

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    console.log('Error obteniendo reservas', error);
  }
};


export const getReservaById = async (id) => {
  try {
    const collectionRef = collection(db, "reservas");

    const documentRef = doc(collectionRef, id);

    // traer datos que cumplan con la query
    const reservaData = await getDoc(documentRef);

    if (reservaData.exists()) {
      const reserva = reservaData.data();
      return reserva;
    } else {
      console.log("El documento no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};



export const crearReserva = async (data) => {
  try {

    // Crear la reserva en Firestore
    const collectionRef = collection(db, "reservas");
    const nuevoDocumento = await addDoc(collectionRef, data);

    // Obtener el id del nuevo documento
    const nuevoDocumentoId = nuevoDocumento.id;

    // Actualizar el documento recién creado con el mismo id
    const reservaRef = doc(collectionRef, nuevoDocumentoId);
    const reserva = await setDoc(
      reservaRef,
      { id: nuevoDocumentoId },
      { merge: true }
    );

    console.log("Reserva creada exitosamente", reserva);
    return nuevoDocumentoId;
  } catch (error) {
    console.log("Error al guardar reserva en BD", error);
    return null;
  }
};