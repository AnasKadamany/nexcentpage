import React from "react";
import Logo from "../../Images/Nex.svg";
import "./Navbar.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Navbar">
      {/* Logo  / Right Side */}
      <div className="n-left">
        <img src={Logo} />
      </div>
      {/* Left Side */}
      <div className="n-right">
        <a className="Large-Screen" href="/Home">
          Home
        </a>
        <a className="Large-Screen" href="/Features">
          Features
        </a>
        <a className="Large-Screen" href="/Community">
          Community
        </a>
        <a className="Large-Screen" href="/Blog">
          Blog
        </a>
        <a className="Large-Screen" href="/Pricing">
          Pricing
        </a>
        <button className="Large-Screen btn margin-left">
          <p>Register Now</p>

          <ArrowRightAltIcon />
        </button>

        <MenuIcon
          style={{ fontSize: "3rem" }}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="Small-Screen"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Features</MenuItem>
          <MenuItem onClick={handleClose}>Community</MenuItem>
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Pricing</MenuItem>
          <MenuItem onClick={handleClose}>Register Now</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
