import React from "react";
import { NavDropdown } from "react-bootstrap";

const MiAndVi = ({ id, href, text }) => (
  <NavDropdown.Item id={id} href={href}>
    {text}
  </NavDropdown.Item>
);

const Mision = {
  id: "#Mision",
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
