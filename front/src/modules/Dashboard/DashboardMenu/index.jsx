import React from 'react'
import { MenuButton, Wrapper } from './dashboardMenu.style'

const DashboardMenu = () => {
  return (
    <Wrapper>
      <MenuButton>Agregar Producto</MenuButton>
      <MenuButton>Listar Productos</MenuButton>
      <MenuButton>Listar Usuarios</MenuButton>
      <MenuButton>Categorías</MenuButton>
      <MenuButton>Salir</MenuButton>
    </Wrapper>
  )
}

export default DashboardMenu