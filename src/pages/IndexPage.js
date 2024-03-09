import { Link } from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { MainTemplate } from "../templates/MainTemplate";
import React from "react";
import axios from "axios";
import { API_URL } from "../api";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
`;

export const IndexPage = () => {
  const [products, setProducts] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  React.useEffect(() => {
    axios.get(API_URL + "/get_products/").then((response) => {
      setProducts(response.data.products);
    });
  }, [searchQuery]);

  const handleSendData = () => {
    axios
      .post(API_URL + "/new_product/", { title, price })
      .then((response) => {});
  };

  return (
    <MainTemplate>
      <StyledForm>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          placeholder="price"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button onClick={handleSendData}>Dodaj</button>
      </StyledForm>
    </MainTemplate>
  );
};
