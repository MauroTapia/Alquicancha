import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { ButtonClose, ButtonContainer, Image } from "./imageModal.style";

const ImageModal = ({ images, closeModal }) => {
  console.log([images])
  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.img} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonContainer>
        <ButtonClose onClick={closeModal}>
          Cerrar
        </ButtonClose>
      </ButtonContainer>
    </div>
  );
};

export default ImageModal;
