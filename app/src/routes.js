import { CreateProductPage } from "./pages/CreateProductPage";
import { IndexPage } from "./pages/IndexPage";
import { NewsPage } from "./pages/NewsPage";
import { Page404 } from "./pages/Page404";
import { ProductPage } from "./pages/ProductPage";
import { SearchPage } from "./pages/SearchPage";

export const ROUTES = {
	index: { path: "/", element: <IndexPage />, link: () => "/" },
	product: {
		path: "/product/:id/",
		element: <ProductPage />,
		link: (id) => `/product/${id}/`,
	},
	news: {
		path: "/news/",
		element: <NewsPage />,
		link: () => `/news/`,
	},
	search: {
		path: "/search/",
		element: <SearchPage />,
		link: () => `/search/`,
	},
	create_product: {
		path: "/new_product/",
		element: <CreateProductPage />,
		link: () => `/new_product/`,
	},
	error404: {
		path: "*",
		element: <Page404 />,
		link: null,
	},
};
