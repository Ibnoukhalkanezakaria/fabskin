import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const Search = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-color3 fixed top-0 w-full left-0 right-0 h-full ${
        open ? "block" : "hidden"
      }`}
    >
      <div className={`flex items-center justify-center flex-col h-full  `}>
        <h1 className="font-[Melodrama] text-color4 text-5xl pb-4">
          Search here
        </h1>
        <form>
          <input
            type="text"
            placeholder="Search product..."
            className="outline-none p-7 placeholder:text-color4 placeholder:text-lg w-[400px] max-w-[100%]"
          />
          <input
            type="submit"
            value="Search"
            className="cursor-pointer py-7 px-12 bg-primaryClr text-color3"
          />
        </form>
      </div>
      <GrClose
        className={`cursor-pointer absolute top-14 text-4xl right-14 z-40`}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Search;
