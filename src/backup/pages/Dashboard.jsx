import React from "react";
import star from "../../assets/dashboard_image/star.svg";

export const Dashboard = () => {
  return (
    <div>
      <h1 className="font-bold text-accent text-44px">Hi, Ouddom!</h1>
      <p className="text-accent text-18px">Welcome to DocEngine</p>
      <div>
        <img src={star} />
        <div>
          <h3>Ouddom, get started with DocEngine</h3>
        </div>
      </div>
    </div>
  );
};
