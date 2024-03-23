import React from "react";
import styled from "styled-components";
import NikeIcon from "../../assets/nike-icon.png";
import { Link } from "react-router-dom";
import { Input } from "../atoms/Input";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const StyledNav = styled.nav`
  background-color: #d7d7d7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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
  return (
    <StyledNav>
      <StyledNikeIcon src={NikeIcon} alt="nike icon" />
      <StyledLinks>
        <Link to={"/news/"}>Nowości</Link>
        <Link to={"#"}>Mężczyzni</Link>
        <Link to={"#"}>Kobiety</Link>
        <Link to={"#"}>Dzieci</Link>
      </StyledLinks>
      <StyledRightSide>
        <Input
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
