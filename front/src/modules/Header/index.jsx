import React, { useContext, useEffect, useState } from "react";
import {
  HeaderWrapper,
  Login,
  Register,
  LoginRegister,
  LoginRegisterMenu,
  LoginRegisterMenuUser,
  Logo,
  LogoTitle,
  LogoWrapper,
  TitleWrapper,
  LetterAvatar,
  LetterContainer,
} from "./header.style";

import NavBar from "../MenuBurger/navbar"
import NavBarUser from "../MenuBurger/NavBarUser";
import logo from "../../assets/alquicancha.png";
import { Link } from "react-router-dom";
import useScrollDetector from "../../hooks/useScrollDetector";
import { ContextGlobal } from "../../context/context";

const Header = () => {

  const { isAdmin, logged, user } = useContext(ContextGlobal).contextValue;

  const scrolledDown = useScrollDetector();
  const [initials, setInitials] = useState("");
  
  useEffect(()=>{
    if(user){
      const primerasLetras = Object.values(user).map(valor => valor[0]);
      const resultado = primerasLetras.join('');
      setInitials(resultado.toUpperCase());
    }
  },[user])

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
            <LetterAvatar> {initials} </LetterAvatar> 
            {isAdmin && <p>Administrador</p>}
            <LoginRegisterMenuUser  >
            <NavBarUser open={open}/>                                                  
          </LoginRegisterMenuUser>
          </LetterContainer>
        ) : (
          <>
            <LoginRegister>
              <Register>
                <Link to={"/register"}>Crear Cuenta</Link>
              </Register>
              <Login>
                <Link to={"/login"}>Iniciar sesión</Link>
              </Login>
            </LoginRegister>
            <LoginRegisterMenu >
            <NavBar open={open} />                          
          </LoginRegisterMenu>
          </>
        )}
      </div>

    </HeaderWrapper>
  );
};

export default Header;
         