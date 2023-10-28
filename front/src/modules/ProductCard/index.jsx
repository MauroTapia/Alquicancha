import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CardContainer,
  ImageWrapper,
  ProductImage,
  Title,
  Price,
  ButtonDetails,
} from "./productCard.style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";

const ProductCard = ({ product }) => {
  const { images, title, dayPrice, id } = product;

  return (
    // <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
    <CardContainer>
      <Title>{title}</Title>

      <Swiper navigation={true} loop modules={Navigation}>
        {images &&
          images.map((imgage, index) => (
            <SwiperSlide key={index}>
              <ImageWrapper>
                <ProductImage src={imgage.img} alt={images.alt} />
              </ImageWrapper>
            </SwiperSlide>
          ))}
      </Swiper>

      <Price>
        <div>
          <span>Precio por dia:</span> $ {dayPrice}
        </div>
        <ButtonDetails to={`/product/${id}`}>Ver más</ButtonDetails>
      </Price>
    </CardContainer>
    // </Link>
  );
};

export default ProductCard;
