import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 500px;
  z-index: 10;
  @media (max-width: 1829px) {
    bottom: 200px;
    flex-wrap: wrap;
  }

  @media (max-width: 1000px) {
    bottom: 100px;
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    display: block;
    bottom: 0px;
    margin-left: 25%;
  }

  @media (max-width: 650px) {
    display: block;
    bottom: 0px;
    margin-left: 10%;
  }
  @media (max-width: 425px) {
    margin-left: 10px;
  }
`;
