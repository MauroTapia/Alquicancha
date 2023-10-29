import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
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

  :nth-child(2){
    width: 300px;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  :first-child{
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

  :first-child{
    background-color: #80b918;

    &:hover{
      color: white;
    }
  }

  :last-child{
    background-color: #d80032;

    &:hover{
      color: white;
    }
  }

  button{
    width: 70px;
    height: 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;