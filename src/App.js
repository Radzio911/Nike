import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { ProductPage } from "./pages/ProductPage";
import { Page404 } from "./pages/Page404";
import { GlobalStyle } from "./theme/globalStyle";
import { NewsPage } from "./pages/NewsPage";
import { ThemeContext } from "styled-components";

export const LanguageContext = React.createContext("pl");

export const OwnThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState({
    mainColor: "black",
  });
  return (
    <div>
      <OwnThemeContext.Provider value={[theme, setTheme]}>
        <ThemeContext.Provider value={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/news/" element={<NewsPage />} />
              <Route path="/product/:id/" element={<ProductPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </OwnThemeContext.Provider>
    </div>
  );
}

export default App;
