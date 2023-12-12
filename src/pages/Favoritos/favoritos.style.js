import styled from "styled-components";

export const Titulo = styled.h2`
  margin-top: 150px;
  margin-bottom: 30px;
  color: white;
  font-size: 40px;
`;

export const FavoritosWrapper = styled.div`
box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media(max-width: 920px){
    flex-direction: column;
    align-items: center;
  }
`;