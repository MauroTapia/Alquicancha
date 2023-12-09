import React, { useContext, useEffect, useState } from "react";
import { editUser, getAllUsers, getUserById } from "../../../../services/users";
import {
  Buttons,
  Header,
  ItemTitle,
  ProductItem,
  Wrapper,
} from "./listUser.style";
import { ToastContainer, toast } from "react-toastify";
import {
  editarUsuarioById,
  listarUsuarios,
} from "../../../../services/users/userFirebase";
import { ContextGlobal } from "../../../../context/context";

const ListUsers = () => {
  const [users, setUsers] = useState(null);
  const { logoutAdmin, loginAdmin } = useContext(ContextGlobal).contextValue;

  const changeRol = async (user) => {
    user.admin = !user.admin;
    await editarUsuarioById(user.id, user);
    notify("Se ha cambiado el rol del usuario!");
    if(user.admin){
      loginAdmin()
    }else{
      logoutAdmin();
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await listarUsuarios();
        setUsers(result);
      } catch (error) {
        console.log("Error obteniendo los usuarios");
      }
    };
    fetchUsers();
  }, [users]);

  const notify = (msj) => {
    toast.success(msj, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      style: {
        background: "#b7e4c7",
      },
    });
  };

  return (
    <div>
      {users && (
        <Wrapper>
          <Header>
            <p>Nombre</p>
            <p>Apellido</p>
            <p>E-Mail</p>
            <p>Rol</p>
          </Header>

          {users.map((user) => (
            <ProductItem key={user.id}>
              <ItemTitle>{user.nombre}</ItemTitle>
              <p>{user.apellido}</p>
              <p>{user.email}</p>
              <Buttons>
                <button
                  onClick={() => changeRol(user)}
                  className={user.admin ? "admin" : ""}
                >
                  {user.admin ? "Admin" : "Usuario"}
                </button>
              </Buttons>
            </ProductItem>
          ))}
          <ToastContainer />
        </Wrapper>
      )}
    </div>
  );
};

export default ListUsers;
