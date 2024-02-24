import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  background-color: #cccaca;
  padding: 10px;
  border-radius: 10000px;
  text-align: center;
  outline: none;
`;

export const Input = ({ placeHolder, value = "", setValue = () => {} }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledInput
      value={value}
      placeHolder={placeHolder}
      onChange={handleChange}
    />
  );
};
