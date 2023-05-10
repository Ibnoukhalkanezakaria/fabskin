import React from "react";
import { navBar } from "../../data/data";
import { Link } from "react-router-dom";

const Footer = () => {
  const { navLinks, Pages } = navBar;
  return (
    <div className="bg-color3 py-[120px]">
      <div
        className="wrapper flex flex-row flex-wrap
       gap-16"
      >
        <div className="lg:basis-1/5">
          <h3 className="font-[Melodrama] text-3xl font-medium pb-4 text-color4">
            Fab
          </h3>
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((e, i) => {
              return (
                <li key={i}>
                  <Link
                    className="text-color4 text-md hover:underline-red-500 duration-300"
                    to={e.href}
                  >
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:basis-1/5">
          <h3 className="font-[Melodrama] text-3xl font-medium pb-4 text-color4">
            Pages
          </h3>
          <ul className="flex flex-col gap-4 mt-4">
            {Pages.map((e, i) => {
              return (
                <li key={i}>
                  <Link
                    className="text-color4 text-md hover:underline-red-500 duration-300"
                    to={e.href}
                  >
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:basis-1/5">
          <h3 className="font-[Melodrama] text-3xl font-medium pb-4 text-color4">
            Contact us
          </h3>
          <div className="pb-6">
            <p className="text-color4 text-md mt-4">
              Have questions & suggestions?
            </p>
            <span className="underline text-md text-color4 pt-3 block">
              info@example.com
            </span>
          </div>
          <div>
            <p className="text-color4 text-md mt-4">
              Need assistance? Give us a call.
            </p>
            <span className="underline text-md text-color4 pt-3 block">
              +2 457 87456 154
            </span>
          </div>
        </div>
        <div className="lg:basis-1/5">
          <h3 className="font-[Melodrama] text-3xl font-medium pb-4 text-color4">
            We’re here for you
          </h3>
          <div className="pb-6">
            <p className="text-color4 mt-4  text-md">
              Monday - Thursday: 9:30 - 18:00
            </p>
            <p className="text-color4  mt-3 text-md">Friday: 9:30 - 15:00</p>
          </div>
          <div>
            <p className="text-color4  mt-4 text-md">
              Need assistance? Give us a call.
            </p>
            <span className="underline text-md text-color4 pt-3 block">
              +2 457 87456 154
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
