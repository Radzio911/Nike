import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { ProductPage } from "./pages/ProductPage";
import { Page404 } from "./pages/Page404";
import { GlobalStyle } from "./theme/globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/product/:id/" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
