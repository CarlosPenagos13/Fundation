import React from "react";

import ContactFundation from "../src/components/organismos/Contact/Contact";
import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import FooterPage from "../src/components/templates/footer/footer";

const Home = () => {
	return (
		<div>
			<ContactFundation />
			<NavbarFundation />
			<FooterPage />
		</div>
	);
};

export default Home;
