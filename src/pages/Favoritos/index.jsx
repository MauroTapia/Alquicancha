import React, { useEffect, useState } from "react";
import { FavoritosWrapper, Titulo } from "./favoritos.style";
import { productoById } from "../../services/product/productFirebase";
import ProductCard from "../../modules/ProductCard";

const MisFavoritos = () => {
  const [favoritos, setFavoritos] = useState(null);
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getLocal = ()=>{
      const userData =  JSON.parse(localStorage.getItem("user"));
      setFavoritos(userData.favoritos);
    }
    getLocal();
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      if (favoritos !== null) {
        const productosPromesas = favoritos.map(async (favorito) => {
          return await productoById(favorito);
        });
  
        // Esperar a que todas las promesas se resuelvan
        const productosResueltos = await Promise.all(productosPromesas);
  
        // Actualizar el estado de productos
        setProductos(productosResueltos);
      }
    };
  
    getAllProducts();
  }, [favoritos]);

  const handleClick = ()=>{
    const getLocal = ()=>{
      const userData =  JSON.parse(localStorage.getItem("user"));
      setFavoritos(userData.favoritos);
    }
    getLocal();
  }

  return (
    <>
      <Titulo>Mis Favoritos</Titulo>
      <FavoritosWrapper>
        {productos &&
          productos.map((producto, index) => (
            <ProductCard key={index} product={producto} onClick={handleClick}/>
          ))}
      </FavoritosWrapper>
    </>
  );
};

export default MisFavoritos;
