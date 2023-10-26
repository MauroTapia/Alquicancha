import React from "react";
import { Detail, Header, Title, ProductDetailDiv } from "./ProdcutDetail.style";
import { useParams } from "react-router";
import { getProductById } from "../../services/product";
import flecha from "../../assets/flecha.png";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const product = getProductById(id);

  const { image, alt, title, dayPrice, description } = product;

  return (
    <Detail>
      <Header>
        <Title>{title}</Title>
        <Link to={"/"}>
          <img src={flecha} alt="flecha"></img>
        </Link>
      </Header>

      <ProductDetailDiv>
        <div>
          <img src={image} alt={alt} />
        </div>
        <div>
          <p>{description}</p>
          <p>{dayPrice}</p>
        </div>
      </ProductDetailDiv>
    </Detail>
  );
};

export default ProductDetail;
