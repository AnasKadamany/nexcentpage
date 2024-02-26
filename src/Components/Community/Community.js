import React from "react";
import "./Community.css";
import image18 from "../../Images/image 18.svg";
import image19 from "../../Images/image 19.svg";
import image20 from "../../Images/image 20.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Community = () => {
  return (
    <div className="Community">
      <div className="Community-Heading">
        <h1 style={{ color: "var(--D_Grey)" }}>Caring for the new marketing</h1>
        <p className="Paragragh">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends, and more. See who's joining the
          community, read about how our community is increasing their membership
          income, and lots more.​
        </p>
      </div>
      <div className="CommunityImgFlexDiv">
        <div className="CommunityImgDiv">
          <img src={image18} />
          <div className="initialDiv">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <button className="Large-Screen btn">
              <p style={{ color: "var(--Primary)" }}>ReadMore</p>

              <ArrowRightAltIcon />
            </button>
          </div>
        </div>

        <div className="CommunityImgDiv">
          <img src={image19} />
          <div className="initialDiv">
            <h3>
              What are your safeguarding responsibilities and how can you manage
              them?
            </h3>
            <button className="Large-Screen btn">
              <p style={{ color: "var(--Primary)" }}>ReadMore</p>

              <ArrowRightAltIcon />
            </button>
          </div>
        </div>
        <div className="CommunityImgDiv">
          <img src={image20} />
          <div className="initialDiv">
            <h3>Revamping the Membership Model with Triathlon Australia</h3>
            <button className="Large-Screen btn">
              <p style={{ color: "var(--Primary)" }}>ReadMore</p>

              <ArrowRightAltIcon />
            </button>
          </div>
        </div>
      </div>
      {/* Add more image-div pairs as needed */}
    </div>
  );
};

export default Community;
