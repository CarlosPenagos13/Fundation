import React from "react";
import { NavDropdown } from "react-bootstrap";

import { ItemDropdown } from "../../atomos/ItemDropdown/ItemDropdown";

const Dropdown = () => {
  return (
    <NavDropdown title="Conócenos" id="basic-nav-dropdown">
      <ItemDropdown />
    </NavDropdown>
  );
};

export default Dropdown;
