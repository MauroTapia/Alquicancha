import styled from "styled-components";

export const CardContainer = styled.div`
  height: 300px;
  width: 450px;
  background-color: rgba(225, 225, 225, 0.7);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px 0px rgba(180, 180, 180, 0.62);
  padding: 16px;
  cursor: pointer;

  &:hover{
    transition: ease .2s;
    transform: scale(1.05);
    border: 4px solid rgba(255, 255, 255, 1);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitlePrice = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 15px;
  color: red;
  font-weight: bold;
  span {
    text-decoration: underline;
    color: black;
  font-weight: normal;
  }
`;
