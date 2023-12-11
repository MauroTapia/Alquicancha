import ProductCard from "../ProductCard";
import { RecommendedWrapper, TitleSeccion } from "./recommended.style";
import { getRandomElements } from "../../utils/get-random-elements";
import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../../context/context";

const Recommended = () => {
  const { productos, allProducts } = useContext(ContextGlobal).contextValue;

  const [productsToShow, setProductsToShow] = useState(productos);

  useEffect(() => {
    window.scrollTo(0, 0);

    // setProductsToShow(getRandomElements(productos, 10));
    setProductsToShow(productos);
  }, [productos]);


  return (
    <>
      {productos && Object.keys(productos).length > 0 ? (
        <>
          <TitleSeccion>Productos recomendados</TitleSeccion>
          <RecommendedWrapper>
            {productos.length &&
              productos.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </RecommendedWrapper>
        </>
      ) : (
        <>
          <TitleSeccion>No hay coincidencias para la busqueda</TitleSeccion>
        </>
      )}
    </>
  );
};

export default Recommended;
