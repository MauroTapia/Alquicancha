import styled from "styled-components";

export const SearchWrapper = styled.div`
  margin: 32px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  background-color: rgba(0,0,0,0.3);
  padding: 16px;
  border-radius: 8px;

  @media(max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  width: 60%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;

  @media(max-width: 950px){
    width: 100%;
  }
`;

export const DateForm = styled.div`
  display: flex;
  justify-content: start;
  
  label{
    margin-right: 8px;
    color: black;
    font-weight: 500;
    background-color: white;
    padding: 8px;
    border-radius: 8px;
  }
`;

export const ButtonSearch = styled.button`
  width: 37px;
  height: 37px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
`;

export const LupaImg = styled.img`
  
`;