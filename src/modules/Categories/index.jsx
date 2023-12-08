import { useContext } from "react";
import { CategoriesWrapper } from "./categories.style";
import Card from "./modules/Card";
import { ContextGlobal } from "../../context/context";

const Categories = () => {

  const { categorias } = useContext(ContextGlobal).contextValue;

  return (
    <CategoriesWrapper>
      {categorias && categorias.map((categoria, index) => (
        <Card categoria={categoria} key={index} />
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
