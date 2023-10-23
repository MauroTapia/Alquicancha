import React from 'react'
import { HeaderWrapper, LoginRegister, Logo, LogoTitle, LogoWrapper, TitleWrapper } from './header.style'
import logo from '../../assets/alquicancha.png'
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
        <Link to={'/register'}>
          Crear Cuenta
        </Link>
        <Link to={'/login'}>
          Iniciar sesión
        </Link>
      </LoginRegister>
    </HeaderWrapper>
  )
}

export default Header