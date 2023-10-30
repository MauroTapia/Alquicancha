import React, { useContext, useEffect, useState } from "react";
import { DashboardSection, DashboardWrapper, Title } from "./dashboard.style";
import DashboardMenu from "./components/DashboardMenu";
import SectionProducts from "./components/SectionProducts";
import ListUsers from "./components/ListUsers";
import ListCategories from "./components/ListCategories";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import NewProduct from "./components/NewProduct";
import { ContextGlobal } from "../../context/context";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null);

  const  {logoutAdmin, logout}  = useContext(ContextGlobal).contextValue;

  useEffect(() => {
    window.scrollTo(0, 0);
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
        setSelection(<ListCategories />);
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
      <Title>Panel de administración</Title>
      <DashboardMenu handleClick={handleClick} />
      <DashboardSection>{selection}</DashboardSection>
    </DashboardWrapper>
  );
};

export default Dashboard;
