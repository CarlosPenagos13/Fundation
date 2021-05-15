import styled from "styled-components";

export const Fondo = styled.div`
  background-image: url("images/background.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
  background-color: rgba(255, 0, 0, 0.5);
`;

export const Info = styled.div`
  p {
    margin: 0;
  }
  h3 {
    margin-top: 10px;
  }
  span::after {
    content: ", ";
  }
  span:last-child::after {
    content: ".";
  }
`;

export const DescriptionProject = styled.div`
  margin-top: 10px;
`;

export const WrapperProjects = styled.div`
  margin-top: 20px;
  margin-left: 400px;
  margin-right: 400px;
  h2,
  h3 {
    text-transform: uppercase;
  }
  h2 {
    margin: 0;
    background: radial-gradient(
      circle at 50% 50%,
      #006944 85.71%,
      #00644c 92.86%,
      #006156 20%
    );
    display: inline-block;
    padding: 20px;
    position: relative;
    top: -50px;
    left: -50px;
    transform: rotateZ(-1deg);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 1486px) {
    margin-left: 200px;
    margin-right: 200px;
  }
  @media (max-width: 900px) {
    h2 {
      padding: 10px;
      font-size: 28px;
    }
    margin-left: 60px;
    margin-right: 60px;
  }
`;
