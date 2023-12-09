import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px auto;
`;

export const ButtonAvance = styled.button`
  border: none;
  padding: 8px;
  border-radius: 8px;
  width: 80px;
  background-color: #48cae4;

  &:disabled {
    background-color: #7772;
  }
`;

export const ButtonPage = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  width: 20px;
  background-color: #48cae4;

  &:disabled {
    background-color: #7772;
  }
`;
