import React from "react";
import "./Benefits.css";
import Ben1 from "../../Images/ben1.svg";
import Ben2 from "../../Images/ben2.svg";
import Ben3 from "../../Images/ben3.svg";
const Benefits = () => {
  return (
    <div className="Benefits">
      <div className="c-Val">
        <h1 className="marginZero c-header">Manage your entire community</h1>
        <h1 className="marginZero c-header">in a Single system</h1>
        <p className="Paragragh marginZero ">Who is Nextcent suitable for?</p>
      </div>
      <div className="c-Icons">
        <div className="SectionsCont">
          <img src={Ben1} />
          <h1>Membership</h1>
          <h1>Organisations</h1>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="SectionsCont">
          <img src={Ben2} />
          <h1>National</h1>
          <h1>Associations</h1>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="SectionsCont">
          <img src={Ben3} />
          <h1>Clubs And</h1>
          <h1>Groups</h1>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
