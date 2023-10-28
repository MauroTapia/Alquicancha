import { useEffect } from "react";
import {
  Label,
  LoginWrapper,
  Inputs,
  Remember,
  ImagenPerfil,
  Button,
  Button1,
  InputCheckBox,
} from "./login.style";

const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <form action="">
      <LoginWrapper>
        <ImagenPerfil>
          <img src="/src/assets/Male User.png" alt="user" />
        </ImagenPerfil>

        <Label>Email</Label>
        <Inputs
          type="email"
          required
          placeholder="Ingresa tú correo electrónico"
        />

        <Label>Password</Label>
        <Inputs type="password" required placeholder="Ingresa tú contraseña" autoComplete="on"/>

        <Remember>
          <div>
            <InputCheckBox type="checkbox" />
            <span>Recordarme </span>
          </div>
          <Button1>Olvide mi contraseña</Button1>
        </Remember>

        <Button>Login</Button>
      </LoginWrapper>
    </form>
    </>
  );
};

export default Login;
