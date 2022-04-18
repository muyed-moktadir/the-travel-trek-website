import React from "react";
import banner from "../../../images/banner.jpg";
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <h1>
            Travel Trek 
        </h1>
        <p>
        "Travel doesn’t become adventure until you leave yourself behind".
        </p>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
