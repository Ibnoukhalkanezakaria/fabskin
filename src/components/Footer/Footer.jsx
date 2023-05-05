import React from "react";
import { navBar } from "../../data/data";
import { Link } from "react-router-dom";

const Footer = () => {
  const { navLinks } = navBar;
  return (
    <div className="bg-color3 py-[100px]">
      <div className="wrapper flex flex-row ">
        <div className="basis-1/3">
          <h3 className="font-[Melodrama] text-3xl font-medium pb-4 text-color4">
            Fab
          </h3>
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((e, i) => {
              return (
                <li key={i}>
                  <Link
                    className="text-color4 text-lg hover:underline-red-500 duration-300"
                    to={e.href}
                  >
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="basis-1/3">
          <h3 className="font-[Melodrama] text-3xl font-medium pb-4 text-color4">
            Contact us
          </h3>
          <div className="pb-6">
            <p className="text-color4  mt-4">Have questions & suggestions?</p>
            <span className="underline text-color4 pt-3 block">
              info@example.com
            </span>
          </div>
          <div>
            <p className="text-color4  mt-4">
              Need assistance? Give us a call.
            </p>
            <span className="underline text-color4 pt-3 block">
              +2 457 87456 154
            </span>
          </div>
        </div>
        <div className="basis-1/3">
          <h3 className="font-[Melodrama] text-3xl font-medium pb-4 text-color4">
            We’re here for you
          </h3>
          <div className="pb-6">
            <p className="text-color4  ">Monday - Thursday: 9:30 - 18:00</p>
            <p className="text-color4  mt-4">Friday: 9:30 - 15:00</p>
          </div>
          <div>
            <p className="text-color4  mt-4">
              Need assistance? Give us a call.
            </p>
            <span className="underline text-color4 pt-3 block">
              +2 457 87456 154
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
