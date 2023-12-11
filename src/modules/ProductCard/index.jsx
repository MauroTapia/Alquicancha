import React, { useContext, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CardContainer,
  ImageWrapper,
  ProductImage,
  Title,
  Price,
  ButtonDetails,
  FabHeart,
  Share,
} from "./productCard.style";

import {
  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,
  TwitterIcon,
} from "react-share";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton
} from "react-share";

import ReactDOM from "react-dom";
import { Modal } from "react-responsive-modal";
import x from "../../assets/square-x-twitter.svg";
import whatsapp from "../../assets/square-whatsapp.svg";
import instagram from "../../assets/square-instagram.svg";
import facebook from "../../assets/square-facebook.svg";  
import { SocialMedia } from "../Footer/footer.style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import { Pagination, Navigation } from "swiper/modules";
import { ContextGlobal } from "../../context/context";


const ProductCard = ({ product }) => {
  const { imagenes, titulo, precio, id } = product;
  const { user,  } = useContext(ContextGlobal).contextValue;

  const navigate = useNavigate();

  const [esFavorito, setEsFavorito] = useState(false);

  const [usuario, setUsuario] = useState(user);

  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if(usuario && usuario.favoritos){
      setEsFavorito(usuario.favoritos.includes(id));
    }
  },[]);
   

  const addToFav = () => {
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

  const urlProducto = `https://alquicancha-d6d01.web.app/product/${id}`;

  const texto = `¡Echa un vistazo a este increíble producto, ${titulo}!`;

  const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=&text=${texto} ${urlProducto}`;
  
  const enlaceInstagram = `https://www.instagram.com/direct/inbox/?followUp=${encodeURIComponent(urlProducto)}&text=${encodeURIComponent(texto)}`;


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
        <div style={{ display: "flex", gap: 20 }}>
          <Share onClick={onOpenModal}>
            <IoShareSocialSharp />
          </Share>
          <FabHeart>
            {esFavorito ? (
              <FaHeart onClick={addToFav} style={{ fill: "red" }} />
            ) : (
              <FaRegHeart onClick={addToFav} />
            )}
          </FabHeart>
        </div>
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

      <Modal
        ref={modalRef}
        open={open}
        onClose={onCloseModal}
        focusTrapped={true}
        initialFocusRef={modalRef}
        center
      >
        <h3 style={{ marginTop: 20 }}>
          Comparte esta publicación en tu red Favorita
        </h3>
        <SocialMedia>
          <a href= {enlaceWhatsApp} target="_blank">
            <img src={whatsapp} alt="whatsapp logo" />
          </a>

          <a href= {enlaceInstagram} target="_blank">
            <img src={instagram} alt="instagram logo" />
          </a>
          
          <FacebookShareButton url={urlProducto} quote={texto}>
            <img src={facebook} alt="facebook logo" />
          </FacebookShareButton>

          <TwitterShareButton url= {urlProducto} title= {texto}>
            <img src={x} alt="X logo" />
          </TwitterShareButton>

        </SocialMedia>
      </Modal>
    </CardContainer>
  );
};
export default ProductCard;
