import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 400px;
  z-index: 10;
  @media (max-width: 1829px) {
    bottom: 200px;
    flex-wrap: wrap;
  }
`;
