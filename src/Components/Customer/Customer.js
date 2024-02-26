import React from "react";
import "./Customer.css";
import Tesla from "../../Images/image 9.svg";
import Logo1 from "../../Images/Logo.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Logo4 from "../../Images/Logo (3).svg";
import Logo5 from "../../Images/Logo (4).svg";
import Logo6 from "../../Images/Logo (5).svg";
import Logo7 from "../../Images/Logo (6).svg";
const Customer = () => {
  return (
    <div className="Customer">
      <div className="Customer-left">
        <img src={Tesla} />
      </div>
      <div className="SizingDiv">
        <div className="Customer-right">
          <p className="Paragragh">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 style={{ color: "var(--Primary)" }}>Tim Smith</h3>
          <p className="Paragragh">British Dragon Boat Racing Association</p>
          <div className="CustomerLogos">
            <img src={Logo1} />
            <img src={Logo4} />
            <img src={Logo5} />
            <img src={Logo6} />
            <img src={Logo7} />
            <button className="Large-Screen btn margin-left">
              <p style={{ color: "var(--Primary)" }}>Meet all customers</p>

              <ArrowRightAltIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
