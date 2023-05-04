import React from "react";
import { navBar } from "../../data/data";
import { Link } from "react-router-dom";

const Footer = () => {
  const { navLinks } = navBar;
  return (
    <div className="bg-color3 py-[50px]">
      <div className="wrapper flex flex-row justify-between">
        <div>
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
        <div>
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
        <div>
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
        <div>
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
      </div>
    </div>
  );
};

export default Footer;
