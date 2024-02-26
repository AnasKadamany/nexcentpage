import React from "react";
import "./Clients.css";
import Logo1 from "../../Images/Logo.svg";
import Logo2 from "../../Images/Logo (1).svg";
import Logo3 from "../../Images/Logo (2).svg";
import Logo4 from "../../Images/Logo (3).svg";
import Logo5 from "../../Images/Logo (4).svg";
import Logo6 from "../../Images/Logo (5).svg";
import Logo7 from "../../Images/Logo (6).svg";
const Clients = () => {
  return (
    <div className="Clients">
      <div className="c-Val">
        <h1 className="marginZero c-header">Our Clients</h1>
        <p className="Paragragh marginZero ">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="c-Icons">
        <img src={Logo1} />
        <img src={Logo2} />
        <img src={Logo3} />
        <img src={Logo4} />
        <img src={Logo5} />
        <img src={Logo6} />
        <img src={Logo7} />
      </div>
    </div>
  );
};

export default Clients;
