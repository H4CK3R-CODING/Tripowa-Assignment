import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Products from "./pages/Products.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
