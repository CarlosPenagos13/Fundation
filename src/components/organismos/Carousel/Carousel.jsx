import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { CarFundationContainer, CarouselFundation__Container } from "./Styled";

const ImageContainer = ({ width, height, className, src, alt }) => {
  return (
    <img
      width={width}
      height={height}
      className={className}
      src={src}
      alt={alt}
    />
  );
};

const IMG1 = {
  width: "100%",

  className: "d-block",

  src: "/images/Image1.jpg",

  alt: "First Slide",
};

const IMG2 = {
  width: "100%",

  className: "d-block",

  src: "/images/Image2.jpg",

  alt: "Second Slide",
};

const IMG3 = {
  width: "100%",

  className: "d-block",

  src: "/images/Image3.PNG",

  alt: "Third Slide",
};

const CarouselFundation = () => {
  return (
    <CarouselFundation__Container>
      <CarFundationContainer>
        <Carousel>
          <Carousel.Item>
            <ImageContainer {...IMG1} />
          </Carousel.Item>

          <Carousel.Item>
            <ImageContainer {...IMG2} />
          </Carousel.Item>

          <Carousel.Item>
            <ImageContainer {...IMG3} />
          </Carousel.Item>
        </Carousel>
      </CarFundationContainer>
    </CarouselFundation__Container>
  );
};

export default CarouselFundation;
