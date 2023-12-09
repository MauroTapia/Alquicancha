// Función para obtener el nombre del archivo a partir de la URL
export const obtenerNombreArchivoDesdeURL = (url) => {
  const urlObj = new URL(url);
  return decodeURIComponent(urlObj.pathname.split("/").pop());
};