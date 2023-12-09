import styled from "styled-components";

export const MenuButtonWrapper = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: right;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  padding-top: 30px;
  background-color: rgba(0,0,0,0);
  transition: all ease-in-out 0.1s;
  
  &:hover {
    transform: scale(1.2);;
  }
  @media only screen and (min-width: 601px) {
    display: none;
  }
`;

