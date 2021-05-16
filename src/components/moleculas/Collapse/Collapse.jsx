import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import Dropdown from "../../moleculas/Dropdown/Dropdown";

export const Collapse = () => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Dropdown />

        <Nav.Link href="/Proyectos">Proyectos</Nav.Link>

        <Nav.Link href="/reserva">Reserva</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};
