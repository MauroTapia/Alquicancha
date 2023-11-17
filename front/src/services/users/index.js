import { API_URL } from '../../utils/urls';
const url = API_URL;

//Cambiar por el back
export const getAllUsers = async () => {

  try {
    const response = await fetch(`${url}/usuarios`);
    if(!response.ok){
      throw new Error('Error response was no ok');
    }

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    console.log('Error obteniendo usuarios', error);
  }
};

export const getUserById = async (id) => {

  try {
    const response = await fetch(`${url}/usuarios/${id}`);
    if(!response.ok){
      throw new Error('Error response was no ok');
    }

    const jsonData = await response.json();

    return jsonData;

  } catch (error) {
    console.log('Error obteniendo usuario', error);
  }
};

export const getUserByName = async (name) => {
  const users = await getAllUsers();
  return users.find((user) => user.data.name === name);
};

export const getUserByEmail = async (email) => {
  try {
    const response = await fetch(`${url}/usuarios/email/${email}`);
    if(!response.ok){
      throw new Error('Error response was no ok');
    }

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    console.log('Error obteniendo mail de usuario', error);
  }
};

export const loginUser = async (email, pass) => {
  try {
    const response = await fetch(`${url}/usuarios/login/${email}:${pass}`);
    if(!response.ok){
      throw new Error('Error response was no ok');
    }

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    console.log('Error obteniendo mail de usuario', error);
  }
};

export const newUser = async (data) => {
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data), 
  }; 

  fetch(`${url}/usuarios/registrar`, opciones)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log('Usuario creado exitosamente:', data);
  })
  .catch(error => {
    console.error('Error al crear el usuario:', error);
  });
};

export const editUser = async (data, id) => {
  const opciones = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data), 
  }; 

  fetch(`${url}/usuarios/actualizar/${id}`, opciones)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log('Usuario editado exitosamente:', data);
  })
  .catch(error => {
    console.error('Error al editar el usuario:', error);
  });
};