import styled from "styled-components";

export const Detail = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;

  a{

    img{
      width: 32px;
      cursor: poiter;

      &:hover{
        transition: ease .5s;
        transform: scale(1.2);
      }
    }
  }
`;



export const Title = styled.h2`

`;



export const ProductDetailDiv = styled.div`
  width: 100%;
`;