import { useContext } from "react";
import { allProductsBy } from "../../../services/product/productFirebase";
import { CardWrapper } from "./card.style";
import { ContextGlobal } from "../../../context/context";

const Card = ({ categoria }) => {
  const { setProductData } = useContext(ContextGlobal).contextValue;

  const { titulo, urlImage, id } = categoria;


  const handleClick = async ()=>{
    const productos = await allProductsBy('categoria', id);
    setProductData(productos);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <div className="imgContainer">
        <img src={urlImage} alt={titulo} /> 
      </div>
      <p>{titulo}</p>
    </CardWrapper>
  );
};

export default Card;
