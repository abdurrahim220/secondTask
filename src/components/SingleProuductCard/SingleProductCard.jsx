import React from "react";
import { useNavigate } from 'react-router-dom';

const SingleProductCard = ({shop}) => {
  const navigate = useNavigate();
  return (
    <div className="w-[336px] h-[254px] p-2" onClick={()=>navigate('/productView')}>
      <div style={{ position: "relative" }}>
        <img
          className="bg-pink-100 rounded-[16px]"
          src={shop.img}
          alt=""
        />
        <span className="absolute bottom-0 text-[16px] right-0 bg-[#111111] font-bold bg-transparent rounded-[16px] text-white px-[12px] py-2">
          20-30 min
        </span>
      </div>
      <div>
        <h1 className="text-[24px] font-bold py-1">{shop.foodname}</h1>
        <div>
          <span>* {shop.rating}</span>Good
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
