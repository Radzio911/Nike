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
    text-decoration: none;
  }
  .sublink {
    font-size: 18px;
    font-weight: 300;
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
          <Link to={"#"}>Znajdź Sklep</Link>
          <Link className="sublink" to={"#"}>
            PRZEŚLIJ OPINIE
          </Link>
          <Link className="sublink" to={"#"}>
            KODY PODARUNKOWE
          </Link>
        </StyledColumn>
        <StyledColumn>
          <Link to={"#"}>POMOC</Link>
          <Link className="sublink" to={"#"}>
            Status zamówienia
          </Link>
          <Link className="sublink" to={"#"}>
            Wysyłka i Dostawa
          </Link>
          <Link className="sublink" to={"#"}>
            Kontakt
          </Link>
        </StyledColumn>
        <StyledColumn>
          <Link to={"#"}>O NIKE</Link>
          <Link className="sublink" to={"#"}>
            Aktualoności
          </Link>
          <Link className="sublink" to={"#"}>
            Kariera
          </Link>
        </StyledColumn>
      </StyledLeft>
      <StyledRight>
        <FaInstagram />
        <FaVideo />
      </StyledRight>
    </StyledFooter>
  );
};
