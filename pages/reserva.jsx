import React from "react";

import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import FooterPage from "../src/components/templates/footer/footer";
import ContainerReserva from "../src/components/organismos/ContainerReserva/ContainerReserva";
import { ContainerDeck } from "../src/components/organismos/ContainerReserva/Styled";
import Banner from "../src/components/organismos/Banner/Banner";

const reserva = () => {
  return (
    <>
      <NavbarFundation />

      <Banner />

      <ContainerDeck>
        <ContainerReserva />
      </ContainerDeck>

      <FooterPage />
    </>
  );
};

export default reserva;
