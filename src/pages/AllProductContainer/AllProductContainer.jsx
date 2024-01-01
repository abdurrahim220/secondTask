import React from "react";
import NewItems from "../NewItems/NewItems";
import Boxes from "../Boxes/Boxes";
import WhatsNew from "../WhatsNew/WhatsNew";
import ComboBaskets from "../ComboBaskets/ComboBaskets";
import JuicyChicken from "../JuicyChicken/JuicyChicken";
import Snacks from "../Snacks/Snacks";
import Combo from "../Combo/Combo";
import Beverages from "../Beverages/Beverages";
import Additionally from "../Additionally/Additionally";

const AllProductContainer = () => {
  return (
    <div className="w-[1117px] top-[112px]">
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
  );
};

export default AllProductContainer;
