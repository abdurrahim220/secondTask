import React from "react";
import { FaPlus } from "react-icons/fa6";

const Card = () => {
  return (
    <div class="p-3 w-[217px] h-[358px] bg-white rounded-[24px] cursor-pointer">
      <div>
        <img
          className="rounded-[24px]"
          src="https://i.ibb.co/rfkqHvy/L361-BJdpm3n4hbqi-Ifh-B2f-Dde.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-[#21201F] text-[24px] mr-1 truncate font-medium">
          580 T
        </h1>
        <p className="text-[16px] mt-1 text-[#21201F] truncate">
          Sanders Mega Burger Box
        </p>
        <div className="h-12 mt-6 mx-auto bg-[#F5F4F2]  rounded-[16px] ">
          <button className="p-[14px] text-[16px] flex justify-center items-center gap-1 bg-transparent w-[100%] h-[100%] text-primary-text cursor-pointer ">
           <FaPlus/> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
