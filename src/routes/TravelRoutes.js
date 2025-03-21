import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Coment from "../components/layout/products/comment/Coment (2)";
import ListComents from "../components/layout/products/comment/ListComents";
import AddTravel from "../components/layout/crud/AddTravel";
import ListTravel from "../components/layout/crud/ListTravel";
import Home from "../components/layout/products/Home";
import OneProduct from "../components/layout/products/feedback/OneProduct";
import EditTravel from "../components/layout/crud/EditTravel";
import ResBask from "../components/layout/basket/ResBask";

const TravelRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/login",
      element: <Login />,
      id: 2,
    },
    {
      link: "/register",
      element: <Register />,
      id: 3,
    },
    {
      link: "/coment",
      element: <Coment />,
      id: 4,
    },
    {
      link: "/feed",
      element: <ListComents />,
      id: 5,
    },
    {
      link: "/add",
      element: <AddTravel />,
      id: 6,
    },
    {
      link: "/list",
      element: <ListTravel />,
      id: 7,
    },
    {
      link: "/about",
      element: <OneProduct />,
      id: 8,
    },
    {
      link: "/edit/:id",
      element: <EditTravel />,
      id: 9,
    },
    {
      link: "basket",
      element: <ResBask />,
      id: 10,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default TravelRoutes;
