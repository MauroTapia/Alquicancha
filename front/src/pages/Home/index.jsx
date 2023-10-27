import Categories from "../../modules/Categories";
import ProductCard from "../../modules/ProductCard";
import Recommended from "../../modules/Recommended";
import Search from "../../modules/Search";
import { HomeWrapper } from "./home.style";

const Home = () => {
  return (
    <>
    <HomeWrapper>
      <Search />
      <Categories />
      <Recommended />
    </HomeWrapper>
    </>
  );
};

export default Home;
