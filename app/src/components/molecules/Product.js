import styled from "styled-components";
import { API, API_URL } from "../../api";

const StyledWrapper = styled.div`
	background-color: #eeeeee;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 20px;
	border-radius: 30px;
	justify-content: space-between;
	gap: 5px;
	span {
		font-size: 20px;
	}
	b {
		font-size: 30px;
	}
`;

const StyledImage = styled.img`
	border-radius: 10px;
`;

export const Product = ({ product }) => {
	return (
		<StyledWrapper>
			<StyledImage
				src={API("products", "image") + "?id=" + product.id}
				alt={product.title}
			/>
			<span>{product.title}</span>
			<b>{product.price} zł</b>
		</StyledWrapper>
	);
};
