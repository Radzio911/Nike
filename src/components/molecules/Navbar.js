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

export const Navbar = () => {
  return (
    <StyledNav>
      <StyledNikeIcon src={NikeIcon} alt="nike icon" />
      <StyledLinks>
        <Link to={"#"}>Nowości</Link>
        <Link to={"#"}>Męzcyzni</Link>
        <Link to={"#"}>Kobiety</Link>
        <Link to={"#"}>Dzieci</Link>
      </StyledLinks>
      <div>
        <Input placeHolder={"Wyszukaj"} />
        <div>
          <FiHeart />
          <FiShoppingCart />
        </div>
      </div>
    </StyledNav>
  );
};
