import React from "react";
import { ShareBtns, ShareBtns__Reserva } from "./Styled";

const ButtonsContainer = ({ target, href, alt, src }) => (
  <ShareBtns target={target} href={href}>
    <img alt={alt} src={src} />
  </ShareBtns>
);

const ButtonsContainer__Reserva = ({ target, href, alt, src }) => (
  <ShareBtns__Reserva target={target} href={href}>
    <img alt={alt} src={src} />
  </ShareBtns__Reserva>
);

const facebook = {
  target: "_blank",

  href: "https://www.facebook.com/fundacionAwenColombia/",

  alt: "facebook_share",

  src: "images/facebook.svg",
};

const whatsapp = {
  target: "_blank",

  href: "https://chat.whatsapp.com/lgl5qijnwly2vqmp1jbfik",

  alt: "whatsapp_share",

  src: "images/whatsapp.svg",
};

const email = {
  target: "_blank",

  href: "mailto:awenfundacion2019@gmail.com",

  alt: "email_share",

  src: "images/email.svg",
};

export const ItemButton = () => (
  <>
    <ButtonsContainer {...facebook} />
    <ButtonsContainer {...whatsapp} />
    <ButtonsContainer {...email} />
  </>
);

export const ItemButton__Reserva = () => (
  <>
    <ButtonsContainer__Reserva {...facebook} />
    <ButtonsContainer__Reserva {...whatsapp} />
    <ButtonsContainer__Reserva {...email} />
  </>
);
