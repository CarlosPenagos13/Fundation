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
    width: 430px;
  }

  @media (max-width: 1829px) {
    top: 50px;
  }
  @media (max-width: 840px) {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  @media (max-width: 800px) {
    top: 0px;

    margin-bottom: 10px;

    .card-body {
      background-color: #fff;
      color: #000;
      border-radius: 20px;
      margin: -80px 20px 0px 0px;
      border: 1px solid rgba(1, 1, 1, 1);

      padding: 30px 40px 30px 50px;
    }
    .card-title {
      font-size: 20px;
    }
    .card {
      width: 430px;
      text-align: center;
    }
    font-size: 15px;
  }
  @media (max-width: 500px) {
    .card {
      width: 100%;
    }
  }
`;

export const Wrapper1 = styled.div`
  position: ${positionRela};
  top: 0px;

  .card-body {
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    margin: -80px 20px 90px 0px;
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
    width: 430px;
  }
  @media (max-width: 1270px) {
    margin-top: 90px;
  }

  @media (max-width: 800px) {
    top: 0px;

    margin-bottom: 90px;

    .card-body {
      background-color: #fff;
      color: #000;
      border-radius: 20px;
      margin: -80px 20px 10px 0px;
      border: 1px solid rgba(1, 1, 1, 1);
      padding: 30px 40px 30px 50px;
    }

    .card-title {
      font-size: 20px;
    }

    .card {
      width: 430px;
    }

    font-size: 15px;
  }

  @media (max-width: 500px) {
    .card {
      width: 100%;
    }
  }
`;
