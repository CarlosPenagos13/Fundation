import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { CarFundationContainer, CarouselFundation__Container } from "./Styled";

const CarouselFundation = () => {
	return (
		<CarouselFundation__Container>
			<CarFundationContainer>
				<Carousel>
					<Carousel.Item>
						<img
							width="90%"
							className="d-block"
							src="/images/Image1.jpg"
							alt="First slide"
						/>

						<Carousel.Caption>
							<h3>First slide label</h3>

							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block"
							width="90%"
							src="/images/Image2.jpg"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block"
							width="90%"
							src="/images/Image3.PNG/"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</CarFundationContainer>
		</CarouselFundation__Container>
	);
};

export default CarouselFundation;
