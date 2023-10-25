import { Label, LoginWrapper, Inputs, Remember,ImagenPerfil } from "./Login.style"


const Login = () => {
  return (
    <>
    <LoginWrapper>
      
      <ImagenPerfil>
        <img src="/src/assets/Male User.png" alt="user" />
      </ImagenPerfil>
      
      <Label>Nombre</Label>
      <Inputs type="text" required/>
      
      <Label>Contraseña</Label>
      <Inputs type="password" required/>
      
      <Remember>
        <span>Remember Me </span>
        <span>Frogot Password? </span>
      </Remember>
      
      <button>Iniciar Sesión</button>
    
    </LoginWrapper>
    </>
  )
}

export default Login