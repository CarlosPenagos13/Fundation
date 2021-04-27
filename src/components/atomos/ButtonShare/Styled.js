import styled from "styled-components";

const lineHeight = "36px";
const MarginR = "8px";
const padding = "0 10px";
const display = "inline-block";
const borderRadius = "4px";
const backgroundWhatsapp = "#68ae00";
const backgroundFacebook = "#007bff";

export const ShareBtns = styled.a`
	background-color: ${backgroundWhatsapp};
	line-height: ${lineHeight};
	margin-right: ${MarginR};
	padding: ${padding};
	display: ${display};
	border-radius: ${borderRadius};
`;

export const ShareBtns__Reserva = styled.a`
	background-color: #000;
	line-height: ${lineHeight};
	margin-right: ${MarginR};
	padding: ${padding};
	display: ${display};
	border-radius: 50px;
	padding: 18px;

	:first-child {
		background-color: ${backgroundFacebook};
	}

	:nth-child(2) {
		background-color: ${backgroundWhatsapp};
	}

	img {
		width: 60px;
	}
`;
