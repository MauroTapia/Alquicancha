import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CardContainer,
  ImageWrapper,
  ProductImage,
  Title,
  Price,
  ButtonDetails,
  FabHeart,
} from "./productCard.style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

import { Pagination, Navigation } from "swiper/modules";
import { ContextGlobal } from "../../context/context";

const ProductCard = ({ product }) => {
  const { imagenes, titulo, precio, id } = product;
  const { user,  } = useContext(ContextGlobal).contextValue;
  const [esFavorito, setEsFavorito] = useState(false);

  const [usuario, setUsuario] = useState(user);

  useEffect(()=>{
    console.log(user);
    if(usuario && usuario.favoritos){
      setEsFavorito(usuario.favoritos.includes(id));
    }
  },[]);

  const addToFav = () => {
    console.log("clikeado");
    if (usuario !== null) {
      setUsuario((prevObjeto) => {
        // Verificar si ya hay una lista de favoritos
        if (prevObjeto.favoritos) {
          // Verificar si el nuevo favorito ya está en la lista
          if (!prevObjeto.favoritos.includes(id)) {
            return {
              ...prevObjeto,
              favoritos: [...prevObjeto.favoritos, id],
            };
          } else {
            console.log("El favorito ya existe en la lista.");
            return prevObjeto; // No se realiza ningún cambio
          }
        } else {
          // Si aún no hay favoritos, crear la propiedad favoritos
          return {
            ...prevObjeto,
            favoritos: [id],
          };
        }
      });
      localStorage.setItem("user", JSON.stringify(usuario));
    } else {
      Swal.fire({
        title: "Login necesario!",
        text: `Debes estar logueado para añadir a favoritos!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `Iniciar sesión`,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <CardContainer>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Title>{titulo}</Title>
        <FabHeart>
          {esFavorito
          ?
          <FaHeart onClick={addToFav} style={{fill:'red'}}/>
          :
          <FaRegHeart onClick={addToFav} />
        }
        </FabHeart>
      </div>

      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {imagenes.length > 0 &&
          imagenes.map((imagen, index) => (
            <SwiperSlide key={index}>
              <ImageWrapper>
                <ProductImage src={imagen.urlImage} alt={"imagen"} />
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
