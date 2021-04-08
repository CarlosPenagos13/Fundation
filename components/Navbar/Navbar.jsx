import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link to="/">
            <a>Inicio</a>
          </Link>

          <Link to="/about">
            <a>Fundación</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default Navbar;
