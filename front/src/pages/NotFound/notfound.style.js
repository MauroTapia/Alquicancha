import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  text-align: center;

  img{
    max-width: 80%;
    width: 500px;
    height: auto;
  }

  p{
    text-transform: uppercase;
    font-size: 60px;
    margin-top: 32px;
  }
`;