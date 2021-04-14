import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import BtnsShare from "../../moleculas/ContactButtons/ContactButtons";

const ContactFundation = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link
						target="_blank"
						href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTgkfPxrpWjKxQvkVjfjFVpLbNqrJbNhQQtCKlLmJpcqPzXPhdhcDcfsCrfjQgFkfBxhJB"
					>
						awenfundacion2019@gmail.com
					</Nav.Link>
				</Nav>

				<Nav className="mr-auto">
					<Nav.Link>+57 350 2975942</Nav.Link>
				</Nav>

				<Nav className="mr-auto">
					<Nav.Link
						target="_blank"
						href="https://chat.whatsapp.com/lgl5qijnwly2vqmp1jbfik"
					>
						Unirse al grupo de WhatsApp
					</Nav.Link>
				</Nav>

				<BtnsShare />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default ContactFundation;
