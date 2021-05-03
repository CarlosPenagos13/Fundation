import React from "react";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";

import { ContainerMisionAndVision, ContainerEstrategias } from "./Styled";

const MisionAndVision = ({ text, Autor, title }) => (
  <ContainerMisionAndVision>
    <Card className="text-center">
      <Card.Header>{Autor}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  </ContainerMisionAndVision>
);

const Mision = {
  Autor: "Fundadora y presidenta: ing ambiental Daniela Porras ",

  title: "Mision",

  text:
    " La Fundación AWEN Colombia es una entidad sin ánimo de lucro que busca gestionar y promover la recuperación, restauración y conservación ambiental, mediante el diseño de modelos de intervención social, buscando la sensibilización de las comunidades de la región del sumapaz y del alto magdalena, basados es una cultura de valores y principios, para el mejoramiento de la calidad de vida de la población por medio de la conservación de los recursos naturales. ",
};

const Vision = {
  Autor: "Fundadora y presidenta: ing ambiental Daniela Porras ",

  title: "Vision",

  text:
    " La Fundación AWEN Colombia será reconocida a nivel nacional por su gestión en pro de la conservación ambiental y trabajo con las comunidades fortaleciendo competencias y habilidades humanas, sociales y productivas que contribuyan a un desarrollo sostenible de la región,  generando credibilidad sustentada en la transparencia, solidaridad y efectividad en la ejecución de los proyectos y actividades.    ",
};

const Estrategias = () => (
  <ContainerEstrategias>
    <Container>
      <Row>
        <Col sm={6}>
          <MisionAndVision {...Mision} />
        </Col>
        <Col sm={6}>
          <MisionAndVision {...Vision} />
        </Col>
      </Row>
    </Container>
  </ContainerEstrategias>
);

export default Estrategias;
