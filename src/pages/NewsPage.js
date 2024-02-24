import { Link } from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { MainTemplate } from "../templates/MainTemplate";
import React from "react";
import { useTheme } from "styled-components";
import { OwnThemeContext } from "../App";

export const NewsPage = () => {
  const [theme, setTheme] = React.useContext(OwnThemeContext);
  return (
    <MainTemplate>
      <button
        onClick={() => {
          setTheme({
            mainColor: "green",
          });
        }}
      >
        Change color
      </button>
    </MainTemplate>
  );
};
