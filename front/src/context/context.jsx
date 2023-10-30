import { createContext, useMemo, useState } from "react";

export const initialState = {
  theme: "light",
  logged: false,
  isAdmin: false,
  user: {
    name: "",
    surname: ""
  },
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [logged, setLogged] = useState(initialState.logged);
  const [isAdmin, setIsAdmin] = useState(initialState.isAdmin);
  const [user, setUser] = useState(initialState.user);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const login = ()=>{
    setLogged(true);
  }

  const logout = () =>{
    setLogged(false);
  }

  const loginAdmin = ()=>{
    setIsAdmin(true);
  }

  const logoutAdmin = ()=>{
    setIsAdmin(false);
  }

  const setUserData = (data) => {
    setUser(data);
  }

  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
      logged,
      login,
      logout,
      isAdmin, 
      loginAdmin,
      logoutAdmin,
      user,
      setUserData
    };
  }, [theme, logged, isAdmin, user]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
