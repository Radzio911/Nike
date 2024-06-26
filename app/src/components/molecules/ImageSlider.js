import React from "react";
import styled from "styled-components";
import { API_URL } from "../../api";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 600px;
	gap: 10px;
	padding: 10px;
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex: 1;
		img {
			height: calc(50% - 10px);
		}
	}
	img {
		flex: 1;
	}
`;

const StyledImage = styled.img``;

export const ImageSlider = ({ productId }) => {
	return (
		<StyledWrapper>
			<StyledImage src={API_URL + "/products/image?id=" + productId} alt={""} />
		</StyledWrapper>
	);
};
