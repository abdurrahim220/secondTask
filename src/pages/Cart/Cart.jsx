import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <div className="top-[112px] w-[320px] h-[calc(100vh-112px)] sticky rounded-[16px] ml-8 p-5 -mb-[22px] bg-[#ffffff]">
      <h1 className="text-[30px] font-bold">Cart</h1>
      <div className="flex justify-center items-center space-y-2 flex-col h-[80%]">
        <img
          className=" rounded-[16px] "
          src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg"
          alt=""
        />
        <h1 className="text-[24px] font-bold text-center">
          Your cart is currently empty
        </h1>
      </div>
      <div className="border-t-2">
        <div className="mt-2 flex justify-center items-center gap-2">
          <img  className="h-[48px] w-[48px] rounded-[16px] bg-[#F5F4F2]"
            src="https://avatars.mds.yandex.net/get-bunker/60661/e0b70b2b2a584c45a33c9f9866609f9b2e95019c/svg"
            alt=""
          />
          <div className=" flex flex-col text-[13px]">
            <span className="text-[rgb(114,170,82)] ">
              Бесплатная доставка от 1000 ₸ · 20–30 мин
            </span>
            <span>Подробные условия</span>
          </div>
          <IoInformationCircleOutline size={30} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
