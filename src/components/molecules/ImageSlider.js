import React from "react";
import styled from "styled-components";
import image1 from "../../assets/img1.png";

const StyledWrapper = styled.div`
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
      height: calc(50% - 10px);
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
      <StyledImage src={image1} alt={""} />
      <div>
        <StyledImage src={image1} alt={""} />
        <StyledImage src={image1} alt={""} />
      </div>
    </StyledWrapper>
  );
};
