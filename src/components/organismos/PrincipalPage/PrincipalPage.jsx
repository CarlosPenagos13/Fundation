import React from "react";
import CarouselHome from "../../moleculas/CarouselHome/CarouselHome";
import BodyFundation from "../../moleculas/BodyFundation/BodyFundation";

import { ContainerFundation, HeaderFundation } from "./Styled";

const PrincipalPageFundation = () => {
  return (
    <ContainerFundation>
      <HeaderFundation>
        <CarouselHome />
      </HeaderFundation>

      <BodyFundation />
    </ContainerFundation>
  );
};

export default PrincipalPageFundation;
