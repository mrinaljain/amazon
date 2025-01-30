import { React } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Cart from "./pages/Cart";
// find target in html
const routes = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Cart />,
    path: "/cart",
  },
]);
const root = createRoot(document.getElementById("root"));
// create root

// inst JSX element in root
root.render(<RouterProvider router={routes}> </RouterProvider>);
