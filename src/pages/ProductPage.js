import { useParams } from "react-router-dom";
import { MainTemplate } from "../templates/MainTemplate";
import styled from "styled-components";
import { ImageSlider } from "../components/molecules/ImageSlider";
import { ProductInformations } from "../components/molecules/ProductImformations";

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 30px;
  justify-content: center;
`;

export const ProductPage = () => {
  const { id } = useParams();
  return (
    <MainTemplate>
      <StyledWrapper>
        <ImageSlider />
        <ProductInformations />
      </StyledWrapper>
    </MainTemplate>
  );
};
