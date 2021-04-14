import React from "react";

import ContactFundation from "../src/components/organismos/Contact/Contact";
import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import PrincipalPage__Fundation from "../src/components/organismos/PrincipalPage/PrincipalPage";
import FooterPage from "../src/components/templates/footer/footer";

const Home = () => {
	return (
		<>
			<ContactFundation />
			<NavbarFundation />
			<PrincipalPage__Fundation />
			<FooterPage />
		</>
	);
};

export default Home;
