import React from "react";

import { CarouselHomeContainer } from "./Styled";

import { Carousel } from "react-bootstrap";
import { ButtonApoyanos } from "../../atomos/ButtonApoyanos/ButtonApoyanos";

const CarouselHome = () => {
  return (
    <CarouselHomeContainer>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/fondo1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Conexion con la naturaleza</p>
            <p>Fundación ambiental</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/fondo2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>Plantemos un arbol</p>
            <p>Kit principal</p>
            <ButtonApoyanos />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselHomeContainer>
  );
};

export default CarouselHome;
