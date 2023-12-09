import { db, auth } from "../../firebase/credenciales";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
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

export const registrarUsuario = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.log("Error al registrar el usuario", error);
    throw error;
  }
};

export const crearUsuario = async (data) => {
  try {
    const usuario = await registrarUsuario(data.email, data.password);

    if (usuario === null) {
      console.log("Error al registrar el usuario");
      return null;
    }
    const collectionRef = collection(db, "usuarios");

    const nuevoDocumento = await addDoc(collectionRef, {
      ...data,
      userId: usuario.uid,
    });

    console.log("Usuario creado exitosamente", nuevoDocumento);
    return usuario;
  } catch (error) {
    console.log("Error al guardar usuario en BD", error);
    return null;
  }
};

export const loginUsuario = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

  } catch (error) {
    console.log(error);
  }
};

export const signOutUsuario = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const listarUsuarios = async () => {
  try {
    const collectionRef = collection(db, "usuarios");

    const usuariosData = await getDocs(collectionRef);
    const usuarios = usuariosData.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuarioById = async (id, data) => {
  try {
    const collectionRef = collection(db, "usuarios");

    const userRef = doc(collectionRef, id);
    const result = await setDoc(userRef, data, { merge: true });
    console.log('Edicion correcta de usuario :', id);
  } catch (error) {
    console.log(error);
  }
};

export const eliminarUsuarioById = async (id) => {
  try {
    const collectionRef = collection(db, "usuarios");

    const userRef = doc(collectionRef, id);
    const confirmacion = await deleteDoc(userRef);
    return confirmacion;
  } catch (error) {
    console.log(error);
  }
};

// documentacion de query https://firebase.google.com/docs/firestore/query-data/queries?hl=es-419
export const userByCampo = async (campo, busqueda) => {
  try {
    const collectionRef = collection(db, "usuarios");
    // crear query
    const queryDesc = query(collectionRef, where(campo, "==", busqueda));

    // traer datos que cumplan con la query
    const ususariosData = await getDocs(queryDesc);
    const usuarios = ususariosData.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};
