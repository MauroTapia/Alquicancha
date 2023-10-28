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
  box-sizing: border-box;

  &:hover {
    transform: scale(1.03);
    border: 2px solid rgba(255, 255, 255, 1);
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

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: white;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: brown;
  font-weight: bold;
  margin: 10px 0;

  span {
    font-size: 14px;
    text-decoration: underline;
    color: black;
    font-weight: normal;
    margin-right: 10px;
  }
`;
