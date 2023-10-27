import styled from "styled-components";

export const Detail = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
  border-radius: 15px;
  background-color: rgba(206, 200, 203, 0.51);

  a{

    img{
      width: 32px;
      cursor: pointer;

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
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(206, 200, 203, 0.51);
  border-radius: 15px;

  div{
    width: 200px
    heigth: 200px
    border: 1px solid green
  }
`;

export const ImageBlock = styled.div `
  width: 400px;

  img{
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailProduct = styled.div`
  width: 50%;
  border: 1px solid black;
  border-radius: 15px;
  aling-item: center;

  p{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 200px;
  }
`;

export const Price = styled.span`
  color: rgba(0, 135, 1, 1);
  font-weight: bold;
  border-radius: 15px;
  font-size: 22px;
`;