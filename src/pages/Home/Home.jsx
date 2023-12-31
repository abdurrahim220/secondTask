import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import WhatsNew from "../WhatsNew/WhatsNew";
import NewItems from "../NewItems/NewItems";
import Boxes from "../Boxes/Boxes";
import ComboBaskets from "../ComboBaskets/ComboBaskets";
import JuicyChicken from "../JuicyChicken/JuicyChicken";
import Combo from "../Combo/Combo";
import Snacks from "../Snacks/Snacks";
import Beverages from "../Beverages/Beverages";
import Additionally from "../Additionally/Additionally";

const Home = () => {
  return (
    <div className="flex gap-3">
      <div className="border">
        <Sidebar />
      </div>
      <div className="border">
        <WhatsNew />
        <NewItems />
        <Boxes />
        <ComboBaskets />
        <JuicyChicken />
        <Snacks />
        <Combo />
        <Beverages />
        <Additionally />
      </div>
    </div>
  );
};

export default Home;
