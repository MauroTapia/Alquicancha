import React, { useContext, useEffect, useState } from "react";
import { ReservasWrapper } from "./reservas.style";
import { ContextGlobal } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { getReservaById } from "../../services/reservas/reservasFirebase";
import CardReserva from "./components/CardReserva";

const MisReservas = () => {
  const navigate = useNavigate();
  const { user, logged } = useContext(ContextGlobal).contextValue;

  const [reservas, setReservas] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!logged) {
      navigate("/");
    }
  }, [logged, navigate]);

  useEffect(() => {
    const getReservas = async () => {
      if (user.reservas) {
        const allReservas = await Promise.all(
          user.reservas.map(
            async (reserva) => reserva &&  getReservaById(reserva)
          )
        );
        setReservas(allReservas);
      }
    };

    getReservas();
  }, [user.reservas]);

  return <ReservasWrapper>
    {reservas !== null && (
      reservas.map((reserva, index)=>(
        <CardReserva reserva={reserva} key={index}/>
      ))
    )}
  </ReservasWrapper>;
};

export default MisReservas;
