import styled from "styled-components";

export const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${({ $column }) => ($column ? "column" : "row")};
	align-items: ${({ $alignItems }) => $alignItems};
	justify-content: ${({ $justifyContent }) => $justifyContent};
`;

export const Flex = ({
	children,
	column = false,
	alignItems = "center",
	justifyContent = "center",
}) => {
	return (
		<StyledFlex
			$column={column}
			$alignItems={alignItems}
			$justifyContent={justifyContent}
		>
			{children}
		</StyledFlex>
	);
};
