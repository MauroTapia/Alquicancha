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

import { Navigation } from "swiper/modules";

const ProductCard = ({ product }) => {
  const { images, title, dayPrice, id } = product;
  // console.log([images, title, dayPrice])

  return (
    <CardContainer>
      <Title>{title}</Title>

<<<<<<< Updated upstream
      <Swiper navigation={true} loop modules={Navigation}>
        {images && 
          images.map((imgage, index) => (
=======
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        >
        {images && images.map((image, index) => (
>>>>>>> Stashed changes
            <SwiperSlide key={index}>
              <ImageWrapper>
                <ProductImage src={image.img} alt={image.alt} />
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
  );
};

export default ProductCard;
