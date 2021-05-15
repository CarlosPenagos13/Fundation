import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import PrincipalPageFundation from "../src/components/organismos/PrincipalPage/PrincipalPage";
import FooterPage from "../src/components/templates/footer/footer";

import { Fondo } from "../src/components/Styled";

const Home = () => {
  return (
    <Fondo>
      <NavbarFundation />

      <PrincipalPageFundation />

      <FooterPage />
    </Fondo>
  );
};

export default Home;
