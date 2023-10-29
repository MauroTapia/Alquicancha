import React, { useEffect, useState } from "react";
import { DashboardSection, DashboardWrapper, Title } from "./dashboard.style";
import DashboardMenu from "./components/DashboardMenu";
import SectionProducts from "./components/SectionProducts";
import NewProduct from "./components/NewProduct";
import ListUsers from "./components/ListUsers";
import ListCategories from "./components/ListCategories";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";

const Dashboard = () => {

  const navigate = useNavigate();
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExit = ()=>{
    Swal.fire({
      title: 'Salir?',
      text: `Desea salir del Dashboard de administración?`,
      icon: 'question',
      confirmButtonText: `Salir`,
      showCancelButton: true,
      reverseButtons: true
    }).then((result) =>{
      if (result.isConfirmed){
        navigate('/');
      }
    })
  }

  const handleClick = (selectedComponent) => {
    switch (selectedComponent) {
      case "SectionProducts":
        setSelection(<SectionProducts />);
        break;
      case "NewProduct":
        setSelection(<NewProduct />);
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
