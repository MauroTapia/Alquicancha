import React, { useContext } from "react";
import { NavBarWrapper } from "./navBarUser.style";
import { Link, useNavigate} from "react-router-dom";
import { ContextGlobal } from "../../context/context";
import Swal from "sweetalert2";

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
        logoutAdmin();
        logout();
        navigate("/");
      }
    });
  };

  return (
    <NavBarWrapper open={open} >
      <Link to={"/"}>Home</Link>
      
      { isAdmin ?  
        <Link to={"/administracion"}>Dashboard</Link>
        :
        <Link to={"/"}>Link exclusivo para el Usuario</Link>
      }
      <Link open={open} onClick={handleExit}>Cerrar Sesión</Link>
    </NavBarWrapper>
  );
}

export default NavBarUser;