import React from "react";

const Form = () => {
  return (
    <form className="flex w-full gap-4 h-[320px]">
      <div className="flex flex-col basis-1/2">
        <input
          className="outline-none placeholder:text-color4 placeholder:text-sm p-6 mb-4 bg-color3"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="outline-none placeholder:text-color4 placeholder:text-sm p-6 mb-4 bg-color3"
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          className="outline-none placeholder:text-color4 placeholder:text-sm p-6 mb-4 bg-color3"
          type="text"
          placeholder="Phone number"
          required
        />
        <select className="outline-none bg-color3 p-6 mb-4 text-sm">
          <option value="option1" className="text-color4 text-sm">
            Select one...
          </option>
          <option value="option2" className="text-color4 text-sm">
            First choice
          </option>
          <option value="option3" className="text-color4 text-sm">
            Second choice
          </option>
          <option value="option4" className="text-color4 text-sm">
            Third choice
          </option>
        </select>
      </div>
      <div className="flex flex-col basis-1/2">
        <textarea
          required
          placeholder="Message"
          className="h-[250px] outline-none placeholder:text-color4 placeholder:text-sm p-6 mb-4 bg-color3"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="bg-primaryClr text-color3 p-4 hover:bg-color4 cursor-pointer duration-300"
        />
      </div>
    </form>
  );
};

export default Form;
