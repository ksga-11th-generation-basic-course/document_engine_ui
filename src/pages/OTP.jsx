import React, { useState } from "react";

const OTP = () => {
  const [opt, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...opt.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextElementSibling) {
      element.nextElementSibling.focus();
    }
  };

  console.log(opt);

  return (
    <div>
      {opt.map((data, index) => (
        <input
          type="text"
          name="opt"
          maxLength="1"
          key={index}
          value={data}
          className="outline-none w-10 h-10 p-2 m-2"
          onChange={(e) => handleChange(e.target, index)}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
};

export default OTP;
