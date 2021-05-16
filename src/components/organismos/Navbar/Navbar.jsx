import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { Brand } from "../../atomos/Brand/Brand";
import { Collapse } from "../../moleculas/Collapse/Collapse";

import { Zindex } from "./Styled";

const NavbarFundation = () => {
  return (
    <Zindex>
      <Navbar bg="light" expand="lg">
        <Brand />

        <Nav.Link className="NameFund" href="/">
          Fundacion AWEN
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Collapse />
      </Navbar>
    </Zindex>
  );
};

export default NavbarFundation;
