import { useEffect, useState, useContext} from "react";
import {
  Label,
  LoginWrapper,
  Inputs,
  Remember,
  ImagenPerfil,
  Button,
  InputCheckBox,
  ErrorMsg,
} from "./usePerfil.style";
import { editUser } from "../../services/users";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../context/context";

const UserPerfil = () => {
    const navigate = useNavigate();

    const { user } = useContext(ContextGlobal).contextValue;

    const [ miUsuario, setMiUsuario ] = useState({});

    useEffect(() => {
      setMiUsuario(user);
      //  console.log(user.name);
  }, [user]);

    // console.log(miUsuario)

    const [userData, setUserData] = useState({
      name: user.nombre || "",
      surname: user.apellido || "",
      dni: user.dni || "",
      telefono: user.telefono || "",
      localidad: user.localidad || "",
  });

  
    const [errors, setErrors] = useState([]);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const existName = errors.some(([campo]) => campo === "name");
    const existSurname = errors.some(([campo]) => campo === "surname");
    const existLocalidad = errors.some(([campo]) => campo === "Localidad");
    const existDni = errors.some(([campo]) => campo === "dni");
    const existTelefono = errors.some(([campo]) => campo === "telefono");
  
  
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
  
  
    const handleChange = (e, field) =>{
      setUserData((prevUserData) => ({ ...prevUserData, [field]: e.target.value }));
      setErrors([]);
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setErrors([]);
      checkName();
      checkSurname();
  
      setErrors((prevErrors) => {
        if (prevErrors.length === 0) {
          const userEdit = {  ...user,...userData}
          editUser(userEdit, user.id);
          console.log(userEdit)
          Swal.fire({
            title: "Usuario editado!",
            text: `El usuario a sido editado correctamente!`,
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
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


    function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

  return (
    <form onSubmit={handleSubmit}>
        <LoginWrapper>
          <ImagenPerfil>
            <img src="/src/assets/Male User.png" alt="user" />
          </ImagenPerfil>

          <Label>Edita tu nombre</Label>
          <Inputs
            type="text"
            required
            placeholder={"Ingresa tú nombre"}
            value={capitalize(userData.name)}
            onChange={(e) => handleChange(e, "name")}
          />
          {existName === true ? (
            <ErrorMsg>El nombre debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Edita tu apellido</Label>
          <Inputs
            type="text"
            required
            placeholder="Ingresa tú apellido"
            value={capitalize(userData.surname)}
            onChange={(e) => handleChange(e, "surname")}
          />
          {existSurname === true ? (
            <ErrorMsg>El apellido debe tener minimo 4 letras</ErrorMsg>
          ) : null}

          <Label>Edita tu numero de Dni</Label>
          <Inputs
            type="number"
            required
            placeholder="Edita tu dni"
            value={userData.dni}
            onChange={(e) => handleChange(e, "dni")}
          />
          {existDni === true ? (
            <ErrorMsg>Debes ingresar un dni valido</ErrorMsg>
          ) : null}

          <Label>Edita tu Telefono</Label>
          <Inputs
            type="text"
            required
            placeholder="Edita tu telefono"
            value={userData.telefono}
            onChange={(e) => handleChange(e, "telefono")}
          />
          {existTelefono === true ? (
            <ErrorMsg>El telefono debe tener minimo 8 numeros</ErrorMsg>
          ) : null}

          <Label>Edita tu Localidad</Label>
          <Inputs
            type="text"
            required
            placeholder="Ingresa tú localidad"
            value={capitalize(userData.localidad)}
            onChange={(e) => handleChange(e, "localidad")}
          />
          {existLocalidad === true ? (
            <ErrorMsg>La localidad debe tener minimo 4 letras</ErrorMsg>
          ) : null}




          <Button>Editar</Button>
        </LoginWrapper>
      </form>
  )
}

export default UserPerfil