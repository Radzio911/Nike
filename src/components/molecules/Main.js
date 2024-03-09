import React from "react";
import styled from "styled-components";
import Air1 from "../../assets/img1.png";

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  gap: 10px;
  padding: 10px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    img {
      height: 200px;
    }
  }
  img {
    flex: 1;
  }
`;

const StyledImage = styled.img``;

export const ImageSlider = () => {
  return (
    <StyledWrapper>
      <StyledImage src={.....} alt={""} />
      <StyledImage src={.....} alt={""} />
      <StyledImage src={.....} alt={""} />
      <span>Najnowsza kolorystyka Nike Air Presto jest już dostępna. </span>
      <div>      
      <StyledImage src={.....} alt={""} />
      <StyledImage src={.....} alt={""} />
      <StyledImage src={.....} alt={""} />
      </div>
       </StyledWrapper>
  );
};




