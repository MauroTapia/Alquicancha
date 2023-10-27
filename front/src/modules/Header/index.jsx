import React from 'react'
import { HeaderWrapper, LoginRegister, LoginRegistermMenu, Logo, LogoTitle, LogoWrapper, TitleWrapper } from './header.style'

import logo from '../../assets/alquicancha.png'
import burguerLogo from '../../assets/logoBurguer.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to={'/'}>
        <LogoWrapper>
          <Logo src={logo} alt="" />
          <TitleWrapper>
            <LogoTitle>Vos poné el equipo</LogoTitle>
            <LogoTitle>Nosotros la cancha</LogoTitle>
          </TitleWrapper>
        </LogoWrapper>
      </Link>
      <LoginRegister>
        <Login>
        <Link to={'/register'}>
          Crear Cuenta
        </Link>
        </Login>
        <Register>
        <Link to={'/login'}>
          Iniciar sesión
        </Link>
      </LoginRegister>
      <LoginRegistermMenu>
        <img src={burguerLogo} alt='logoBurguer'/>
      </LoginRegistermMenu>
    </HeaderWrapper>
  )
}

export default Header