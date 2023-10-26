import React from 'react'
import { CardContainer, ImageWrapper, ProductImage, Title, Price, TitlePrice} from './productCard.style'
import { Link } from 'react-router-dom';

const ProductCard = ({product} ) => {
  const {image, alt, title, dayPrice, id} = product;

  return (
    <Link to={`/product/${id}`}>
    <CardContainer>
      <ImageWrapper>
      <ProductImage src={image} alt={alt} />
      </ImageWrapper>
      <TitlePrice>
        <Title>{title}</Title>
        <Price><span>Precio por dia:</span> ${dayPrice}</Price>
      </TitlePrice>
    </CardContainer>
    </Link>
  )
}

export default ProductCard