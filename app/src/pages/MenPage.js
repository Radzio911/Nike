import { MainTemplate } from "../templates/MainTemplate";
import React from "react";

export const MenPage = () => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		// fetcher.get("/products/by_category?category=Męczynźni").then((data) => {
		// 	setProducts(data.data.products);
		// });
	}, []);

	return (
		<MainTemplate title={"Men"}>
			{products.map((product) => (
				<></>
			))}
		</MainTemplate>
	);
};
