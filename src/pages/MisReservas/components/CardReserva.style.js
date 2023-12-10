import styled from "styled-components";

export const ReservaCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  min-height: 50px;
  margin: 10px 0;
  padding: 10px;

  @media (max-width: 1050px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 500px){
    flex-direction: column;
    align-items: center;
  }
`;

export const Titulo = styled.h3`
  padding: 5px;
  margin-bottom: 10px;
`;

export const Item = styled.p`
  margin-left: 20px;
  padding: 5px;
`;

export const ImageContainer = styled.div`
  margin-right: 200px;

  @media(max-width: 650px){
    margin-right: 50px;
  }

  @media(max-width: 500px){
    margin: 0;
  }
`;

export const Imagen = styled.img`
  width: 200px;
  height: auto;
`;