import React, { useEffect, useState } from "react";
import {
  Detail,
  Header,
  Title,
  CardDetail,
  Images,
  ImagePrincipal,
  ImagesSecondaries,
  Body,
  ProductDetails,
  TextDetails,
  Caracteristicas,
  ButtonReserva,
  Included,
} from "./ProdcutDetail.style";
import { useParams } from "react-router";
import { getProductById } from "../../services/product";
import flecha from "../../assets/flecha.png";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const product = getProductById(id);

  const { images, title, dayPrice, description, details } = product;

  const [imagePrincipal, setImagePrincipal] = useState(images[0].img);
  const [selected, setSelected] = useState(0);

  const handleSecondaryImageClick = (index) => {
    setImagePrincipal(images[index].img);
    setSelected(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Detail>
      <CardDetail>
        <Header>
          <Title>{title}</Title>
          <Link to={"/"}>
            <img src={flecha} alt="flecha" />
            Volver
          </Link>
        </Header>
        <Body>
          <Images>
            <ImagesSecondaries>
              {images.map((image, index) => (
                <img
                  src={image.img}
                  alt={image.alt}
                  key={index}
                  onClick={() => handleSecondaryImageClick(index)}
                  className={selected === index ? "selected" : ""}
                />
              ))}
            </ImagesSecondaries>

            <ImagePrincipal>
              <img src={imagePrincipal} alt={images[0].alt} />
            </ImagePrincipal>
          </Images>

          <ProductDetails>
            <TextDetails>{description}</TextDetails>
            {details.length ? (
              <Caracteristicas>
                <p>Que incluye:</p>
                <ul>
                  <Included>
                    {details.map((detail, index) => (
                      <li key={index}>{detail.name}</li>
                    ))}
                  </Included>
                </ul>
              </Caracteristicas>
            ) : null}
            <ButtonReserva>Reservar</ButtonReserva>
          </ProductDetails>
        </Body>
      </CardDetail>
    </Detail>
  );
};

export default ProductDetail;
