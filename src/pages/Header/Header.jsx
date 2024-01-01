import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaLocationArrow, FaSearch, FaTimes, FaUserAlt } from "react-icons/fa";
import { FaLocationCrosshairs, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();

  const url = "https://dhakabusserver.onrender.com";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full mx-auto border-b-2  z-[50] fixed top-0">
      <nav
        className={`py-4  px-4 bg-primary-background ${
          isSticky ? "shadow-md px-4 " : ""
        }`}
      >
        <div className=" mx-auto">
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-5">
              <img
                src="https://avatars.mds.yandex.net/get-bunker/128809/0efb578cd41a9939800311677e6f4f8a12f04e90/orig"
                alt=""
              />
              <div class="relative ">
                <label class="flex items-center">
                  <FaSearch class="absolute left-4 text-gray-500" />
                  <input
                    type="text"
                    class="w-[100%] rounded-[16px] h-[48px] px-12 py-3 border-2 border-[#FCE000] focus:outline-none focus:border-[#FCE000]"
                    placeholder="Search for restaurants, food or products"
                  />
                  <button class="absolute right-0 h-[48px] rounded-r-[16px] bg-[#FCE000] px-2 font-medium">
                    Search
                  </button>
                </label>
              </div>
              <button className="h-[48px] px-4 py-2 font-normal rounded-[16px] flex gap-1 items-center  bg-[#EEEEEE]">
                <GrLocationPin size={20}/>AddAddress<IoIosArrowDown size={20}/>
              </button>
            </div>

            <div className="flex items-center gap-5">
              <div className="h-[48px] text-center">
                <TbWorld className="text-center"/>
                <p>English</p>
              </div>
              <button className="h-[48px] px-8 py-2 font-normal rounded-[16px] bg-[#EEEEEE]">Login</button>
            </div>

           

            {/* menu btn for only mobile device */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none focus:text-gray-500"
              >
                {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </div>
          </div>

          {/* items for mobile device*/}
          <div
            className={`space-y-4 px-4 mt-16 bg-primary-background ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
