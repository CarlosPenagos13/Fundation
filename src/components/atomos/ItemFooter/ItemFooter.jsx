import React from "react";

import { FooterFoundation__contact } from "./Styled";

const FooterContainer = ({ text, dscrp1, src, width }) => (
	<>
		<FooterFoundation__contact>
			<p>{text}</p>
			<p>{dscrp1}</p>
			<img src={src} width={width} />
		</FooterFoundation__contact>
	</>
);

const MetodosDeContacto = {
	text: "Llamanos: ",

	dscrp1: "313222667",
};

const Fundacion = {
	text: "Fundacion AWEN",

	dscrp1: "",

	src: "/images/awen oscar.png",

	width: "60px",
};

const Ubicacion = {
	text: "Proyectos ",

	dscrp1: "",
};

export const ItemFooter = () => (
	<>
		<FooterContainer {...MetodosDeContacto} />
		<FooterContainer {...Fundacion} />
		<FooterContainer {...Ubicacion} />
	</>
);
