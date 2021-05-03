import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { BtnsShare } from "../../moleculas/ContactButtons/ContactButtons";
import { Zindex } from "../Navbar/Styled";

const ContactFundation = () => {
  return (
    <Zindex>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link target="_blank" href="mailto:awenfundacion2019@gmail.com">
              awenfundacion2019@gmail.com
            </Nav.Link>
          </Nav>

          <Nav className="mr-auto">
            <Nav.Link>+57 350 2975942</Nav.Link>
          </Nav>

          <Nav className="mr-auto">
            <Nav.Link
              target="_blank"
              href="https://chat.whatsapp.com/lgl5qijnwly2vqmp1jbfik"
            >
              Unirse al grupo de WhatsApp
            </Nav.Link>
          </Nav>

          <BtnsShare />
        </Navbar.Collapse>
      </Navbar>
    </Zindex>
  );
};

export default ContactFundation;
