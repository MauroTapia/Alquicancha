import { Label, LoginWrapper, Inputs, Remember,ImagenPerfil, Button, Button1, InputCheckBox } from "./register.style"
const Register = () => {
  return (
    <>
    <LoginWrapper>
      
      <ImagenPerfil>
        <img src="/src/assets/Male User.png" alt="user" />
      </ImagenPerfil>
      
      <Label>Name</Label>
      <Inputs type="text" required placeholder="Ingresa tú nombre" />

      <Label>Email</Label>
      <Inputs type="email" required placeholder="Ingresa tú e-mail" />
      
      <Label>Password</Label>
      <Inputs type="password" required placeholder="Crea una contraseña" />

      <Label>Confirm password</Label>
      <Inputs type="password" required placeholder="Repite la contraseña" />
      
      <Remember>
        <div>
          <InputCheckBox type="checkbox"/>
          <span>Remember me </span>
        </div>
      </Remember>
      
      <Button>Register</Button>
    
    </LoginWrapper>
    </>
  )
}

export default Register