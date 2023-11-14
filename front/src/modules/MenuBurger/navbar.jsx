import React, { useState } from "react";
import { NavBarWrapper } from "./navBar.style";
import { Link } from "react-router-dom";


function NavBar({ open }) {
  const [logged, setLogged] = useState (false);
  return (
    <NavBarWrapper open={open}>
      <Link to={"/login"}>Iniciar sesión</Link>
      <Link to={"/register"}>Crear Cuenta</Link>
    </NavBarWrapper>
  );
}

export default NavBar;

