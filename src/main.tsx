import "./index.css";
import { ChangeEvent, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./assets/componat/NavBar";
import NotFound from "./assets/page/NotFound";
import Home from "./assets/page/Home";
import AddProduct from "./assets/page/AddProduct";
//import Favorites from "./assets/page/Favorites";
import ProductDetails from "./assets/page/ProductDetails";
//import FakeHome from "./assets/page/FakeHome";
//import ProductDetails2 from "./assets/page/ProductDetails2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      // {
      //   path: "/favorites",
      //   element: <Favorites />,
      // },
      {
        path: "/product",
        element: <AddProduct />,
      },
      // {
      //   path: "/Home2",
      //   element: <FakeHome />,
      // },
      // {
      //   path: "/product2/:id",
      //   element: <ProductDetails2 />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="app">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
