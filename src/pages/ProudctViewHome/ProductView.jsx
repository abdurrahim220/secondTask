import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cart from "../Cart/Cart";
import AllProductContainer from "../AllProductContainer/AllProductContainer";

const ProductView = () => {
  return (
    <div className="lg:flex bg-primary-background justify-center mx-auto xl:max-w-[1873px]">
      <div className="flex flex-col lg:flex-row gap-3">
        <div>
          <Sidebar />
        </div>
        <div className="bg-primary-background">
          <AllProductContainer />
        </div>
        <div className="hidden xl:block">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
