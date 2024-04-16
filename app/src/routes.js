import { ChildsPage } from "./pages/ChildsPage";
import { CreateProductPage } from "./pages/CreateProductPage";
import { IndexPage } from "./pages/IndexPage";
import { MenPage } from "./pages/MenPage";
import { NewsPage } from "./pages/NewsPage";
import { Page404 } from "./pages/Page404";
import { ProductPage } from "./pages/ProductPage";
import { SearchPage } from "./pages/SearchPage";
import { WomenPage } from "./pages/WomenPage";

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
	men: {
		path: "/men/",
		element: <MenPage />,
		link: () => `/men/`,
	},
	women: {
		path: "/women/",
		element: <WomenPage />,
		link: () => `/women/`,
	},
	childs: {
		path: "/childs/",
		element: <ChildsPage />,
		link: () => `/childs/`,
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
