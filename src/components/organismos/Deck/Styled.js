import styled from "styled-components";

export const DeckCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
  text-align: center;
  button {
    border-radius: 20px;
    border: 1px solid #00713c;
    color: #00713c;
  }
  @media (max-width: 1000px) {
    display: block;
    .card-deck {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 750px) {
    .card-body {
      display: none;
    }
  }
`;

export const WrapDeck = styled.div`
  min-height: calc(100vh - 132px - 146px);
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px 60px;
  margin: 50px;
  margin-top: 30px;
  @media (max-width: 1000px) {
    .list-group {
      margin-left: -25px;
      margin-right: -30px;
    }
    margin: 40px;
    margin-right: 10px;
    margin-top: 20px;
  }
`;
