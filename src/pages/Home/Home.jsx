import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import Cart from "../Cart/Cart";
import AllProductContainer from "../AllProductContainer/AllProductContainer";

const Home = () => {
  return (
    <div class="flex justify-center mx-auto max-w-[1873px]">

<div className="flex gap-3">
      <div>
        <Sidebar />
      </div>
      <div className="">
        <AllProductContainer />
      </div>
      <div>
        <Cart />
      </div>
    </div>
    </div>
   
  );
};

export default Home;
