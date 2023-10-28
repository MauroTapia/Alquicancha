import styled from "styled-components";

export const Detail = styled.div`
  width: 100%;
  min-height: 130vh;
  margin-top: 132px;

  @media (max-width: 1024px) {
    padding: 0 32px;
  }
`;

export const CardDetail = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 16px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;

    img {
      width: 32px;
      cursor: pointer;
    }
    &:hover {
      transform: scale(1.1);
      color: white;

      img {
        filter: invert(1) sepia(0) hue-rotate(20deg) saturate(1000%);
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Images = styled.div`
  width: 50%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 8px;
`;

export const ImagePrincipal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  padding: 8px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const ImagesSecondaries = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;

  img {
    width: 100px;
    height: auto;
    padding: 4px;
    border-radius: 8px;
  }

  .selected {
    border: 2px solid black;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 50%;
  padding: 0 14px;
`;

export const TextDetails = styled.p`
  font-size: 24px;
  margin: 0;
  padding-bottom: 12px;
`;

export const Caracteristicas = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 8px;

  p {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const ButtonReserva = styled.button`
  width: 100%;
  height: 34px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  margin-top: 32px;
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`;

export const Included = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;

  li {
    padding: 12px;
  }
`;
