import React from "react";
import "./Footer.css";
import Logo from "../../Images/LogoWhite.svg";
import SocialLogo from "../../Images/Social Icons.svg";
import SocialLogo2 from "../../Images/Social Icons2.svg";
import SocialLogo3 from "../../Images/Social Icons3.svg";
import SocialLogo4 from "../../Images/Social Icons4.svg";
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-left">
        <img src={Logo} />
        <div>
          <p style={{ marginBottom: "0", fontSize: "0.8rem" }}>
            Copyright © 2020 Landify UI Kit.
          </p>
          <p style={{ marginTop: "0", fontSize: "0.8rem" }}>
            All rights reserved
          </p>
        </div>
        <div className="SocialIconsDiv">
          <img style={{ marginLeft: "0" }} src={SocialLogo} />
          <img src={SocialLogo2} />
          <img src={SocialLogo3} />
          <img src={SocialLogo4} />
        </div>
      </div>
      <div className="Footer-right">
        <div className="Company">
          <h3>Company</h3>
          <div style={{ height: "10rem" }}>
            <a>About us</a>
            <a>Blog</a>
            <a>Contact Us</a>
            <a>Pricing</a>
            <a>Testimonials</a>
          </div>
        </div>
        <div className="Support">
          <h3>Support</h3>
          <div style={{ height: "10rem" }}>
            <a>Help Center</a>
            <a>Terms of service</a>
            <a>Legal</a>
            <a>Privacy Policy</a>
            <a>Status</a>
          </div>
        </div>
        <div className="Mail">
          <h3 style={{ color: "var(--White)", textAlign: "justify" }}>
            Stay up to date
          </h3>
          <input className="Footer-Input" placeholder="Your email address" />
        </div>
      </div>
    </div>
  );
};
