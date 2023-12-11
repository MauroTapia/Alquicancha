import styled from "styled-components";

export const NewAtributoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5fa8d3;
  padding: 32px;
  margin-bottom: 100px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
`;

export const Labels = styled.label`
font-size: 20px;
width: 150px;
`;

export const Inputs = styled.input`
  padding: 4px;
  font-size: 18px;
  width: 600px;
  border: none;
  border-radius: 4px;
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 10px;

  :first-child {
    background-color: #7779;
  }

  :last-child {
    background: linear-gradient(
      0deg,
      #5fbe6f 8.38%,
      rgba(0, 254, 41, 0.4) 113.51%
    );
  }
`;

export const Buttons = styled.button`
  width: 100px;
  height: 34px;
  font-size: 14px;
  align-self: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`;