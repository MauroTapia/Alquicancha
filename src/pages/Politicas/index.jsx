import React, { useEffect } from "react";
import {
  ButtonBack,
  Politica,
  PoliticasDiv,
  PoliticasTitulo,
  PoliticasWrapper,
} from "./politicas.style";
import { Link } from "react-router-dom";

const Politicas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PoliticasWrapper>
      <ButtonBack>
        <Link to={"/"}>Volver</Link>
      </ButtonBack>

      <PoliticasTitulo>Politicas</PoliticasTitulo>
      <PoliticasDiv>
        <Politica>
          <h3>Sobre el arrendamiento</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tempora cumque qui laudantium quo at ratione repellendus earum
            cupiditate laborum labore tenetur, obcaecati accusantium ad error et
            distinctio ipsam officiis? Corporis repudiandae, sapiente explicabo,
            omnis perspiciatis obcaecati harum, sed sequi eveniet illo possimus
            amet nemo ducimus excepturi. Ut corporis dolor numquam quae, omnis
            dolorum animi ratione ipsam delectus voluptatibus totam.
          </p>
        </Politica>
        <Politica>
          <h3>Estado de los productos</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            assumenda est, distinctio at exercitationem quae minus aliquid iure
            perferendis, explicabo vero dignissimos pariatur magnam ducimus
            nihil delectus eligendi, corporis eos.
          </p>
        </Politica>
        <Politica>
          <h3>Sobre metodos de pago</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            assumenda est, distinctio at exercitationem quae minus aliquid iure
            perferendis, explicabo vero dignissimos pariatur magnam ducimus
            nihil delectus eligendi, corporis eos.Voluptate assumenda est,
            distinctio at exercitationem quae minus aliquid iure perferendis.
          </p>
        </Politica>
        <Politica>
          <h3>Uso de instalaciones</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            assumenda est, distinctio at exercitationem quae minus aliquid iure
            perferendis, explicabo vero dignissimos pariatur magnam ducimus
            nihil delectus eligendi, corporis eos.
          </p>
        </Politica>
        <Politica>
          <h3>Disponibilidad</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            assumenda est, distinctio at exercitationem quae minus aliquid iure
            perferendis, explicabo vero dignissimos pariatur magnam ducimus
            nihil delectus eligendi, corporis eos.
          </p>
        </Politica>
        <Politica>
          <h3>Cancelación de reservas</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas
            nulla autem? Cum aliquam deserunt hic commodi cupiditate.
            Reprehenderit quaerat officia ipsum culpa! Ex saepe optio neque
            officia obcaecati rerum. Quod nesciunt aliquam eligendi dolore a
            facere id quas iusto qui et quaerat atque tempora illum, doloremque
            beatae eos! Animi incidunt accusantium dolorem vitae voluptatibus
            perspiciatis pariatur mollitia iure ea.
          </p>
        </Politica>
      </PoliticasDiv>
    </PoliticasWrapper>
  );
};

export default Politicas;
