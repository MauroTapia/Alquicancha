import ProductCard from "../ProductCard"
import { RecommendedWrapper, TitleSeccion } from "./recommended.style"
import { getRandomElements } from "../../utils/get-random-elements"
import { getAllProducts } from "../../services/product"

const Recommended = () => {

  const products = getAllProducts();
  const productsToShow = getRandomElements(products, 10);

  return (
    <>
      <TitleSeccion>Productos recomendados</TitleSeccion>    
      <RecommendedWrapper>
          {productsToShow.map((product, index)=>(
            <ProductCard key={index} product={product}/>
          ))}
      </RecommendedWrapper>
    </>
  )
}

export default Recommended