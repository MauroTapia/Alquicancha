import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  background-color: var(--color-lightGreen);
  min-height: 100px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin-top: -150px;

  a {
    color: var(--colors-blue);
    text-decoration: none;
  }
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
  gap: 16px;
  margin-right: 32px;

  @media (max-width: 570px) {
    display: none;
}
`

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