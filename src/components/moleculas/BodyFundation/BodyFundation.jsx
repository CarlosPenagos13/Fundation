import React from "react";

import { ContainerHome } from "./Styled";

import ContainerCard from "../../atomos/ContainerCard/ContainerCard";
import CardHome from "../../atomos/CardHome/CardHome";

function BodyFundation() {
  return (
    <>
      <ContainerHome>
        <ContainerCard />
        <CardHome />
      </ContainerHome>
    </>
  );
}

export default BodyFundation;
