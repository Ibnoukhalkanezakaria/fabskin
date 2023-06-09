import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

import { navBar } from "../../data/data";

import "./Navbar.css";

import { GoThreeBars } from "react-icons/go";

const Navlinks = () => {
  const [open, setOpen] = useState(false);
  const { navLinks } = navBar;

  return (
    <div className="flex relative z-[999] items-end justify-center">
      <div className="py-5 bg-secondaryClr w-full">
        <div className="wrapper flex lg:justify-between justify-end items-center">
          <div className="logo lg:mr-0 mr-auto">
            <Link to="/">
              <img src={Logo} alt="logo" aria-label="logo" />
            </Link>
          </div>
          <div className="nav-links ">
            <ul
              className={`${
                open ? " top-[105px]" : "top-[-400px]"
              } border-y-[1px] z-[-1] lg:gap-10 gap-4 duration-500 lg:static lg:bg-transparent lg:border-none lg:h-auto border-primaryClr flex  lg:flex-row flex-col items-start pl-[2rem] justify-center absolute bg-color3 w-full h-[250px]  left-0`}
            >
              {navLinks.map((e, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      // exact
                      // activeClassName="text-primaryClr underline-primary"
                      className={`text-lg duration-300 ${
                        i == 0
                          ? "text-primaryClr "
                          : "text-color4 hover:underline underline-black"
                      }`}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "green" : "",
                        };
                      }}
                      to={e.href}
                    >
                      {e.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer lg:block hidden"
            >
              <IoSearchOutline className="text-[25px]" />
            </div>
            <div
              onClick={() => setOpenCart()}
              className="cursor-pointer relative"
            >
              <FiShoppingBag className="text-[25px]" />
              <div className="absolute bg-primaryClr top-[-5px] right-[-7px] rounded-[50%] w-4 h-4 p-2 flex items-center justify-center">
                <span className="text-color3 text-sm">0</span>
              </div>
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`ml-5 ${
              open ? "bg-color4" : "bg-primaryClr"
            } lg:hidden block p-4`}
          >
            <GoThreeBars className="text-color3 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
