import React from "react";

import CarouselFundation from "../src/components/organismos/Carousel/Carousel";
import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import FooterPage from "../src/components/templates/footer/footer";

const Conocenos = () => {
  return (
    <div>
      <NavbarFundation />

      <CarouselFundation />

      <div id="#Mision">Mision</div>

      <div id="#Vision">Vision</div>

      <FooterPage />
    </div>
  );
};

export default Conocenos;
