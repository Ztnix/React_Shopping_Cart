import App from "../components/App";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import About from "./About";
import Home from "./Home";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
