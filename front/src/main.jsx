import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ContextProvider } from "./context/context";
import "react-responsive-modal/styles.css";


ReactDOM.createRoot(document.getElementById("root")).render(

    <ContextProvider>
      <AppRoutes />
    </ContextProvider>

);
