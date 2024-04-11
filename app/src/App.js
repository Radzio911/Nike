import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { ProductPage } from "./pages/ProductPage";
import { Page404 } from "./pages/Page404";
import { GlobalStyle } from "./theme/globalStyle";
import { NewsPage } from "./pages/NewsPage";
import { ThemeContext } from "styled-components";
import { SearchPage } from "./pages/SearchPage";
import { CreateProductPage } from "./pages/CreateProductPage";
import { ROUTES } from "./routes";

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
							{Object.values(ROUTES).map((route) => (
								<Route
									key={route.path}
									path={route.path}
									element={route.element}
								/>
							))}
						</Routes>
					</BrowserRouter>
				</ThemeContext.Provider>
			</OwnThemeContext.Provider>
		</div>
	);
}

export default App;
