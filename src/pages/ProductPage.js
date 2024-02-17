import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams();
  return <>product o id: {id}</>;
};
