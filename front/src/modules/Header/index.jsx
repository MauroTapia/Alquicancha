import React, { useContext, useEffect, useState } from "react";
import {
  HeaderWrapper,
  Login,
  Register,
  LoginRegister,
  LoginRegisterMenu,
  LoginRegisterMenuInit,
  Logo,
  LogoTitle,
  LogoWrapper,
  TitleWrapper,
  LetterAvatar,
  LetterContainer,
  ButtonLoggout,
} from "./header.style";

import MenuButton from "../MenuBurger/menuBurger"
import NavBar from "../MenuBurger/navbar"
import NavBarUser from "../MenuBurger/NavBarUser";
import logo from "../../assets/alquicancha.png";
import { Link, useNavigate } from "react-router-dom";
import useScrollDetector from "../../hooks/useScrollDetector";
import { ContextGlobal } from "../../context/context";

const Header = () => {

  const { isAdmin, logged, user, logout } = useContext(ContextGlobal).contextValue;
  
  const navigate = useNavigate();

  const scrolledDown = useScrollDetector();
  const [initials, setInitials] = useState("");
  
  useEffect(()=>{
    if(user){
      const primerasLetras = Object.values(user).map(valor => valor[0]);
      const resultado = primerasLetras.join('');
      setInitials(resultado.toUpperCase());
    }
  },[user])

  const handleLogoClick = ()=>{
    setOpen(!open);
    console.log('Aqui debe mostrarse menu para cerrar sesión o ir a conf');
  }

  const handleExit = ()=>{
    logout();
    navigate("/");
  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <HeaderWrapper
      style={{ backgroundColor: scrolledDown ? "rgb(155, 191, 13)" : "" }}
    >
      <Link to={"/"}>
        <LogoWrapper>
          <Logo src={logo} alt="" />
          <TitleWrapper>
            <LogoTitle>Vos poné el equipo</LogoTitle>
            <LogoTitle>Nosotros la cancha</LogoTitle>
          </TitleWrapper>
        </LogoWrapper>
      </Link>

      <div>
        {logged ? (
          <LetterContainer onClick={handleClick}>
            <LetterAvatar>{initials}</LetterAvatar>
            {isAdmin && <p>Administrador</p>}
            <ButtonLoggout onClick={handleExit}>Salir</ButtonLoggout>
            <LoginRegisterMenuInit  >
            <NavBarUser open={open}/>                                                  
          </LoginRegisterMenuInit>
          </LetterContainer>
        ) : (
          <>
            <LoginRegister logged = {!open}>
              <Register>
                <Link to={"/register"}>Crear Cuenta</Link>
              </Register>
              <Login>
                <Link to={"/login"}>Iniciar sesión</Link>
              </Login>
            </LoginRegister>
            <LoginRegisterMenu >
            <NavBar open={open} />
            <MenuButton open={open} handleClick={handleClick} />                            
          </LoginRegisterMenu>
          </>
        )}
      </div>

    </HeaderWrapper>
  );
};

export default Header;
         