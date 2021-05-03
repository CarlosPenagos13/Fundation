import ContactFundation from "../src/components/organismos/Contact/Contact";
import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import PrincipalPageFundation from "../src/components/organismos/PrincipalPage/PrincipalPage";
import FooterPage from "../src/components/templates/footer/footer";

const Home = () => {
  return (
    <>
      <ContactFundation />

      <NavbarFundation />

      <PrincipalPageFundation />

      <FooterPage />
    </>
  );
};

export default Home;
