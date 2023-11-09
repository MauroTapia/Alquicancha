import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  background-color: var(--color-lightGreen);
  min-height: 100px;
  height: 100px;
  box-shadow: 0px 4px 4px 0px rgba(100, 100, 100, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin-top: -150px;

  a {
    color: var(--colors-blue);
    text-decoration: none;
  }
  font-family: Roboto;
`;

export const LogoWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 570px) {
    padding: 0;
  }`
;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-left: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

export const LogoTitle = styled.p`
  font-size: 1rem;
  color: var(--colors-blue);
  font-weight: bold;
`;

export const LoginRegister = styled.div`
  display: flex;

  @media (max-width: 570px) {
    display: none;
}
`
;

export const Login = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover{
    transition: ease .7s;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Register = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover{
    transition: ease .7s;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const LoginRegistermMenu = styled.div`
  display: none;

  @media (max-width: 570px) {
    display: flex;
    height: 30px;
    widht: 30px;
    gap: 16px;
    margin-right: 32px;
}
`
