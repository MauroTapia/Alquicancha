import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonClose = styled.button`
  width: 50%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  border: none;
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`;