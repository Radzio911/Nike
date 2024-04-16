import axios from "axios";
import { API_URL, FETCH } from "../api";
import { Padding } from "../components/atoms/styles/Padding";
import { MainTemplate } from "../templates/MainTemplate";
import React from "react";

export const CreateProductPage = () => {
	const imageInputRef = React.useRef();
	const handleSubmit = (event) => {
		event.preventDefault();

		FETCH("/products/new_product", {
			title: "Title",
			price: "200",
			image: imageInputRef.current.files[0],
		}).then((data) => {
			console.log(data.data);
		});
	};

	return (
		<MainTemplate>
			<Padding value={"30px"}>
				<form onSubmit={handleSubmit}>
					<input name="title" placeholder="Title" />
					<input name="price" placeholder="Price" />
					<textarea name="description" placeholder="Description"></textarea>
					<input ref={imageInputRef} name="image" type="file" />
					<button>ADD</button>
				</form>
			</Padding>
		</MainTemplate>
	);
};
