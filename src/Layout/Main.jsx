import React from "react";
import Header from "../pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
