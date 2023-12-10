import React, { useEffect, useState } from "react";
import { ImageContainer, Imagen, Item, ReservaCard, Titulo, Wrapper } from "./CardReserva.style";
import { productoById } from "../../../services/product/productFirebase";
import { BsCalendar2Date } from "react-icons/bs";

const CardReserva = (props) => {
  const { reserva } = props;

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProduct = async () => {
      const prod = await productoById(reserva.producto);
      setProducto(prod);
    };

    getProduct();
    console.log(producto);
  }, []);

  const formatearFecha = (fechaParam) => {
    const fecha = new Date(fechaParam);

    const opcionesDeFormato = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const fechaFormateada = fecha.toLocaleDateString(
      "es-ES",
      opcionesDeFormato
    );

    return fechaFormateada;
  };

  return (
    <ReservaCard>
      {producto ? (
        <Wrapper>
          <div>
            <Titulo>{producto?.titulo}</Titulo>
            <h4 style={{ display: "flex", gap: 10, marginLeft: 15 }}>
              <BsCalendar2Date />
              Fecha:
            </h4>
            <Item>Inicio: {formatearFecha(reserva.inicio)}</Item>
            <Item>Final: {formatearFecha(reserva.final)}</Item>
          </div>
          <ImageContainer style={{height:'100%', width:200}}>
            {producto.imagenes[0]?.urlImage !== undefined ? (
              <Imagen
                src={producto.imagenes[0].urlImage}
                alt="Imagen del producto"
              />
            ) : (
              <Imagen src={'https://firebasestorage.googleapis.com/v0/b/alquicancha-d6d01.appspot.com/o/nope-not-here.webp?alt=media&token=f7e621a1-483a-441b-be61-a66234443eff'} alt="no image"/>
            )}
          </ImageContainer>
        </Wrapper>
      ) : (
        <></>
      )}
    </ReservaCard>
  );
};

export default CardReserva;
