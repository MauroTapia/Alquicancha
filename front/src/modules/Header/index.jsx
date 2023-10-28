import React from "react";
import {
  HeaderWrapper,
  Login,
  Register,
  LoginRegister,
  LoginRegisterMenu,
  Logo,
  LogoTitle,
  LogoWrapper,
  TitleWrapper,
} from "./header.style";

import logo from "../../assets/alquicancha.png";
import burguerLogo from "../../assets/logoBurguer.png";
import { Link } from "react-router-dom";
import useScrollDetector from "../../hooks/useScrollDetector";

const Header = () => {

  const scrolledDown = useScrollDetector();

  return (
    <HeaderWrapper style={{backgroundColor: scrolledDown ? 'rgb(155, 191, 13)' : ''}}>
      <Link to={"/"}>
        <LogoWrapper>
          <Logo src={logo} alt="" />
          <TitleWrapper>
            <LogoTitle>Vos poné el equipo</LogoTitle>
            <LogoTitle>Nosotros la cancha</LogoTitle>
          </TitleWrapper>
        </LogoWrapper>
      </Link>
      <LoginRegister>
        <Register>
          <Link to={"/register"}>Crear Cuenta</Link>
        </Register>
        <Login>
          <Link to={"/login"}>Iniciar sesión</Link>
        </Login>
      </LoginRegister>
      <LoginRegisterMenu>
        <img src={burguerLogo} alt="logoBurguer" />
      </LoginRegisterMenu>
    </HeaderWrapper>
  );
};

export default Header;
