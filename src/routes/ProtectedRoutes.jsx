import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ContextGlobal } from "../context/context";

const ProtectedRoutes = () => {
  const { isAdmin } = useContext(ContextGlobal).contextValue;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
