import React from "react";
import Header from "../pages/Header/Header";
import { Outlet ,useLocation} from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  const location =useLocation()
  return (
    <div>
      <Header />
      <Outlet />
      {
        location.pathname === '/' ? "" : <Footer />
      }
    </div>
  );
};

export default Main;
