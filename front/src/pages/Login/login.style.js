import styled from "styled-components";

export const LoginWrapper = styled.div`
margin: 0 auto;
margin-top: 32px;
width: 80%;
height: 450px;
color: red;
background: rgb(255,255,255);
background: linear-gradient(45deg, rgba(255,255,255,0.41220238095238093) 0%, rgba(255,255,255,0.47942927170868344) 7%, rgba(99,250,134,0.35898109243697474) 100%, rgba(0,212,255,1) 100%);
display: flex;
flex-direction: column;
padding: 32px;
border-radius: 30px;
`;

export const Label = styled.label`
  width: 76px;
  height: 19px;
  color: #000;
  margin: 10px;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Inputs = styled.input`
  border-radius: 30px;
  border: 1px solid rgba(129, 129, 129, 0.50);
  padding:10px;
  background: linear-gradient(180deg, #B4FFA7 0%, rgba(3, 19, 1, 0.00) 100%);
  box-shadow: 2px 6px 6px 0px rgba(0, 0, 0, 0.25);
`;

export const ImagenPerfil = styled.div`
align-self: center;
display: flex;
width: 100%;

height: 171px;
`;

export const Remember = styled.div`
  font-size: 15px;
  font-family: Roboto;
  margin-top:10px;
  color: brown;
  display: flex;
  justify-content: space-between; 
`;

export const Button = styled.button`
  width: 280px;
  height: 34px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  flex-shrink: 0;
  align-self: center;
  border-radius: 13px;
  background: linear-gradient(0deg, #5FBE6F 28.38%, rgba(0, 254, 41, 0.00) 113.51%);
  
`;

export const Button1 = styled.button`
  width: 130px;
  font-family: Roboto;
  font-size: 15px;
  background: inherit;
  border: none;
  color: brown;
`;

export const InputCheckBox = styled.input`
  margin-left: 5px;
  margin-right: 10px;
`;