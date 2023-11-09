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
const Register = () => {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CheckUserExist = async (email) => {
    const userData = await getUserByEmail(email);
    if (userData) {
      console.log("entre al malnacido error");
      setErrors((prevErrors) => [...prevErrors, ["exist"]])
    }
      };

  const checkName = () => {
    if(name.length < 4){
      setErrors((prevErrors) => [...prevErrors, ["name"]])
    }
  };

  const checkEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => [...prevErrors, ["email"]]);
    }
  };

  const checkPass = () => {
    if (password.length < 6) {
      setErrors((prevErrors) => [...prevErrors, ["password"]]);
    } else if (password !== confirmPassword) {
      setErrors((prevErrors) => [...prevErrors, ["password"]])
    }
  };

  const existName = errors.some(([campo]) => campo === "name");
  const existEmail = errors.some(([campo]) => campo === "email");
  const existPassword = errors.some(([campo]) => campo === "password");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
    setErrors([]);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
    setErrors([]);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
    setErrors([]);
  };

  const handleConfirmPassChange = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors([]);
    await CheckUserExist(email);
    checkEmail();
    checkPass();
    checkName();



    setErrors((prevErrors) => {
      if (prevErrors.length === 0) {
        const user =  
        {
          data: {
            name: name,
            email: email,
            password: password,
          }
        }
        Swal.fire({
          title: "Ingreso correcto!",
          text: `Hola ${user.data.name}, bienvenido!`,
          icon: "success",
          confirmButtonText: `Ir a "Home"`,
        }).then((result) => {
          if (result.isConfirmed) {
              navigate("/");
          }
        });
        newUser (user);
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
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <LoginWrapper>
          <ImagenPerfil>
            <img src="/src/assets/Male User.png" alt="user" />
          </ImagenPerfil>

          <Label>Nombre</Label>
          <Inputs type="text" required placeholder="Ingresa tú nombre"
          onChange={handleNameChange} />
          {existName === true ? (
            <ErrorMsg>El nombre debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Email</Label>
          <Inputs type="email" required placeholder="Ingresa tú e-mail" 
          onChange={handleEmailChange}/>
          {existEmail === true ? (
            <ErrorMsg>Debes ingresar un correo valido</ErrorMsg>
          ) : null}

          <Label>Password</Label>
          <Inputs type="password" required placeholder="Crea una contraseña" autoComplete="on" 
          onChange={handlePassChange}/>
          {existPassword === true ? (
            <ErrorMsg>Asegurate que tenga mas de 6 letras y que este igual que el confirm</ErrorMsg>
          ) : null}

          <Label>Confirmar password</Label>
          <Inputs type="password" required placeholder="Repite la contraseña" autoComplete="on"
          onChange={handleConfirmPassChange}/>

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
