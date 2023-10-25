import ProductCard from "../ProductCard"
import { RecommendedWrapper, TitleSeccion } from "./recommended.style"
import products from '../../mocks/canchas.json'
import { getRandomElements } from "../../utils/get-random-elements"

const Recommended = () => {
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