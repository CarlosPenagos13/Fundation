import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { ButtonApoyanos } from "../ButtonApoyanos/ButtonApoyanos";

import { FooterContainerFundation } from "./Styled";

const FooterContainer = ({ text, dscrp1, src, width, dscrp2 }) => (
	<>
		<FooterContainerFundation>
			<img src={src} width={width} />

			<h5>{text}</h5>

			<p>{dscrp1}</p>

			<p>{dscrp2}</p>
		</FooterContainerFundation>
	</>
);

const MetodosDeContacto = {
	text: "Contactanos: ",

	dscrp1: "313222667",

	dscrp2: "awenfundacion2019@gmail.com",
};

const Fundacion = {
	text: "Fundacion AWEN",

	dscrp1:
		"La Fundación Awen Colombia fue creada con el fin de gestionar y promover la recuperación, restauración y conservación ambiental mediante la sensibilización de las comunidades. Unamos fuerzas, se feliz y ayuda a la naturaleza.",

	src: "/images/awen oscar.png",

	width: "60px",
};

const Ubicacion = {
	text: "Proyectos ",

	dscrp1: "",
};

export const ItemFooter = () => (
	<Container>
		<Row>
			<Col>
				<FooterContainer {...MetodosDeContacto} />

				<ButtonApoyanos />
			</Col>

			<Col sm={4}>
				<FooterContainer {...Fundacion} />
			</Col>

			<Col>
				<FooterContainer {...Ubicacion} />
			</Col>
		</Row>
	</Container>
);
