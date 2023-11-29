import React, { useContext, useEffect, useState } from "react";
import {
  DashboardSection,
  DashboardWrapper,
  MobileScreen,
  Title,
  TitleError,
} from "./dashboard.style";
import DashboardMenu from "./components/DashboardMenu";
import SectionProducts from "./components/SectionProducts";
import ListUsers from "./components/ListUsers";
import ListCategories from "./components/ListCategories";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import NewProduct from "./components/NewProduct";
import { ContextGlobal } from "../../context/context";
import varImage from "../../assets/var.jpeg";
import NewCategory from "./components/ListCategories/components/newCategory";
import ListAtributos from "./components/ListAtributos";
import NewAtributo from "./components/ListAtributos/components/newAtributo";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

  const { logoutAdmin, logout } = useContext(ContextGlobal).contextValue;

  const handleResize = () => {
    setIsMobile(window.innerWidth < 850);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleExit = () => {
    Swal.fire({
      title: "Salir?",
      text: `Desea salir del Dashboard de administración?`,
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

  const handleClick = (selectedComponent, data = null) => {
    switch (selectedComponent) {
      case "SectionProducts":
        setSelection(<SectionProducts changeSection={handleClick} />);
        break;
      case "Edit":
        setSelection(<NewProduct data={data} changeSection={handleClick} />);
        break;
      case "ListBookings":
        setSelection(<ListBookings />);
        break;
      case "ListUsers":
        setSelection(<ListUsers />);
        break;
      case "SectionCategories":
        setSelection(<ListCategories changeSection={handleClick} />);
        break;
      case "NewCategory":
        setSelection(<NewCategory data={data} changeSection={handleClick} />);
        break;
      case "SectionAtributos":
        setSelection(<ListAtributos changeSection={handleClick} />);
        break;
      case "NewAtributo":
        setSelection(<NewAtributo data={data} changeSection={handleClick} />);
        break;
      case "Exit":
        handleExit();
        break;
      default:
        setSelection(null);
        break;
    }
  };

  return (
    <DashboardWrapper>
      {isMobile ? (
        <>
          <MobileScreen>
            <p>Atención!!!</p>
            <TitleError>
              El Dashboard solo está diseñado para vista desktop
            </TitleError>
            <img src={varImage} alt="imagen Error" />
          </MobileScreen>
        </>
      ) : (
        <>
          <Title>Panel de administración</Title>
          <DashboardMenu handleClick={handleClick} />
          <DashboardSection>{selection}</DashboardSection>
        </>
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
