import React from "react";
import { Navbar } from "react-bootstrap";

import { Brand } from "../../atomos/Brand/Brand";
import { Collapse } from "../../moleculas/Collapse/Collapse";

const NavbarFundation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Brand />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Collapse />
    </Navbar>
  );
};

export default NavbarFundation;
