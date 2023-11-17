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
      <Link to={"/"}>Home</Link>
      
      {isAdmin && (
      <Link to={"/administracion"}>Dashboard</Link>
    )}

      <Link to={"/userPerfil"}>Editar perfil</Link>
      <Link open={open} onClick={handleExit}>Cerrar Sesión</Link>
    </NavBarWrapper>
  );
}

export default NavBarUser;