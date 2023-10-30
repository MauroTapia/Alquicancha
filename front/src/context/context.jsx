import { createContext, useMemo, useState } from "react";

export const initialState = {
  theme: "light",
  logged: false,
  isAdmin: false,
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [logged, setLogged] = useState(initialState.logged);
  const [isAdmin, setIsAdmin] = useState(initialState.isAdmin);

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

  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
      logged,
      login,
      logout,
      isAdmin, 
      loginAdmin,
      logoutAdmin
    };
  }, [theme, logged, isAdmin]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
