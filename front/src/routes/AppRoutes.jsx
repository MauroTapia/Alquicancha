import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Home from '../pages/Home/'
import NotFound from '../pages/NotFound/'
import Register from "../pages/Register/Register/"
import Login from "../pages/Login/Login/"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes