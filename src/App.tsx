import React from "react";
import { useRoutes } from "react-router-dom";
import ClientLayout from "./layout/client";
import Home from "./components/client/home";
import Register from "./components/client/register";
import Login from "./components/client/login";
import Category from "./components/client/category";
import Details from "./components/client/details";
import Not from "./components/client/not-found";
type Props = {};

const App = (props: Props) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "category", element: <Category /> },
        { path: "details", element: <Details /> },
        { path: "err", element: <Not /> },
      ],
    },
  ]);
  return routes;
};

export default App;
