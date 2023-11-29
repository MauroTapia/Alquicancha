export const obtenerFechaActual = () => {
  const fechaActual = new Date();
  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const año = fechaActual.getFullYear();
  return `${año}-${mes}-${dia}`;
};