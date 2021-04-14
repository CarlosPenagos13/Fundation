import React from "react";
import { NavDropdown } from "react-bootstrap";

const MiAndVi = ({ href, text }) => (
	<NavDropdown.Item href={href}>{text}</NavDropdown.Item>
);

const Mision = {
	href: "/Conocenos",

	text: "Mision",
};

const Vision = {
	href: "/Conocenos",

	text: "Vision",
};

export const ItemDropdown = () => (
	<>
		<MiAndVi {...Mision} />

		<MiAndVi {...Vision} />
	</>
);
