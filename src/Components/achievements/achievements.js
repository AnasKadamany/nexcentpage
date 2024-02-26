import React from "react";
import "./achievements.css";
import Count1 from "../../Images/Count1.svg";
import Count2 from "../../Images/Count2.svg";
import Count3 from "../../Images/Count3.svg";
import Count4 from "../../Images/Count4.svg";

const achievements = () => {
  return (
    <div className="Achievements">
      <div className="Ach-Head">
        <h1 className="Grey-Head">Helping a Local</h1>
        <h1 className="Green-Head">business reinvent itself</h1>
        <p className="Paragragh">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div style={{ width: "40%" }}>
        <div className="Ach-Counts">
          <div className="Count">
            <img style={{ marginRight: "1rem" }} src={Count1} />
            <div>
              <p className="Paragragh" style={{ fontSize: "2rem" }}>
                2,245,341
              </p>
              <p className="Paragragh">Members</p>
            </div>
          </div>
          <div className="Count">
            <img style={{ marginRight: "1rem" }} src={Count1} />
            <div>
              <p className="Paragragh" style={{ fontSize: "2rem" }}>
                2,245,341
              </p>
              <p className="Paragragh">Members</p>
            </div>
          </div>
          <div className="Count">
            <img style={{ marginRight: "1rem" }} src={Count1} />
            <div>
              <p className="Paragragh" style={{ fontSize: "2rem" }}>
                2,245,341
              </p>
              <p className="Paragragh">Members</p>
            </div>
          </div>
          <div className="Count">
            <img style={{ marginRight: "1rem" }} src={Count1} />
            <div>
              <p className="Paragragh" style={{ fontSize: "2rem" }}>
                2,245,341
              </p>
              <p className="Paragragh">Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default achievements;
