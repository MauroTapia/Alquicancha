import React, { useContext, useEffect } from "react";
import NotFound from "../NotFound";
import {
  BotonPagar,
  CheckoutWrapper,
  Datos,
  Title,
  Wrapper,
} from "./checkout.style";
import { ContextGlobal } from "../../context/context";
import Footer from "../../modules/Footer";
import { editarUsuarioById } from "../../services/users/userFirebase";
import { editarProductoById, productoById } from "../../services/product/productFirebase";
import { crearReserva } from "../../services/reservas/reservasFirebase";

const Checkout = () => {
  const { user } = useContext(ContextGlobal).contextValue;

  const { nombre, apellido, email } = user;

  const checkoutData = localStorage.getItem("Checkout");
  const checkout = JSON.parse(checkoutData);
  const { fechaInicio, fechaFinal, precio, productId, dias } = checkout;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatearFecha = (date) => {
    const fecha = new Date(date);

    // Meses en español
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    // Obtener día, mes y año de la fecha
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    // Formatear la fecha en el formato deseado
    const fechaFormateada = `${dia} de ${mes} del ${año}`;
    return fechaFormateada;
  };

  const confirmarReserva = async ()=>{
    const nuevaReserva = {
      "inicio": fechaInicio,
      "final": fechaFinal,
      'usuario': user.id,
      'producto': productId,
    }

    // Se guarda la nueva reserva en la bd
    const reservaId = await crearReserva(nuevaReserva);

    // Se añade la reserva al usuario y al producto
    const usuario = user;
    if(!usuario.reservas || !Array.isArray(usuario.reservas)){
      usuario.reservas = [];
    }
    usuario.reservas.push(reservaId);

    await editarUsuarioById(user.id, usuario);
    localStorage.setItem("user", JSON.stringify(usuario));

    // Se añade la reserva al producto
    const producto = await productoById(productId);
    
    if(!producto.reservas || typeof producto.reservas !== 'object'){
      producto.reservas = {};
    }

    producto.reservas[reservaId] = {
      "inicio": fechaInicio,
      "final": fechaFinal,
      'usuario': user.id,
      'producto': productId,
    }
    await editarProductoById(productId, producto);

  };

  if (!checkout) return <NotFound />;

  return (
    <>
      <Wrapper>
        <CheckoutWrapper>
          <Datos>
            <Title>Mis datos:</Title>
            <div>
              <p>Nombre: {nombre}</p>
              <p>Apellido: {apellido}</p>
              <p>Email: {email}</p>
              <p>
                Metodo de Pago: <strong>Credito</strong>
              </p>
              <br />
              <h4>Datos de tarjeta:</h4>
              <p>
                Tarjeta VISA - <strong>*****1234</strong>
              </p>
              <p>
                Vencimiento: <strong>12/25</strong>
              </p>
              <p>
                Cuotas: <strong>6</strong>
              </p>
            </div>
          </Datos>
          <Datos>
            <Title>Datos de reserva:</Title>
            <p>
              Inicio: <strong>{formatearFecha(fechaInicio)}</strong>
            </p>
            <p>
              Final: <strong>{formatearFecha(fechaFinal)}</strong>
            </p>
            <br />
            <hr />
            <br />
            <p>
              Precio diario: <strong>{precio}</strong>
            </p>
            <p>
              Dias de reserva: <strong>{dias}</strong>
            </p>
            <br />
            <hr />
            <br />
            <p>
              TOTAL A PAGAR: <strong>{precio * dias}</strong>
            </p>
          </Datos>
        </CheckoutWrapper>
        <BotonPagar onClick={confirmarReserva}>Confirmar reserva</BotonPagar>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Checkout;
