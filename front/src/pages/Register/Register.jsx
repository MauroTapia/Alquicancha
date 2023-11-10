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
import Footer from "../../modules/Footer/index";

const Register = () => {
  const navigate = useNavigate();

  const fechaActual = () => {
    // Obtener la fecha de hoy
    let fechaActual = new Date();

    // Obtener el año, mes y día
    let año = fechaActual.getFullYear();
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Se suma 1 al mes ya que los meses van de 0 a 11
    let dia = fechaActual.getDate().toString().padStart(2, "0");

    // Formatear la fecha en el formato deseado
    let fechaFormateada = `${año}-${mes}-${dia}`;
    return fechaFormateada;
  };

  const [userData, setUserData] = useState({
    nombre: null,
    apellido: null,
    email: null,
    password: null,
    telefono: null,
    dni: 1,
    fechaIngreso: fechaActual(),
    calle: null,
    numero: null,
    localidad: null,
    admin: false,
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
  const existUser = errors.some(([campo]) => campo === "exist");
  const existTelefono = errors.some(([campo]) => campo === "telefono");
  const existCalle = errors.some(([campo]) => campo === "calle");
  const existNumero = errors.some(([campo]) => campo === "numero");
  const existLocalidad = errors.some(([campo]) => campo === "localidad");

  const CheckUserExist = async (email) => {
    const user = await getUserByEmail(email);
    if (user) {
      setErrors((prevErrors) => [...prevErrors, ["exist"]]);
    }
  };

  const checkName = () => {
    if (userData.nombre.length < 4) {
      setErrors((prevErrors) => [...prevErrors, ["name"]]);
    }
  };

  const checkSurname = () => {
    if (userData.apellido.length < 4) {
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

  const handleChange = (e, field) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: e.target.value,
    }));
    setErrors([]);
  };

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
        const user = { ...userData };
        console.log(user);
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
            onChange={(e) => handleChange(e, "nombre")}
          />
          {existName === true ? (
            <ErrorMsg>El nombre debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Apellido</Label>
          <Inputs
            type="text"
            required
            placeholder="Ingresa tú apellido"
            onChange={(e) => handleChange(e, "apellido")}
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
          {existUser === true ? (
            <ErrorMsg>El correo ya esta registrado a una cuenta</ErrorMsg>
          ) : existEmail === true ? (
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

          <Label>Teléfono</Label>
          <Inputs
            type="number"
            required
            placeholder="Ingresa tú telefono"
            onChange={(e) => handleChange(e, "telefono")}
          />
          {existTelefono === true ? (
            <ErrorMsg>El telefono debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Dirección</Label>
          <Inputs
            type="text"
            required
            placeholder="Ingresa tú dirección"
            onChange={(e) => handleChange(e, "calle")}
          />
          {existCalle === true ? (
            <ErrorMsg>La dirección debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Número de Puerta</Label>
          <Inputs
            type="number"
            required
            placeholder="Ingresa tú número de puerta"
            onChange={(e) => handleChange(e, "numero")}
          />
          {existNumero === true ? (
            <ErrorMsg>El número debe tener minimo 4</ErrorMsg>
          ) : null}

          <Label>Localidad</Label>
          <Inputs
            type="text"
            required
            placeholder="Ingresa tú Localidad"
            onChange={(e) => handleChange(e, "localidad")}
          />
          {existLocalidad === true ? (
            <ErrorMsg>La localidad debe tener minimo 4 letras</ErrorMsg>
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
      <Footer />
    </>
  );
};

export default Register;
