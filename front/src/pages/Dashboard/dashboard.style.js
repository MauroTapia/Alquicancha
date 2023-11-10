import styled from "styled-components";

export const DashboardWrapper = styled.div`
  margin-top: 110px;
  width: 100%;
  background-color: rgba(225, 225, 225, 0.7);
  box-shadow: 0px 1px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 14px;

  @media (max-width: 850px) {
    margin-top: 50px;
    background: none;
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  font-size: 40px;
`;

export const DashboardSection = styled.div`
  margin-top: 32px;
  width: 100%;
  border-radius: 8px;
  background-color: rgba(225, 225, 225, 0.5);
  box-shadow: 0px 1px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const MobileScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 80px;
    font-weight: 900;
    color: yellow;
    background-color: yellowgreen;
    padding: 10px 30px;
    border-radius: 8px;
    text-transform: uppercase;

    @media (max-width: 550px) {
      font-size: 50px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const TitleError = styled.h2`
  margin: 0 auto;
  text-align: center;
  padding: 10px 40px;
  font-size: 50px;
  color: white;
  font-weight: 700;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`;
