import styled from "styled-components";

export const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${({ $column }) => ($column ? "column" : "row")};
	align-items: ${({ $alignItems }) => $alignItems};
`;

export const Flex = ({ children, column = false, alignItems = "center" }) => {
	return (
		<StyledFlex $column={column} $alignItems={alignItems}>
			{children}
		</StyledFlex>
	);
};
