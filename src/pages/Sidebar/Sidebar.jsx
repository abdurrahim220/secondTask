import React from "react";
import { Element, Link, scroller } from "react-scroll";
import { FaArrowLeft } from "react-icons/fa";
;

const Sidebar = () => {
  const scrollToInitialLink = () => {
    scroller.scrollTo("new-items", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  React.useEffect(() => {
    scrollToInitialLink();
  }, []);


  return (
    <div className="w-[232px] sticky top-[112px]">
      <div className="bg-secondary-background rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]">
        <div className="flex items-center gap-2 text-primary-text font-medium">
          <FaArrowLeft /> All restaurants
        </div>
      </div>

      <div className="mt-[48px] ml-[19px] mr-[16px] mb-[8px]">
        <span className="font-medium text-primary-text text-[20px]">Menu</span>
      </div>

      <div className="flex flex-col">
        <Link
          to="whats-new"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          <span className="font-medium text-primary-text">Whats New</span>
        </Link>

        <Link
          to="new-items"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
          initial={window.location.hash === "#new-items"}
        >
          New Items
        </Link>

        <Link
          to="boxes"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          Boxes
        </Link>

        <Link
          to="combo-baskets"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          Combo Baskets
        </Link>

        <Link
          to="juicy-chicken"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          Juicy Chicken
        </Link>

        <Link
          to="snacks"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          Snacks
        </Link>

        <Link
          to="combo"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          Combo
        </Link>

        <Link
          to="beverages"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          Beverages
        </Link>

        <Link
          to="additionally"
          activeClass="bg-secondary-background"
          spy={true}
          smooth={true}
          className="rounded-[16px] cursor-pointer overflow-hidden pl-[20px] py-[14px] pr-[16px]"
        >
          Additionally
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
