import styled from "styled-components";

const positionRela = "relative";
const marginRe = "-80px 20px 0px 0px";

export const Wrapper = styled.div`
  position: ${positionRela};
  top: 110px;

  .card-body {
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    margin: ${marginRe};
    border: 1px solid rgba(1, 1, 1, 1);

    padding: 60px 40px 60px 40px;
  }

  .card-title {
    font-size: 35px;
  }

  .card-text {
    text-align: justify;
  }

  .card {
    background-color: revert;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  @media (max-width: 1829px) {
    top: 50px;
  }
`;

export const Wrapper1 = styled.div`
  position: ${positionRela};
  top: 0px;

  .card-body {
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    margin: ${marginRe};
    border: 1px solid rgba(1, 1, 1, 1);

    padding: 60px 40px 60px 40px;
  }

  .card-title {
    font-size: 35px;
  }

  .card-text {
    text-align: justify;
  }

  .card {
    background-color: revert;
    border: 1px solid rgba(0, 0, 0, 0);
  }
`;
