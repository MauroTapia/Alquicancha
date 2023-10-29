import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 14px;
  border-radius: 8px;
  background: rgba(100, 100, 100, 0.3);
`;

export const MenuButton = styled.button`
  width: 100px;
  height: 34px;
  font-size: 14px;
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
