import React from 'react'
import { MenuButton, Wrapper } from './dashboardMenu.style'

const DashboardMenu = (props) => {

  const {handleClick} = props;

  return (
    <Wrapper>
      <MenuButton onClick={()=> handleClick('SectionProducts')}>Listar Productos</MenuButton>
      <MenuButton onClick={()=> handleClick('ListUsers')}>Listar Usuarios</MenuButton>
      <MenuButton onClick={()=> handleClick('SectionCategories')}>Categorías</MenuButton>
      <MenuButton onClick={()=> handleClick('Exit')}>Salir</MenuButton>
    </Wrapper>
  )
}

export default DashboardMenu