import React from "react";
import { FooterWrapper, SocialMedia, TeamDiv, Politicas } from "./footer.style";
import logoTeam from "../../assets/logoTeam.svg";
import x from "../../assets/square-x-twitter.svg";
import whatsapp from "../../assets/square-whatsapp.svg";
import instagram from "../../assets/square-instagram.svg";
import facebook from "../../assets/square-facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <TeamDiv>
        <img src={logoTeam} alt="logo equipo uno" />
        <p>Copyright ©2023 All rights reserved</p>
      </TeamDiv>

      <>
        <Link to={"/politicas"} style={{textDecoration:'none', color:'white', fontWeight:200}}>
          <Politicas>Politicas de reservas</Politicas>
        </Link>

        <SocialMedia>
          <a
            href="https://api.whatsapp.com/send?phone=541165492709&text=Hola,%20me%20gustaría%20contactar%20contigo"
            target="_blank"
          >
            <img src={whatsapp} alt="whatsapp logo" />
          </a>
          <a href="https://www.instagram.com/_digitalhouse/">
            <img src={instagram} alt="instagram logo" />
          </a>
          <a href="https://www.facebook.com/digitalhouseschool">
            <img src={facebook} alt="facebook logo" />
          </a>
          <a href="https://twitter.com/_digitalhouse?lang=es">
            <img src={x} alt="x logo" />
          </a>
        </SocialMedia>
      </>
    </FooterWrapper>
  );
};

export default Footer;
