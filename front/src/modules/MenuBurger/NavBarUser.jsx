import React, { useContext } from "react";
import { NavBarWrapper } from "./navBarUser.style";
import { Link, useNavigate} from "react-router-dom";
import { ContextGlobal } from "../../context/context";

function NavBarUser({open}) {
  
  const { isAdmin, logout, logoutAdmin } = useContext(ContextGlobal).contextValue;

  const navigate = useNavigate();

  const handleExit = ()=>{
    logout();
    logoutAdmin ();
    navigate("/");
  }

  return (
    <NavBarWrapper open={!open} >
      <Link to={"/"}>Link 1</Link>
      {! isAdmin && <Link to={"/"}>Link exclusivo para el Usuario</Link>}
      {isAdmin && <Link to={"/"}>Link exclusivo para el Administrador</Link>}
      <Link open={open} onClick={handleExit}>Cerrar Sesión</Link>
    </NavBarWrapper>
  );
}

export default NavBarUser;