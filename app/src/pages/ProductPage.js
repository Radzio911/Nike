import { useParams } from "react-router-dom";
import { MainTemplate } from "../templates/MainTemplate";
import styled from "styled-components";
import { ImageSlider } from "../components/molecules/ImageSlider";
import { ProductInformations } from "../components/molecules/ProductImformations";
import React from "react";
import axios from "axios";
import { API_URL } from "../api";

const StyledWrapper = styled.article`
	display: flex;
	flex-direction: row;
	gap: 30px;
	padding: 30px;
	justify-content: center;
`;

export const ProductPage = () => {
	const { id } = useParams();
	const [productData, setProductData] = React.useState({});

	React.useEffect(() => {
		axios.get(API_URL + "/products/get?id=" + id).then((data) => {
			setProductData(data.data);
		});
	}, []);

	return (
		<MainTemplate>
			<StyledWrapper>
				<ImageSlider productId={id} />
				<ProductInformations productData={productData} />
			</StyledWrapper>
		</MainTemplate>
	);
};
