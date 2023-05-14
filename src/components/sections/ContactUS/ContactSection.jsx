import React from "react";
import Form from "./Form";
import Map from "./Map";

const ContactSection = () => {
  return (
    <div>
      <div className="w-[800px] m-auto pt-[120px] ">
        <h3 className="leading-10 font-[Melodrama] pb-9 text-color4 text-3xl font-medium">
          You may also fill out the form below and we will respond as quickly as
          possible.
        </h3>
        <Form />
        <h3 className="leading-10 font-[Melodrama] pt-14 text-color4 text-3xl font-medium">
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the.
        </h3>
        <div className="flex justify-between">
          <div className="my-10">
            <h3 className="text-color4 font-semibold text-lg">
              Customer service
            </h3>
            <a href="/" className="py-3 text-color4 underline block">
              info@example.com
            </a>
            <p className="text-color4 pb-3">Mon - Thu: 9:30 - 18:00</p>
            <p className="text-color4 ">Fri: 9:30 - 15:00</p>
          </div>
          <div className="my-10">
            <h3 className="text-color4 font-semibold text-lg">Call us</h3>
            <a href="/" className="py-3 text-color4 underline block">
              + 2 65 1452 1456
            </a>
          </div>
          <div className="my-10">
            <h3 className="text-color4 font-semibold text-lg">Visit store</h3>

            <p className="text-color4 py-2 leading-6 max-w-[200px]">
              Chicago HQ Estica Cop. Macomb, MI 48042
            </p>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default ContactSection;
