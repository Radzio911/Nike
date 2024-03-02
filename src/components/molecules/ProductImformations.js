import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 25px;
    font-weight: 500;
  }
`;

const StyledColors = styled.div`
  display: flex;
  gap: 10px;
  width: 200px;
  justify-content: flex-start;
  button {
    min-width: 50px;
    width: 50px;
    height: 50px;
  }
`;

const StyledSize = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledSizeGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 5px;
  button {
    min-width: 70px;
  }
`;

export const ProductInformations = () => {
  const [selectedSize, setSelectedSize] = React.useState();
  const [selectedColor, setSelectedColor] = React.useState("white");
  const [sizes, setSizes] = React.useState([39, 40, 41, 42, 43, 44]);
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <h1>Nike Air Presto - {selectedColor.toUpperCase()}</h1>
      <h2>Buty męskie</h2>
      <h2>349 PLN</h2>
      <StyledColors>
        <Button onClick={() => setSelectedColor("white")} color={"white"} />
        <Button onClick={() => setSelectedColor("black")} color={"black"} />
        <Button onClick={() => setSelectedColor("blue")} color={"#1DAEFF"} />
      </StyledColors>
      <StyledSize>
        <span>Wybierz rozmiar</span>
        <StyledSizeGrid>
          {sizes.map((size) => (
            <Button
              onClick={() => setSelectedSize(size)}
              primary={selectedSize === size}
              key={size}
            >
              EU {size}
            </Button>
          ))}
        </StyledSizeGrid>
      </StyledSize>
      <Button
        onClick={() => {
          navigate(`/cart/?color=${selectedColor}&size=${selectedSize}`);
        }}
      >
        Dodaj do koszyka
      </Button>
      <Button primary={false}>
        Ulubione <FaRegHeart />
      </Button>
      <span>
        Buty Nike Air Presto o eleganckim fasonie wygodniejszym nawet niż Twoja
        ulubiona koszulka nadają stylowy i dynamiczny wygląd. Załóż je, a nigdy
        nie zechcesz ich zdjąć.
      </span>
    </StyledWrapper>
  );
};
