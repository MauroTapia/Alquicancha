import { useEffect, useState } from "react";
import {
  Label,
  LoginWrapper,
  Inputs,
  Remember,
  ImagenPerfil,
  Button,
  InputCheckBox,
  ErrorMsg,
} from "./register.style";
import { newUser, getUserByEmail } from "../../services/users";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: null,
    surname: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const existName = errors.some(([campo]) => campo === "name");
  const existSurname = errors.some(([campo]) => campo === "surname");
  const existEmail = errors.some(([campo]) => campo === "email");
  const existPassword = errors.some(([campo]) => campo === "password");
  const existConfirm = errors.some(([campo]) => campo === "confirm");

  const CheckUserExist = async (email) => {
    const userData = await getUserByEmail(email);
    if (userData) {
      console.log("entre al malnacido error");
      setErrors((prevErrors) => [...prevErrors, ["exist"]]);
    }
  };

  const checkName = () => {
    if (userData.name.length < 4) {
      setErrors((prevErrors) => [...prevErrors, ["name"]]);
    }
  };

  const checkSurname = () => {
    if (userData.surname.length < 4) {
      setErrors((prevErrors) => [...prevErrors, ["surname"]]);
    }
  };

  const checkEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userData.email)) {
      setErrors((prevErrors) => [...prevErrors, ["email"]]);
    }
  };

  const checkPass = () => {
    if (userData.password.length < 6) {
      setErrors((prevErrors) => [...prevErrors, ["password"]]);
    } else if (userData.password !== userData.confirmPassword) {
      setErrors((prevErrors) => [...prevErrors, ["confirm"]]);
    }
  };

  const handleChange = (e, field) =>{
    setUserData((prevUserData) => ({ ...prevUserData, [field]: e.target.value }));
    setErrors([]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    await CheckUserExist(userData.email);
    checkEmail();
    checkPass();
    checkName();
    checkSurname();

    setErrors((prevErrors) => {
      if (prevErrors.length === 0) {
        const user = { ...userData}
        newUser(user);
        Swal.fire({
          title: "Usuario creado!",
          text: `El usuario a sido creado correctamente!`,
          icon: "success",
          confirmButtonText: `Iniciar sesión`,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
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
            <img src="/src/assets/Male User.png" alt="user" />
          </ImagenPerfil>

          <Label>Nombre</Label>
          <Inputs
            type="text"
            required
            placeholder="Ingresa tú nombre"
            onChange={(e) => handleChange(e, "name")}
          />
          {existName === true ? (
            <ErrorMsg>El nombre debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Apellido</Label>
          <Inputs
            type="text"
            required
            placeholder="Ingresa tú apellido"
            onChange={(e) => handleChange(e, "surname")}
          />
          {existSurname === true ? (
            <ErrorMsg>El apellido debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Email</Label>
          <Inputs
            type="email"
            required
            placeholder="Ingresa tú e-mail"
            onChange={(e) => handleChange(e, "email")}
          />
          {existEmail === true ? (
            <ErrorMsg>Debes ingresar un correo valido</ErrorMsg>
          ) : null}

          <Label>Password</Label>
          <Inputs
            type="password"
            required
            placeholder="Crea una contraseña"
            autoComplete="on"
            onChange={(e) => handleChange(e, "password")}
          />
          {existPassword === true ? (
            <ErrorMsg>Asegurate que tenga mas de 6 letras</ErrorMsg>
          ) : null}

          <Label>Confirmar password</Label>
          <Inputs
            type="password"
            required
            placeholder="Repite la contraseña"
            autoComplete="on"
            onChange={(e) => handleChange(e, "confirmPassword")}
          />
          {existConfirm === true ? (
            <ErrorMsg>Las contraseñas no coinciden</ErrorMsg>
          ) : null}

          <Remember>
            <div>
              <InputCheckBox type="checkbox" />
              <span>Recordarme </span>
            </div>
          </Remember>

          <Button>Registrarme</Button>
        </LoginWrapper>
      </form>
    </>
  );
};

export default Register;
