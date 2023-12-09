import styled from "styled-components";

export const PoliticasWrapper = styled.div`
  margin-top: 150px;
  background-color: white;
  min-height: 50vh;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 5px 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1050px) {
    margin: 150px 20px 0;
  }
`;

export const PoliticasTitulo = styled.h1`
  text-decoration: underline;
  text-transform: uppercase;
`;

export const PoliticasDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

export const Politica = styled.div`
  width: 30%;
  padding: 20px;
  p {
    padding-left: 10px;
    padding-top: 10px;
  }
`;

export const ButtonBack = styled.div`
  background-color: #006400;
  padding: 12px;
  width: 80px;
  height: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  a {
    font-size: 12px;
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: green;
  }
`;
