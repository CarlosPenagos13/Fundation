import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { Brand } from "../../atomos/Brand/Brand";
import { Collapse } from "../../moleculas/Collapse/Collapse";

import { Zindex } from "./Styled";

const NavbarFundation = () => {
	return (
		<Zindex>
			<Navbar bg="light" expand="lg">
				<Brand />
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Collapse />
			</Navbar>
		</Zindex>
	);
};

export default NavbarFundation;
