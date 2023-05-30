import React, { useState } from "react";
import dotsvertical from "../../assets/document_image/dotsvertical.svg";
import { DropDownHistory } from "../DropDownHistory";

export const DocumentHistoryCard = ({ editby, time }) => {
  const character = editby.split("");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [openHistory, setOpenHistory] = useState(false);

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center w-full text-accent">
        <div className="text-18px space-y-3">
          <p className="font-semibold">{time}</p>
          <div className="flex items-center gap-x-3">
            <div
              className={`w-7 h-7 flex justify-center items-center ${randomColor} rounded-full text-white text-15px`}
            >
              <p>{character[0]}</p>
            </div>
            <h4>{editby}</h4>
          </div>
        </div>
        <div className="relative">
          <button
            className="p-3 border-[1px] rounded-lg"
            type="button"
            onClick={() => setOpenHistory(!openHistory)}
          >
            <img src={dotsvertical} />
          </button>
          {openHistory ? <DropDownHistory openHistory={openHistory} setOpenHistory={setOpenHistory}/> : null}
        </div>
      </div>
      <div className="border-[1px] mt-3 mb-3"></div>
    </div>
  );
};
