import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaV, FaVideo } from "react-icons/fa6";

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: white;
    font-size: 24px;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  align-items: center;
  justify-content: flex-start;
`;

const StyledRight = styled.div`
  display: flex;
  gap: 50px;
  font-size: 50px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLeft>
        <StyledColumn>
          <Link to={"#"}>.....</Link>
          <Link to={"#"}>.....</Link>
          <Link to={"#"}>.....</Link>
        </StyledColumn>
        <StyledColumn>
          <Link to={"#"}>.....</Link>
          <Link to={"#"}>.....</Link>
          <Link to={"#"}>.....</Link>
        </StyledColumn>
        <StyledColumn>
          <Link to={"#"}>.....</Link>
          <Link to={"#"}>.....</Link>
          <Link to={"#"}>.....</Link>
        </StyledColumn>
      </StyledLeft>
      <StyledRight>
        <FaInstagram />
        <FaVideo />
      </StyledRight>
    </StyledFooter>
  );
};
