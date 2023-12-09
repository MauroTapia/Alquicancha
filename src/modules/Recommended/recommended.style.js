import styled from "styled-components";

export const TitleSeccion = styled.h2`
  margin-top: 60px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
`;

export const RecommendedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px 0px 100px 0px;

  @media(max-width: 950px){
    justify-content: center;
  }
`;
