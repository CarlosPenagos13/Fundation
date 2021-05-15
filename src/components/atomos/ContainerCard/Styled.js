import styled from "styled-components";

export const Wrapper = styled.div`
  .card-body {
    background-color: #181b31;
    color: #ffffff;
    border-radius: 20px;
    margin: -80px 20px 0px 0px;
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
    border: 0px solid rgba(0, 0, 0, 0);
    display: flex;
    width: 394px;
    height: 533px;
  }
  @media (max-width: 800px) {
    .card-title {
      font-size: 20px;
    }
    .card-body {
      background-color: #181b31;
      color: #ffffff;
      border-radius: 20px;
      margin: -30px 20px 70px 10px;
      padding: 60px 40px 50px 40px;
    }
    margin-bottom: 30px;
    margin-top: 50px;
    font-size: 15px;
  }
  @media (max-width: 500px) {
    .card {
      background-color: revert;
      border: 0px solid rgba(0, 0, 0, 0);
      width: 100%;
      height: 100%;
    }
  }
`;
