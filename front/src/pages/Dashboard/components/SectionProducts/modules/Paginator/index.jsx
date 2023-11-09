import React from "react";
import { ButtonAvance, ButtonPage, Wrapper } from "./paginator.style";

const Paginator = (props) => {
  const { paginate, currentPage, totalPages, indexOfLastProduct, products } = props;

  return (
    <Wrapper>
      <ButtonAvance
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Atras
      </ButtonAvance>

      {[...Array(totalPages)].map((_, index) => (
        <ButtonPage
          key={index}
          onClick={() => paginate(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </ButtonPage>
      ))}

      <ButtonAvance
        onClick={() => paginate(currentPage + 1)}
        disabled={indexOfLastProduct >= products.length}
      >
        Siguiente
      </ButtonAvance>
    </Wrapper>
  );
};

export default Paginator;
