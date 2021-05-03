import React from "react";

import { ListGroup } from "react-bootstrap";

import ContactFundation from "../src/components/organismos/Contact/Contact";
import NavbarFundation from "../src/components/organismos/Navbar/Navbar";
import FooterPage from "../src/components/templates/footer/footer";

import { createClient } from "contentful";
import Deck from "../src/components/organismos/Deck/Deck";
import { DeckCont, WrapDeck } from "../src/components/organismos/Deck/Styled";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "data",
  });

  return {
    props: {
      datas: res.items,
    },
  };
}

const Proyectos = ({ datas }) => {
  return (
    <>
      <ContactFundation />

      <NavbarFundation />
      <WrapDeck>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>

          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>

          <ListGroup.Item>Morbi leo risus</ListGroup.Item>

          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>

        <DeckCont>
          {datas.map((data) => (
            <Deck key={data.sys.id} data={data} />
          ))}
        </DeckCont>
      </WrapDeck>

      <FooterPage />
    </>
  );
};

export default Proyectos;
