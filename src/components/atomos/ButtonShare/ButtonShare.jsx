import React from "react";
import { ShareBtns } from "./Styled";

const ButtonsContainer = ({ target, href, alt, src }) => (
	<ShareBtns target={target} href={href}>
		<img alt={alt} src={src} />
	</ShareBtns>
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

	href:
		"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTgkfPxrpWjKxQvkVjfjFVpLbNqrJbNhQQtCKlLmJpcqPzXPhdhcDcfsCrfjQgFkfBxhJB",

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
