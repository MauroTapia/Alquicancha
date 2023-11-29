import React from "react";
import { MenuButton, Wrapper } from "./dashboardMenu.style";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { BsCardChecklist } from "react-icons/bs";

const DashboardMenu = (props) => {
  const { handleClick } = props;

  return (
    <Wrapper>
      <MenuButton onClick={() => handleClick("SectionProducts")}>
        <BsFillBoxSeamFill />
        Productos
      </MenuButton>
      <MenuButton onClick={() => handleClick("ListUsers")}>
        <FaUserGroup />
        Usuarios
      </MenuButton>
      <MenuButton onClick={() => handleClick("SectionCategories")}>
        <FaListAlt />
        Categorías
      </MenuButton>
      <MenuButton onClick={() => handleClick("SectionAtributos")}>
        <BsCardChecklist />
        Atributos
      </MenuButton>
      <MenuButton onClick={() => handleClick("Exit")}>
        <ImExit />
        Salir
      </MenuButton>
    </Wrapper>
  );
};

export default DashboardMenu;
