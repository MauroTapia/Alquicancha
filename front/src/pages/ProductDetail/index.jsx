import React from "react";
import { Detail, Header, Title, ProductDetailDiv, DetailProduct, Price, ImageBlock } from "./ProdcutDetail.style";
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
          <img src={flecha} alt="flecha" />
        </Link>
      </Header>

      <ProductDetailDiv>
        <ImageBlock>
          <img src={image} alt={alt} />
        </ImageBlock>
        <DetailProduct>
          <p>{description}</p>
          <Price>${dayPrice}</Price>
          </DetailProduct>
      </ProductDetailDiv>
    </Detail>
  );
};

export default ProductDetail;
