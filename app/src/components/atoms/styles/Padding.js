import styled from "styled-components";

export const StyledPadding = styled.div`
	padding: ${({ $value }) => $value};
`;

export const Padding = ({ children, value = 20 + "px" }) => {
	return <StyledPadding $value={value}>{children}</StyledPadding>;
};
