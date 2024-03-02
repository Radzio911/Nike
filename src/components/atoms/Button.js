import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ primary, color }) =>
    color ? color : primary ? "black" : "white"};
  color: ${({ primary }) => (primary ? "white" : "black")};
  font-size: 20px;
  padding: 10px;
  min-width: 300px;
  border: 2px solid black;
  border-radius: 1000000px;
  cursor: pointer;
`;

export const Button = ({ children, primary = true, color, ...props }) => {
  return (
    <StyledButton color={color} primary={primary} {...props}>
      {children}
    </StyledButton>
  );
};
