import React from "react";
import { Footer } from "../components/molecules/Footer";
import { Navbar } from "../components/molecules/Navbar";
import styled from "styled-components";

const StyledContent = styled.main`
	min-height: 1200px;
`;

export const MainTemplate = ({ children, title }) => {
	React.useEffect(() => {
		document.title = `Nike - ${title}`;
	}, [title]);

	return (
		<>
			<Navbar />
			<StyledContent>{children}</StyledContent>
			<Footer />
		</>
	);
};
