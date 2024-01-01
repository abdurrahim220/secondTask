import React from "react";
import Card from "../../components/Card/Card";

const Combo = () => {
  return <div id="combo" className='mb-[48px]'>
     <div className="my-[26px] mx-[24px]">
        <h1 className="font-bold text-[32px] text-primary-text">Combo</h1>
      </div>
      <div className="flex flex-wrap gap-5 mx-[24px]">
        <Card />
        <Card />
        <Card />
      </div>
  </div>;
};

export default Combo;
