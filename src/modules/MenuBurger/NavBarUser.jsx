import React, { useContext } from "react";
import { NavBarWrapper } from "./navBarUser.style";
import { Link, useNavigate} from "react-router-dom";
import { ContextGlobal } from "../../context/context";
import Swal from "sweetalert2";
import { signOutUsuario } from "../../services/users/userFirebase";

function NavBarUser({open}) {
  
  const { isAdmin, logout, logoutAdmin } = useContext(ContextGlobal).contextValue;

  const navigate = useNavigate();

  const handleExit = () => {
    Swal.fire({
      title: "Salir?",
      text: `Deseas cerrar sesión?`,
      icon: "question",
      confirmButtonText: `Salir`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUsuario();
        logout();
        logoutAdmin();
        navigate("/");
      }
    });
  };

  return (
    <NavBarWrapper open={open} >
      <Link to={"/"}>Home</Link>
      
      {isAdmin && (
      <Link to={"/administracion"}>Dashboard</Link>
    )}

      <Link to={"/userPerfil"}>Editar perfil</Link>
      <Link to={"/favoritos"}>Mis favoritos</Link>
      <Link to={"/reservas"}>Historial de reservas</Link>
      <Link open={open} onClick={handleExit}>Cerrar Sesión</Link>
    </NavBarWrapper>
  );
}

export default NavBarUser;