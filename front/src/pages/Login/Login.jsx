import { useEffect, useState } from "react";
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
} from "./login.style";
import { getUserByEmail } from "../../services/users";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState([]);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkUser = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => [...prevErrors, ['user']]);
    } 
  };

  const checkPass = () => {
    if (password.length < 6) {
      setErrors((prevErrors) => [
        ...prevErrors,
        ['password'],
      ]);
    } else {

    }
  };

  const existPassword = errors.some(([campo]) => campo === 'password');
  const existUser = errors.some(([campo]) => campo === 'user');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors([]);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    checkUser();
    checkPass();

    setErrors((prevErrors) => {
      if (prevErrors.length === 0) {
        console.log('init');
      } else {
        console.log(prevErrors);
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

          <Label>Email</Label>
          <Inputs
            type="email"
            required
            placeholder="Ingresa tú correo electrónico"
            onChange={handleEmailChange}
          />
          {existUser === true ? <ErrorMsg>Debes ingresar un correo valido</ErrorMsg> : null}

          <Label>Password</Label>
          <Inputs
            type="password"
            required
            placeholder="Ingresa tú contraseña"
            autoComplete="on"
            onChange={handlePassChange}
          />
          {existPassword === true ? <ErrorMsg>Contraseña incorrecta o menos de 6 caractéres</ErrorMsg> : null}

          <Remember>
            <div>
              <InputCheckBox type="checkbox" />
              <span>Recordarme </span>
            </div>
            <Button1>Olvide mi contraseña</Button1>
          </Remember>

          <Button type="submit">Login</Button>
        </LoginWrapper>
      </form>
    </>
  );
};

export default Login;
