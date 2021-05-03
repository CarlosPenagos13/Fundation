import React from "react";

import { ContainerReservation } from "./Styled";
import { BtnsShare__Reserva } from "../../moleculas/ContactButtons/ContactButtons";
import ContainerQuienesSomos from "../../moleculas/QuienesSomos/QuienesSomos";

const ContainerReserva = () => {
  return (
    <>
      <ContainerReservation>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509229.85040294676!2d-74.76176777581361!3d4.343697257377179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3edbce6a00551f%3A0xa6898e5fffed5775!2sCarmen%20de%20Apical%C3%A1%2C%20Tolima!5e0!3m2!1ses!2sco!4v1618599717549!5m2!1ses!2sco"
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <ContainerQuienesSomos />
        <BtnsShare__Reserva />
      </ContainerReservation>
    </>
  );
};

export default ContainerReserva;
