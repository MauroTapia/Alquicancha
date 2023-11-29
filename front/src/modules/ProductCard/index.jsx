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
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ProductCard = ({ product }) => {
  const { imagenes, titulo, precio, id } = product;

  return (
    <CardContainer>
      <Title>{titulo}</Title>

      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        >
        {imagenes && imagenes.map((imagen, index) => (
            <SwiperSlide key={index}>
              <ImageWrapper>
                <ProductImage src={imagen.urlImage} alt={imagen.titulo} />
              </ImageWrapper>
            </SwiperSlide>
          ))}
      </Swiper>

      <Price>
        <div>
          <span>Precio por dia:</span> $ {precio}
        </div>
        <ButtonDetails to={`/product/${id}`}>Ver más</ButtonDetails>
      </Price>
    </CardContainer>
  );
};
export default ProductCard;