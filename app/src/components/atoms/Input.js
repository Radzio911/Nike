import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	border: none;
	background-color: #cccaca;
	padding: 12px;
	width: 200px;
	border-radius: 10000px;
	text-align: center;
	outline: none;
`;

export const Input = ({
	placeHolder,
	value = "",
	setValue = () => {},
	...props
}) => {
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<StyledInput
			{...props}
			value={value}
			placeholder={placeHolder}
			onChange={handleChange}
		/>
	);
};
