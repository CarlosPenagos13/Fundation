import styled from "styled-components";

export const ContainerFundation = styled.div`
  min-height: calc(100vh - 132px - 146px);
  margin-bottom: -346px;
  @media (max-width: 1829px) {
    margin-bottom: -200px;
  }
  @media (max-width: 1758px) {
  }
`;

export const HeaderFundation = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  bottom: 350px;

  z-index: 1;

  @media (max-width: 1828px) {
    bottom: 250px;
    width: 100%;
  }

  @media (max-width: 1356px) {
    bottom: 210px;
    width: 100%;
  }

  @media (max-width: 1130px) {
    bottom: 180px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    bottom: 10px;
    width: 100%;
  }
`;
