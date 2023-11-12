import React from "react";
import burguerLogo from "../../assets/logoBurguer.png";
import { MenuButtonWrapper, ButtonClose } from "./menuBurger.style"


function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <img src={burguerLogo} alt="logoBurguer" width="30" height="30"/>     
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <ButtonClose> 
      <img src={burguerLogo} alt="logoBurguer" width="30" height="30"/> 
      </ButtonClose>
    </MenuButtonWrapper>
  );
}

export default MenuButton;