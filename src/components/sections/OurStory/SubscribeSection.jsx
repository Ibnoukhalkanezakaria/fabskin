import React, { useState } from "react";

const SubscribeSection = () => {
  const [form, setForm] = useState(true);
  const [message, setMessage] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setForm(false);
    setMessage(true);
  };

  setTimeout(() => {
    setMessage(false);
  }, 1300);

  return (
    <div className="text-center p-[120px]">
      <h1 className="text-color4 font-[Melodrama] text-5xl leading-[60px] pb-6 max-w-[600px] m-auto">
        Subscribe and get 15% off your first order.
      </h1>
      <p className="text-color4 text-lg max-w-[900px] m-auto">
        But the majority have suffered alteration in some form.
      </p>
      {setForm && (
        <form onSubmit={submit} className="mt-14">
          <input
            required
            type="text"
            placeholder="Email address"
            className="bg-color3 outline-none p-5 placeholder:text-color4 placeholder:text-sm w-[400px] max-w-[100%]"
          />
          <input
            required
            type="submit"
            value="I'm in"
            className="hover:bg-color4 duration-300 cursor-pointer py-5 px-14 bg-primaryClr text-color3"
          />
        </form>
      )}

      {setMessage && <p>Please wait ...</p>}

      {!setForm &&
        !setMessage(<p>Thank you! Your submission has been received!</p>)}
    </div>
  );
};

export default SubscribeSection;
