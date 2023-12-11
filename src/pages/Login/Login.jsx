import { useContext, useEffect, useState } from "react";
import {
  Label,
  LoginWrapper,
  Inputs,
  Remember,
  ImagenPerfil,
  Button,
  Button1,
  InputCheckBox,
  ErrorMsg,
  ButtonsContainer,
} from "./login.style";
import maleUser from "../../assets/MaleUser.png"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextGlobal } from "../../context/context";
import Footer from "../../modules/Footer/index";
import { loginUsuario, userByCampo } from "../../services/users/userFirebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState([]);

  const { loginAdmin, login, setUserData, user } =
    useContext(ContextGlobal).contextValue;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkUser = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => [...prevErrors, ["user"]]);
    }
  };

  const checkPass = () => {
    if (password.length < 6) {
      setErrors((prevErrors) => [...prevErrors, ["password"]]);
    } else {
    }
  };

  const existPassword = errors.some(([campo]) => campo === "password");
  const existUser = errors.some(([campo]) => campo === "user");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors([]);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
    setErrors([]);
  };

  const CheckUserExist = async (email, pass) => {
    const loggedUser = await loginUsuario(email, pass);
    if(loggedUser !==null){
      const userLogged = await userByCampo("userId", loggedUser.user.uid);
      const usuario = userLogged[0];
      const admin = usuario.admin;
      if (usuario) {
        setUserData(usuario);
        login();
        Swal.fire({
          title: "Ingreso correcto!",
          text: `Hola, ${usuario.nombre} bienvenido!`,
          icon: "success",
          confirmButtonText: `Ir a ${admin ? "Dashboard" : "Home"} `,
        }).then((result) => {
          if (result.isConfirmed) {
            if (admin) {
              loginAdmin();
              navigate("/administracion");
            } else {
              navigate("/");
            }
          }
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: `Usuario o contraseña incorrectos`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }else{
      Swal.fire({
        title: "Error!",
        text: `Usuario o contraseña incorrectos`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    checkUser();
    checkPass();

    setErrors((prevErrors) => {
      if (prevErrors.length === 0) {
        CheckUserExist(email, password);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Verifica los datos ingresados",
          icon: "error",
          confirmButtonText: "Volver",
        });
      }
      return prevErrors;
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LoginWrapper>
          <ImagenPerfil>
            <img src={maleUser} alt="user" />
          </ImagenPerfil>

          <Label>Email</Label>
          <Inputs
            type="email"
            required
            placeholder="Ingresa tú correo electrónico"
            onChange={handleEmailChange}
          />
          {existUser === true ? (
            <ErrorMsg>Debes ingresar un correo valido</ErrorMsg>
          ) : null}

          <Label>Password</Label>
          <Inputs
            type="password"
            required
            placeholder="Ingresa tú contraseña"
            autoComplete="on"
            onChange={handlePassChange}
          />
          {existPassword === true ? (
            <ErrorMsg>Contraseña incorrecta o menos de 6 caractéres</ErrorMsg>
          ) : null}

          <Remember>
            <div>
              <InputCheckBox type="checkbox" />
              <span>Recordarme </span>
            </div>
          </Remember>

          <Button type="submit">Login</Button>

          <ButtonsContainer>
            <Link to={"/register"}>
              <Button1>Crear una nueva cuenta</Button1>
            </Link>
            <Link to={"/"}>
              <Button1>Olvide mi contraseña</Button1>
            </Link>
          </ButtonsContainer>
        </LoginWrapper>
      </form>
      <Footer />
    </>
  );
};

export default Login;
