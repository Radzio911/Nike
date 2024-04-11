import { API_URL } from "../api";
import { Flex } from "../components/atoms/styles/Flex";
import { Padding } from "../components/atoms/styles/Padding";
import { MainTemplate } from "../templates/MainTemplate";
import React from "react";

export const CreateProductPage = () => {
	return (
		<MainTemplate>
			<Padding value={"30px"}>
				<form
					column
					alignItems="streach"
					action={API_URL + "/products/new_product"}
					method="POST"
					encType="multipart/form-data"
				>
					<input name="title" placeholder="Title" />
					<input name="price" placeholder="Price" />
					<textarea name="description" placeholder="Description"></textarea>
					<input name="image" type="file" />
					<button>ADD</button>
				</form>
			</Padding>
		</MainTemplate>
	);
};
