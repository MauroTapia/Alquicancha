import styled from "styled-components";

export const SearchWrapper = styled.div`
  margin: 32px auto;
  margin-top: 150px;
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

export const Label = styled.label`
  width: 45px;
  height: 19px;
  color: white;
  margin-top: 10px;
  margin-right: 5px;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: left;
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

  @media all and (max-width: 450px) {
    width: 90%;
    font-size: 15px;
    margin-left: -10%
    }
`;
export const Input = styled.input`
  width: 75%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 15px;

  @media all and (max-width: 450px) {
    width: 100%;
    font-size: 15px;
    }
;`


export const DateForm = styled.div`
  display: flex;
  justify-content: start;
  
  @media all and (max-width: 450px) {
  display: inline-block;
  font-size: 15px;
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

  @media all and (max-width: 450px) {
    margin-top: -51px;
    }

`;

export const LupaImg = styled.img`

`;