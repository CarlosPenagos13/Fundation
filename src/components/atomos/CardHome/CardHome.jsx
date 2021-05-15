import React from "react";

import { Card } from "react-bootstrap";

import { Wrapper, Wrapper1 } from "./Styled";

const CardTog = ({
  title,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
}) => (
  <Card>
    <Card.Body>
      <Card.Title> {title} </Card.Title>
      <Card.Text>{text}</Card.Text>
      <Card.Text>{text1}</Card.Text>
      <Card.Text>{text2}</Card.Text>
      <Card.Text>{text3}</Card.Text>
      <Card.Text>{text4}</Card.Text>
      <Card.Text>{text5}</Card.Text>
      <Card.Text>{text6}</Card.Text>
      <Card.Text>{text7}</Card.Text>
      <Card.Text>{text8}</Card.Text>
      <Card.Text>{text9}</Card.Text>
      <Card.Text>{text10}</Card.Text>
    </Card.Body>
  </Card>
);

const GestEmpre = {
  title: "GESTIÓN INTEGRAL DE RESIDUOS SÓLIDOS",

  text:
    "- Diagnóstico y documentación del programa o plan de gestión integral de residuos sólidos",

  text1:
    "- Trituración de material de poda, transporte, tratamiento, y disposición final ",

  text2:
    "- Sensibilización y capacitación sobre manejo de residuos y aprovechamiento de estos.",
};

const Asesoriasyconsultoria = {
  title: "ASESORÍAS Y CONSULTORIA",

  text: "- Departamento de Gestión Ambiental -DGA  ",

  text1: "- Diseño e implementación de Matriz legal ambientalrtas caseras ",

  text2:
    "- Diseño de Matriz de identificación y evaluación de aspectos e impactos ambientales  ",

  text3:
    "- Programa de entrenamiento y capacitaciones al personal sobre legislación ambiental y temática ambiental aplicable  ",

  text4:
    "- Instructivos acerca de prevención y manejo de impactos negativos sobre el medio ambiente  ",

  text5: "- Proyectos Ambientales Escolares (PRAES) ",

  text6: "-  Capacitación sobre huertas caseras ",

  text7: " Producción agroecológica",

  text8: "- Buenas prácticas agrícolas    ",
};

const Tramites = {
  title: "TRAMITES AMBIENTALES",

  text1: "Permisos de poda",

  text2: "Permisos de tala",

  text3: "Permiso de Vertimientos",

  text4: "Registro de generadores de residuos peligrosos – RESPEL,",

  text5: "Informe de cumplimiento Ambiental – ICA",

  text6: "DISEÑO E IMPLEMENTACION DE PLANES Y PROGRAMAS",

  text7: "Plan uso eficiente y ahorro de agua y energía,",

  text8: "Plan de Gestión Integral de Residuos Sólidos y Peligrosos - PGIRS",

  text9:
    "Plan de Gestión Integral de Residuos Sólidos Hospitalarios y Similares – PGIRHS",

  text10: "Plan de Contingencia -PDC",
};

const CardHome = () => (
  <>
    <Wrapper>
      <CardTog {...GestEmpre} />
    </Wrapper>

    <Wrapper1>
      <CardTog {...Asesoriasyconsultoria} />
    </Wrapper1>

    <Wrapper>
      <CardTog {...Tramites} />
    </Wrapper>
  </>
);

export default CardHome;
