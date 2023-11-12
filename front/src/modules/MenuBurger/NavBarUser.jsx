import React from "react";
import { NavBarWrapper } from "./navbarInit.style";
import { Link } from "react-router-dom";


function NavBarUser({open}) {
  
  return (
    <NavBarWrapper open={!open} >
      <a href="#"><Link to={"/"}>Link 1</Link></a>
      <a href="#"><Link to={"/"}>Link 2</Link></a>
    </NavBarWrapper>
  );
}

export default NavBarUser;