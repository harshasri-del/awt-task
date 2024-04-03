import React from "react";
import "./Header.css";
import NavbarHeader from "../NavbarHeader/NavbarHeader.js";
import Carousel from "../Carousel/Carousel.js";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="header-background">
        <div className="header-container">
          <NavbarHeader />
          <Carousel />

          <div className="icons-conatiner">
            <FaFacebook size={32} />
            <RiInstagramFill size={32} color="white" />
            <FaLinkedin size={32} color="white" />
            <FaSquareXTwitter size={32} color="white" />
          </div>
        </div>
      </div>
      <div className="logo-container">
        <img src="/assets/logo.png" alt="logo" className="logo rotate" />
        <img src="/assets/awt-logo.png" alt="logo" className="center-image" />
      </div>
    </>
  );
};

export default Header;
