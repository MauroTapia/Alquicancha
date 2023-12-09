import products from "../mocks/canchas.json";
import users from "../mocks/users.json";
import categories from "../mocks/categories.json";

export const getFromLocalStorage = (name) => {
  const localStorageData = localStorage.getItem(name);
  let jsonData;

  if (localStorageData) {
    // Si hay datos en localStorage, los retornamos
    try {
      const parsedData = JSON.parse(localStorageData);
      return parsedData;
    } catch (error) {
      console.error("Error al parsear los datos de localStorage:", error);
      return null;
    }
  } else {
    // Si no hay datos en localStorage, almacenamos el JSON de un archivo local
    try {
      switch (name) {
        case "categories":
          localStorage.setItem(name, JSON.stringify(categories));
          jsonData = categories;
          break;
        case "users":
          localStorage.setItem(name, JSON.stringify(users));
          jsonData = users;
          break;
        case "products":
          localStorage.setItem(name, JSON.stringify(products));
          jsonData = products;
          break;

        default:
          break;
      }
      return jsonData;
    } catch (error) {
      console.error("Error al obtener el JSON del archivo local:", error);
      return null;
    }
  }
};
