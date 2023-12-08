import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 100px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  height: 32px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  background-color: rgba(225, 225, 225, 0.9);
  padding: 8px;
  height: fit-content;
  border-radius: 8px;
  margin-bottom: 10px;

  :nth-child(1) {
    width: 250px;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

export const ItemTitle = styled.p`
  width: 300px;
`;

export const Buttons = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  gap: 5px;

  :first-child {
    background-color: #80b918;

    &:hover {
      color: white;
    }
  }

  :last-child {
    background-color: #d80032;

    &:hover {
      color: white;
    }
  }

  button {
    width: 70px;
    height: 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const ButtonNewContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const ButtonNew = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  font-size: 16px;
  background-color: #d8f3dc;
  border: 1px solid green;
  color: green;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    fill: green;
  }

  &:hover {
    border: 1px solid white;
    color: black;
    background-color: white;
  }
`;
