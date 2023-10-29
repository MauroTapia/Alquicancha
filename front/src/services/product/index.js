//Cambiar por el back
export const getAllProducts = async () => {
  const data = localStorage.getItem("products");
  const products = data ? JSON.parse(data) : null;
  return products;
};
//Cambiar por el back

export const getProductById = async (id) => {
  const products = await getAllProducts();
  return products.find((producto) => producto.id === parseInt(id));
};
