import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Dropdown from "../../moleculas/Dropdown/Dropdown";
import { ButtonApoyanos } from "../../atomos/Button/ButtonApoyanos";

export const Collapse = () => {
	return (
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="/">Fundacion AWEN</Nav.Link>

				<Dropdown />

				<Nav.Link href="/Proyectos">Proyectos</Nav.Link>

				<Nav.Link href="/reserva">Reserva</Nav.Link>
			</Nav>

			<Nav>
				<ButtonApoyanos />
			</Nav>
		</Navbar.Collapse>
	);
};
