import React from "react";

import { Link } from "react-scroll";
import Beverages from "../Beverages/Beverages";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <Link to="whats-new" className="cursor-pointer">
          What's New
        </Link>
        <Link to="new-items" className="cursor-pointer">
          New Items
        </Link>
        <Link to="boxes" className="cursor-pointer">
          Boxes
        </Link>
        <Link to="combo-baskets" className="cursor-pointer">
          Combo Baskets
        </Link>
        <Link to="juicy-chicken" className="cursor-pointer">
          Juicy Chicken
        </Link>
        <Link to="snacks" className="cursor-pointer">
          Snacks
        </Link>
        <Link to="combo" className="cursor-pointer">
          Combo
        </Link>
        <Link to="beverages" className="cursor-pointer">
          Beverages
        </Link>
        <Link to="additionally" className="cursor-pointer">
          Additionally
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
