import React from "react";

import CarouselFundation from "../src/components/organismos/Carousel/Carousel";
import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import Estrategias from "../src/components/moleculas/Estrategias/Estrategias";
import TableEstrategias from "../src/components/moleculas/TableEstrategias/TableEstrategias";
import FooterPage from "../src/components/templates/footer/footer";

import { ContainerFundation } from "../src/components/organismos/PrincipalPage/Styled";

const Conocenos = () => {
  return (
    <ContainerFundation>
      <NavbarFundation />

      <CarouselFundation />

      <Estrategias />

      <TableEstrategias />

      <FooterPage />
    </ContainerFundation>
  );
};

export default Conocenos;
