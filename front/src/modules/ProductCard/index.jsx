import React from 'react'
import { CardContainer, ProductImage } from './productCard.style'

const ProductCard = ({product} ) => {
  const {image, alt, title } = product;

  return (
    <CardContainer>
      <p>{title}</p>
      <ProductImage src={image} alt={alt} />
    </CardContainer>
  )
}

export default ProductCard