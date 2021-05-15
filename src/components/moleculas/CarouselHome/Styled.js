import styled from "styled-components";

export const CarouselHomeContainer = styled.div`
  .carousel-caption {
    bottom: 300px;
  }
  .carousel-caption p:first-child {
    text-transform: uppercase;
    font-size: 50px;
  }
  .carousel-caption p {
    font-size: 30px;
    border-radius: 500px;
    background-color: rgba(120, 120, 120, 0.3);
    color: rgba(250, 250, 100);
  }
  img {
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  @media (max-width: 1267px) {
    .carousel-caption {
      bottom: 200px;
    }
    .carousel-caption p:first-child {
      text-transform: uppercase;
      font-size: 40px;
    }
    .carousel-caption p {
      font-size: 30px;
    }
  }

  @media (max-width: 800px) {
    .carousel-caption {
      bottom: 100px;
    }
    .carousel-caption p:first-child {
      text-transform: uppercase;
      font-size: 40px;
    }
    .carousel-caption p {
      font-size: 30px;
    }
  }

  @media (max-width: 630px) {
    .carousel-caption {
      bottom: 50px;
    }
    .carousel-caption p:first-child {
      text-transform: uppercase;
      font-size: 20px;
    }
    .carousel-caption p {
      font-size: 10px;
    }
  }
`;
