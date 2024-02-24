import { Link } from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { MainTemplate } from "../templates/MainTemplate";
import React from "react";
import axios from "axios";

export const IndexPage = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    axios.get("/products.json").then((response) => {
      setProducts(response.data.products);
      setLoading(false);
    });
  }, [searchQuery]);

  return (
    <MainTemplate>
      {loading ? (
        <>Loading...</>
      ) : (
        products.map((product, index) => (
          <Link key={index} to={`/product/${product.id}/`}>
            {product.title}
          </Link>
        ))
      )}
    </MainTemplate>
  );
};
