import React from "react";

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
        <h1 className="text-[#21201F] text-[24px] mr-1 truncate font-medium">580 T</h1>
        <p className="text-[16px] mt-1 text-[#21201F] truncate">
          Sanders Mega Burger Box
        </p>
      </div>
    </div>
  );
};

export default Card;
