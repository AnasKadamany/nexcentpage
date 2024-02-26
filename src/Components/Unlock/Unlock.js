import React from "react";
import "./Unlock.css";
import rafiki from "../../Images/rafiki.svg";
const Unlock = () => {
  return (
    <div className="Unlock">
      <div className="u-left">
        <img src={rafiki} />
      </div>
      <div className="u-right">
        <h1 className="marginZero">The unseen of spending three </h1>
        <h1 className="marginZero">years at Pixelgrade</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <div className="BtnDiv">
          <button className="btn MarginTop">
            <p>Learn More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
