import React from "react";
import "./Hero.css";
import HeroImg from "../../Images/Illustration.svg";
const Hero = () => {
  return (
    <div className="HeroSection">
      <div className="h-Left">
        <div className="Head-Values">
          <h1 className="headVal1">Lessons and insights</h1>
          <h1 className="headVal2">from 8 years</h1>
          <p className="Paragragh">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="btn MarginTop">
            <p>Register</p>
          </button>
        </div>
      </div>
      <div className="h-Right">
        <img src={HeroImg} />
      </div>
    </div>
  );
};

export default Hero;
