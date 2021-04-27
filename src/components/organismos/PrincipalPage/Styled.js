import styled from "styled-components";

export const ContainerFundation = styled.div`
	min-height: calc(100vh - 132px - 146px);
	margin: 0 auto;
`;

export const HeaderFundation = styled.div`
	display: flex;
	width: 80%;
	margin: 0 auto;
	position: relative;
	bottom: 20px;

	z-index: 1;

	@media (max-width: 800px) {
		bottom: 10px;
		width: 100%;
	}
`;
