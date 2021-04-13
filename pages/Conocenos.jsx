import React from "react";

import CarouselFundation from "../src/components/organismos/Carousel/Carousel";
import NavbarFundation from "../src/components/organismos/Navbar/Navbar";

const Mision = () => {
  return (
    <div>
      <NavbarFundation />
      <div className="navbar__NavbarFundation">
        <CarouselFundation></CarouselFundation>
      </div>
    </div>
  );
};

export default Mision;
