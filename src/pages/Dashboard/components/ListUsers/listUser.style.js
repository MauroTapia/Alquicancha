import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 100px;
  text-align: start;
  align-items: stretch;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 150px 250px 300px 150px;
  justify-content: space-between;
  height: 32px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  background-color: rgba(225, 225, 225, 0.9);
  padding: 8px;
  height: fit-content;
  border-radius: 8px;
  margin-bottom: 10px;

  :nth-child(2) {
    width: 300px;
  }
`;

export const ProductItem = styled.div`
  display: grid;
  grid-template-columns: 150px 200px 300px 200px;
  justify-content: space-between;
  height: 40px;
  :first-child {
    margin-left: 14px;
    width: 50px;
  }
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
    width: 150px;

    &:hover {
      color: white;
    }
  }

  button {
    height: 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    
    &.admin {
      background-color: red;
      color: white;
    }
  }
`;
