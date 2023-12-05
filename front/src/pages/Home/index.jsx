import { useContext, useEffect } from "react";
import Categories from "../../modules/Categories";
import Recommended from "../../modules/Recommended";
import Search from "../../modules/Search";
import { HomeWrapper } from "./home.style";
import { getFromLocalStorage } from "../../mocks/initLocalStorage";
import Footer from "../../modules/Footer/index";
import { ContextGlobal } from "../../context/context";

const Home = () => {
  const { allProducts } = useContext(ContextGlobal).contextValue;

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(allProducts));
  }, []);

  return (
    <>
      <HomeWrapper>
        <Search />
        <Categories />
        <Recommended />
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
