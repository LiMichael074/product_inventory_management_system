import "./index.css";
import { ChangeEvent, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./assets/componat/NavBar";
import NotFound from "./assets/page/NotFound";
import Home from "./assets/page/Home";
import AddProduct from "./assets/page/AddProduct";
import Favorites from "./assets/page/Favorites";

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
        path: "/product",
        element: <AddProduct />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
