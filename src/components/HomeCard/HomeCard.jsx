import React from "react";

const HomeCard = ({ shop }) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        className="h-[130px] bg-pink-100 rounded-[16px]"
        src={shop.img}
        alt=""
      />
      <span
        className="absolute bottom-0 text-[16px] right-0 bg-[#666564] font-bold  rounded-[16px] text-white px-[12px] py-2"      >
        {shop.delivery_time}
      </span>
    </div>
  );
};

export default HomeCard;
