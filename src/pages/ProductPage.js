import { useParams } from "react-router-dom";
import { MainTemplate } from "../templates/MainTemplate";

export const ProductPage = () => {
  const { id } = useParams();
  return <MainTemplate></MainTemplate>;
};
