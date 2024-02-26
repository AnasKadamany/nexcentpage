import React from "react";
import "./Frame.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Frame = () => {
  return (
    <div className="Frame">
      <h1 className="FrameHeader">Pellentesque suscipit</h1>
      <h1 className="FrameHeader">fringilla libero eu.</h1>
      <button className="Large-Screen btn margin-left">
        <p>Get a Demo</p>

        <ArrowRightAltIcon />
      </button>
    </div>
  );
};

export default Frame;
