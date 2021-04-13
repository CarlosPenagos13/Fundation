import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Brand = () => {
  return (
    <Navbar.Brand href="/">
      <img src="/images/awen oscar.png" width="50px" />
    </Navbar.Brand>
  );
};
