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

export const findProductTitle = async (title) => {
  const products = await getAllProducts();
  return products.find((producto) => producto.title === title);
};

export const editProductById = async (id, data)=>{
  const products = await getAllProducts();
  const deleteData = products.filter((product) => product.id !== id);
  const newData = [...deleteData, data];
  localStorage.setItem('products', JSON.stringify(newData));
}

export const newProduct = async (data)=>{
  const products = await getAllProducts();
  const maxId = Math.max(...products.map(item => item.id));
  data.id = maxId + 1;
  data.availability ={
    "isAbalible": true,
    "dateStart": "",
    "dateEnd": ""
  };
  data.details = {};
  data.category = parseInt(data.category) - 1 | 1;
  const newData = [...products, data];
  localStorage.setItem('products', JSON.stringify(newData));
}

export const deleteProductById = async (id)=>{
  const products = await getAllProducts();
  const newData = products.filter((product) => product.id !== id);
  localStorage.setItem('products', JSON.stringify(newData));
}