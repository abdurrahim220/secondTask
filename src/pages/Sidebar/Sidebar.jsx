import React from "react";
import { Element, Link, scroller } from "react-scroll";
import { FaArrowLeft } from "react-icons/fa";
;

const Sidebar = () => {
 
  return (
    <div className="lg:w-[232px] w-full bg-black lg:bg-primary-background text-white lg:text-black lg:sticky fixed lg:top-[114px] top-[95px]">
      <div className="bg-secondary-background hidden lg:block   rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]">

        <div className="flex items-center gap-2 text-primary-text font-medium">
          <FaArrowLeft /> All Resturest
        </div>
      </div>

      <div className="hidden lg:flex mt-[48px] ml-[19px] mr-[16px] mb-[8px]">
        <span className="font-medium text-primary-text text-[20px]">Menu</span>
      </div>

      <div className="flex lg:flex-col">
        <Link
          to="whats-new"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:lg:py-[14 py-[5px] pr-[5px]plg:x] pr-[16px]"
        >
        Whats New
        </Link>

        <Link
          to="new-items"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
          // initial={window.location.hash === "#new-items"}
        >
          New Items
        </Link>

        <Link
          to="boxes"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
        >
          Boxes
        </Link>

        <Link
          to="combo-baskets"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
        >
          Combo Baskets
        </Link>

        <Link
          to="juicy-chicken"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
        >
          Juicy Chicken
        </Link>

        <Link
          to="snacks"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
        >
          Snacks
        </Link>

        <Link
          to="combo"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
        >
          Combo
        </Link>

        <Link
          to="beverages"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
        >
          Beverages
        </Link>

        <Link
          to="additionally"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] text-[12px] lg:text-[16px] cursor-pointer overflow-hidden lg:pl-[20px] pl-[8px] lg:py-[14px] py-[5px] pr-[5px] lg:pr-[16px]"
        >
          Additionally
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
