import React from "react";

import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="images/fondo1.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="images/fondo2.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselHome;
