import React from "react";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <a href="#">
        <img src={Logo} alt="" />
      </a>
      <a href="#">
        <span className="profle-text">Profile</span>
      </a>
    </div>
  );
};

export default Header;
