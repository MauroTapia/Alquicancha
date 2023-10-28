import React from "react";
import {
  CardContainer,
  ImageWrapper,
  ProductImage,
  Title,
  Price,
} from "./productCard.style";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { image, alt, title, dayPrice, id } = product;

  return (
    <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
      <CardContainer>
        <Title>{title}</Title>
        <ImageWrapper>
          <ProductImage src={image} alt={alt} />
        </ImageWrapper>

          <Price>
            <span>Precio por dia:</span> ${dayPrice}
          </Price>

      </CardContainer>
    </Link>
  );
};

export default ProductCard;
