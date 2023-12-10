import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckoutWrapper = styled.div`
  margin-top: 150px;
  padding: 20px;
  min-height: fit-content;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 30px;

  @media (max-width: 1060px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Datos = styled.div`
  background: #dee2e6;
  width: 50%;
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 16px;
  @media (max-width: 1060px) {
    width: 100%;
  }

  p {
    padding: 10px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const BotonPagar = styled.button`
  margin-top: 10px;
  width: 300px;
  text-transform: uppercase;
  padding: 20px;
  align-self: flex-end;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: white;
  background: #57cc99;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover{
  background: #8ac926;
  color: black;
  }

  @media (max-width: 1060px) {
    margin-right: 20px;
  }
`;
