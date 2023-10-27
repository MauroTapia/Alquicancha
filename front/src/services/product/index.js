import products from '../../mocks/canchas.json'

//Cambiar por el back
export const getAllProducts = ()=>{
  return products;
};
//Cambiar por el back

export const getProductById =(id) =>{
  return products.find(producto => producto.id === parseInt(id));
}