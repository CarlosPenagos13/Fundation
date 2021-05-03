import React from "react";

import { Card } from "react-bootstrap";

import { Wrapper } from "./Styled";

function ContainerCard() {
  return (
    <Wrapper>
      <Card style={{ width: "394px", height: "533px" }}>
        <Card.Body>
          <Card.Title>¿Quienes somos? Conexion con la naturaleza </Card.Title>
          <Card.Text>
            Somos una fundación de carácter ambiental sin ánimo de lucro y con
            figura jurídica ante Cámara de Comercio del Sur y Oriente del
            Tolima; nace en el año 2019 en la Vereda San Cristóbal del municipio
            de Melgar Tolima y empieza un punto de trabajo en el municipio de
            Carmen de Apicalá, en la Vereda Charcón Alto, constituida por
            profesionales e interesados en la temática de protección y la
            búsqueda de alternativas viables, eficaces y eficientes para
            disminuir los impactos negativos generados en el medio ambiente.
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrapper>
  );
}

export default ContainerCard;
