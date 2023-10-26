import { Label, LoginWrapper, Inputs, Remember,ImagenPerfil, Button, Button1, InputCheckBox } from "./register.style"
const Register = () => {
  return (
    <>
    <LoginWrapper>
      
      <ImagenPerfil>
        <img src="/src/assets/Male User.png" alt="user" />
      </ImagenPerfil>
      
      <Label>Name</Label>
      <Inputs type="text" required/>

      <Label>Email</Label>
      <Inputs type="email" required/>
      
      <Label>Password</Label>
      <Inputs type="password" required/>

      <Label>Confirm password</Label>
      <Inputs type="password" required/>
      
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