import React, { useContext } from "react";
import { NavBarWrapper } from "./navBarUser.style";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../../context/context";

function NavBarUser({open}) {
  
  const { isAdmin, user } = useContext(ContextGlobal).contextValue;

  return (
    <NavBarWrapper open={!open} >
      <a href="#"><Link to={"/"}>Link 1</Link></a>
      <a href="#"><Link to={"/"}>Link 2</Link></a>
      {user && <a href="#"><Link to={"/"}>Link exclusivo para el Usuario</Link></a>}
      {isAdmin && <a href="#"><Link to={"/"}>Link exclusivo para el Administrador</Link></a>}
    </NavBarWrapper>
  );
}

export default NavBarUser;