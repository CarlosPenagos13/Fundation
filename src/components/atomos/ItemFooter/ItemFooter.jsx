import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { ButtonApoyanos } from "../ButtonApoyanos/ButtonApoyanos";

import { FooterContainerFundation } from "./Styled";

const FooterContainer = ({
	text,
	dscrp1,
	src,
	width,
	dscrp2,
	dscrp3,
	dscrp4,
	dscrp5,
	dscrp6,
}) => (
	<>
		<FooterContainerFundation>
			<h5>{text}</h5>

			<img src={src} width={width} />

			<p>{dscrp1}</p>

			<p>{dscrp2}</p>

			<p>{dscrp3}</p>

			<p>{dscrp4}</p>

			<p>{dscrp5}</p>

			<p>{dscrp6}</p>
		</FooterContainerFundation>
	</>
);

const MetodosDeContacto = {
	text: "Contactanos: ",

	dscrp1: "Ing. Ambiental Daniela Porras Díaz",

	dscrp2: "Directora Fundación",

	dscrp3: "+57 350 2975942 - +57 314 2092425",

	dscrp4: "Diana Marcela Porras Díaz",

	dscrp5: "Asesora técnica en producción agrícola",

	dscrp6: "+57 311 4608881",
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
			</Col>

			<Col sm={4}>
				<FooterContainer {...Ubicacion} />
			</Col>

			<Col>
				<FooterContainer {...Fundacion} />

				<ButtonApoyanos />
			</Col>
		</Row>
	</Container>
);
