import React, { useState } from "react";
import menu from "../assets/landing_image/menu.svg";

export const DropDownMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button type="button" onClick={() => setOpenMenu(!openMenu)}>
        <img src={menu}/>
      </button>
    </div>
  );
};
