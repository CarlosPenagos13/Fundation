import React from "react";

import { Card } from "react-bootstrap";

import { WrapperQuienesSomos } from "./Styled";

const ContainerQuienesSomos = () => {
	return (
		<>
			<WrapperQuienesSomos>
				<Card className="text-center">
					<Card.Header>¿Quienes Somos?</Card.Header>
					<Card.Body>
						<Card.Text>
							Somos una fundación de carácter ambiental sin ánimo de lucro y con
							figura jurídica ante Cámara de Comercio del Sur y Oriente del
							Tolima; nace en el año 2019 en la Vereda San Cristóbal del
							municipio de Melgar Tolima y empieza un punto de trabajo en el
							municipio de Carmen de Apicalá, en la Vereda Charcón Alto,
							constituida por profesionales e interesados en la temática de
							protección y la búsqueda de alternativas viables, eficaces y
							eficientes para disminuir los impactos negativos generados en el
							medio ambiente. También apoyamos en el manejo ambiental a través
							de la gestión de sus residuos, capacitaciones y otras
							disposiciones a consideración en temas ambientales a empresas que
							desean ser fuente de cambio
						</Card.Text>
					</Card.Body>
				</Card>
			</WrapperQuienesSomos>
		</>
	);
};

export default ContainerQuienesSomos;
