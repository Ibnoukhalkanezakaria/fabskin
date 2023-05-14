import React from "react";

const Map = () => {
  return (
    <div className="wrapper py-[100px] ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528002468!2d-74.1444870506823!3d40.69763123326819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sma!4v1684082184300!5m2!1sen!2sma"
        style={{ border: "0px" }}
        loading="lazy"
        className="w-full h-[500px]"
      ></iframe>
    </div>
  );
};

export default Map;
