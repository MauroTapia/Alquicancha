import React, { useEffect, useState } from "react";
import { editUser, getAllUsers, getUserById } from "../../../../services/users";
import { Buttons, Header, ItemTitle, ProductItem, Wrapper } from "./listUser.style";
import { ToastContainer, toast } from "react-toastify";

const ListUsers = () => {
  const [users, setUsers] = useState(null);



  const changeRol = async (id)=>{
    const userFinded = await getUserById(id);
    userFinded.admin = !userFinded.admin;
    await editUser(userFinded, id);
    notify('Se ha cambiado el rol del usuario!')
  }


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getAllUsers();
        setUsers(result);
      } catch (error) {
        console.log("Error obteniendo los usuarios");
      }
    };
    fetchUsers();
  }, []);

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

          {users.map((user, index) => (
            <ProductItem key={index}>
              <ItemTitle>{user.nombre}</ItemTitle>
              <p>{user.apellido}</p>
              <p>{user.email}</p>
              <Buttons>
                <button onClick={() => changeRol(user.id)}
                className={user.admin ? 'admin' : ''}
                >
                  {user.admin ? 'Admin' : 'Usuario' }
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
