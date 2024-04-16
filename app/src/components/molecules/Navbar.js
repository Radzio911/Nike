import React from "react";
import styled from "styled-components";
import NikeIcon from "../../assets/nike-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../atoms/Input";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { ROUTES } from "../../routes";

const StyledNav = styled.nav`
	transition: background-color 0.3s;
	background-color: ${({ $navOnTop }) => ($navOnTop ? "#eeeeee" : "#d7d7d7")};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	position: sticky;
	top: 0;
	width: 100%;
`;

const StyledNikeIcon = styled.img`
	width: 100px;
	height: 100px;
`;

const StyledLinks = styled.div`
	display: flex;
	gap: 20px;
	a {
		text-decoration: none;
		color: black;
		font-size: 20px;
	}
`;

const StyledRightSide = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const Navbar = () => {
	const [searchQuery, setSearchQuery] = React.useState("");
	const navigate = useNavigate();
	const navRef = React.useRef();
	const [navOnTop, setNavOnTop] = React.useState(true);

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			navigate(`/search/?query=${searchQuery}`);
		}
	};

	React.useEffect(() => {
		const onScroll = (event) => {
			setNavOnTop(window.scrollY === 0);
		};

		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<StyledNav ref={navRef} $navOnTop={navOnTop}>
			<StyledNikeIcon
				onClick={() => navigate("/")}
				src={NikeIcon}
				alt="nike icon"
			/>
			<StyledLinks>
				<Link to={ROUTES.news.link()}>Nowości</Link>
				<Link to={ROUTES.men.link()}>Mężczyzni</Link>
				<Link to={ROUTES.women.link()}>Kobiety</Link>
				<Link to={ROUTES.childs.link()}>Dzieci</Link>
			</StyledLinks>
			<StyledRightSide>
				<Input
					onKeyDown={handleKeyDown}
					value={searchQuery}
					setValue={setSearchQuery}
					placeHolder={"Wyszukaj"}
				/>
				<FiHeart />
				<FiShoppingCart />
			</StyledRightSide>
		</StyledNav>
	);
};
