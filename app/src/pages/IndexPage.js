import { Link } from "react-router-dom";
import { MainTemplate } from "../templates/MainTemplate";
import React from "react";
import styled from "styled-components";

const StyledSquare = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
`;

const Draggable = ({ children }) => {
	const positionRef = React.useRef({ x: 0, y: 0 });
	const [layer, setLayer] = React.useState({ x: 0, y: 0 });
	const [isMouseDown, setIsMouseDown] = React.useState(false);

	const squareRef = React.useRef();

	const handleMouseDown = (event) => {
		setLayer({
			x: event.nativeEvent.layerX,
			y: event.nativeEvent.layerY,
		});
		setIsMouseDown(true);
	};

	const handleMouseUp = () => {
		setIsMouseDown(false);
	};

	const handleMouseMove = ({ pageX, pageY }) => {
		console.log(pageX, pageY, isMouseDown);
		if (isMouseDown) {
			positionRef.current.x = pageX - layer.x;
			positionRef.current.y = pageY - layer.y;
			squareRef.current.style.top = positionRef.current.y + "px";
			squareRef.current.style.left = positionRef.current.x + "px";
		}
	};

	React.useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isMouseDown]);

	return (
		<StyledSquare ref={squareRef} onMouseDown={handleMouseDown}>
			{children}
		</StyledSquare>
	);
};

export const IndexPage = () => {
	return (
		<MainTemplate>
			<Draggable>
				<h1>Hello</h1>
			</Draggable>
		</MainTemplate>
	);
};
