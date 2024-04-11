import { Link, useSearchParams } from "react-router-dom";
import { MainTemplate } from "../templates/MainTemplate";
import React from "react";
import axios from "axios";
import { API_URL } from "../api";
import styled from "styled-components";
import { Product } from "../components/molecules/Product";

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	gap: 30px;
`;

const StyledGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
`;

export const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		axios
			.get(API_URL + `/products/search?query=${searchParams.get("query")}`)
			.then((data) => {
				setProducts(data.data.products);
			});
	}, [searchParams]);

	return (
		<MainTemplate>
			<StyledColumn>
				<h1>Results for query '{searchParams.get("query")}'</h1>
				<StyledGrid>
					{products.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</StyledGrid>
			</StyledColumn>
		</MainTemplate>
	);
};
