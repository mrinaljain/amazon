import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
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
  return (
    <>
      <RouterProvider router={routes}> </RouterProvider>
    </>
  );
}

export default App;
