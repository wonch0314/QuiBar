import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/startpage/StartPage";
import MainPage from "./pages/mainpage/MainPage";
import CocktailPage from "./pages/cocktailpage/CocktailPage";
import RandomPage from "./pages/randompage/RandomPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/cocktail",
    element: <CocktailPage />,
  },
  {
    path: "/random",
    element: <RandomPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
