import React from "react";
import "./Calender.css";
import pana from "../../Images/pana.svg";
const Calender = () => {
  return (
    <div className="Calender">
      <div className="Calender-left">
        <img src={pana} />
      </div>
      <div className="Calender-right">
        <h1 style={{ color: "var(--Grey)" }}>
          How to design your site footer like we did
        </h1>
        <p className="Paragragh">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
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

export default Calender;
