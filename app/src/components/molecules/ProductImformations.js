import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 400px;
	h1 {
		font-size: 35px;
	}
	h2 {
		font-size: 25px;
		font-weight: 500;
	}
`;

const StyledColors = styled.div`
	display: flex;
	gap: 10px;
	width: 200px;
	justify-content: flex-start;
	button {
		min-width: 50px;
		width: 50px;
		height: 50px;
	}
`;

const StyledSize = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledSizeGrid = styled.div`
	display: grid;
	grid-template-columns: 33% 33% 33%;
	gap: 5px;
	button {
		min-width: 70px;
	}
`;

export const ProductInformations = ({ productData }) => {
	const [selectedSize, setSelectedSize] = React.useState();
	const [selectedColor, setSelectedColor] = React.useState(null);
	const navigate = useNavigate();
	return (
		<StyledWrapper>
			<h1>{productData.title}</h1>
			<h2>{productData.price} PLN</h2>

			<Button
				onClick={() => {
					navigate(`/cart/?color=${selectedColor}&size=${selectedSize}`);
				}}
			>
				Dodaj do koszyka
			</Button>
			<Button primary={false}>
				Ulubione <FaRegHeart />
			</Button>
			<span>{productData.description}</span>
		</StyledWrapper>
	);
};
