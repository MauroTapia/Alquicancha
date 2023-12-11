import { createContext, useMemo, useState, useEffect } from "react";
import { listarProductos } from "../services/product/productFirebase";
import { listarCategorias } from "../services/categories/categoriesFirebase";

export const initialState = {
  theme: "light",
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  // Obtén el estado inicial desde el almacenamiento local si existe
  const storedTheme = localStorage.getItem("theme") || initialState.theme;
  const storedLogged = localStorage.getItem("logged") === "true";
  const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedProducts = JSON.parse(localStorage.getItem("productos"));
  const storedAllProducts = JSON.parse(localStorage.getItem("allProducts"));
  const storedCategorias = JSON.parse(localStorage.getItem("categorias"));

  const [theme, setTheme] = useState(storedTheme);
  const [logged, setLogged] = useState(storedLogged);
  const [isAdmin, setIsAdmin] = useState(storedIsAdmin);
  const [user, setUser] = useState(storedUser);
  const [productos, setProductos] = useState(storedProducts);
  const [allProducts, setAllProducts] = useState(storedAllProducts);
  const [categorias, setCategorias] = useState(storedCategorias);

  const cargarDatos = async () => {
    try {
      // Cargar productos al inicio
      const productosData = await listarProductos();
      setProductos(productosData);
      setAllProducts(productosData);

      // Cargar categorías al inicio
      const categoriasData = await listarCategorias();
      setCategorias(categoriasData);

      // Guardar allProducts en el almacenamiento local
      localStorage.setItem("allProducts", JSON.stringify(productosData));
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };

  useEffect(() => {
    // Guardar el estado en el almacenamiento local cada vez que cambia
    localStorage.setItem("theme", theme);
    localStorage.setItem("logged", logged);
    localStorage.setItem("isAdmin", isAdmin);
    if (logged) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    // Llamar a la función al inicio de la aplicación
    cargarDatos();
  }, [theme, logged, isAdmin, user]);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  useEffect(() => {
    localStorage.setItem("categorias", JSON.stringify(categorias));
  }, [categorias]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const login = () => {
    setLogged(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setLogged(false);
  };

  const loginAdmin = () => {
    setIsAdmin(true);
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
  };

  const setUserData = (data) => {
    setUser(data);
  };

  const setProductData = (data) => {
    setProductos(data);
    localStorage.setItem("productos", JSON.stringify(data));
  };

  const setCategoriasData = (data) => {
    setCategorias(data);
  };

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
      setUserData,
      setProductData,
      productos,
      setCategoriasData,
      categorias,
      allProducts,
    };
  }, [theme, logged, isAdmin, user, productos, categorias, allProducts]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
