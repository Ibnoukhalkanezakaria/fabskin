import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { navBar } from "../../data/data";
import Promo from "../sections/Promo/Promo";

const Navbar = () => {
  const { navLinks } = navBar;
  return (
    <>
      {/* <Promo /> */}
      <div className="py-5 flex items-end justify-center">
        <div className="wrapper flex justify-between items-center">
          <div className="logo">
            <img src={Logo} alt="logo" aria-label="logo" />
          </div>
          <div className="nav-links">
            <ul className="flex gap-8">
              {navLinks.map((e, i) => {
                return (
                  <li key={i}>
                    {/* {(i ==1 ) : <Link
                    className="text-lg hover:underline duration-300"
                    to={e.href}
                  >
                    {e.name}
                  </Link> } */}

                    {i == 0 ? (
                      <Link
                        className="text-primaryClr text-lg hover:underline-red-500 duration-300"
                        to={e.href}
                      >
                        {e.name}
                      </Link>
                    ) : (
                      <Link
                        className="text-lg hover:underline duration-300"
                        to={e.href}
                      >
                        {e.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer">
              <IoSearchOutline className="text-[25px]" />
            </div>
            <div className="cursor-pointer relative">
              <FiShoppingBag className="text-[25px]" />
              <div className="absolute bg-primaryClr top-[-5px] right-[-7px] rounded-[50%] w-4 h-4 p-2 flex items-center justify-center">
                <span className="text-color3 text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
