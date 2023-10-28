import {
  Label,
  LoginWrapper,
  Inputs,
  Remember,
  ImagenPerfil,
  Button,
  InputCheckBox,
} from "./register.style";
const Register = () => {
  return (
    <>
      <form action="">
        <LoginWrapper>
          <ImagenPerfil>
            <img src="/src/assets/Male User.png" alt="user" />
          </ImagenPerfil>

          <Label>Nombre</Label>
          <Inputs type="text" required placeholder="Ingresa tú nombre" />

          <Label>Email</Label>
          <Inputs type="email" required placeholder="Ingresa tú e-mail" />

          <Label>Password</Label>
          <Inputs type="password" required placeholder="Crea una contraseña" autoComplete="on" />

          <Label>Confirmar password</Label>
          <Inputs type="password" required placeholder="Repite la contraseña" autoComplete="on"/>

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
