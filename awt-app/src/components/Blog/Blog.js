import React from "react";
import { useState, useEffect } from "react";
import "./Blog.css";
import { FaStar } from "react-icons/fa";

const Blog = () => {
  const words = ["Triumph.", "Triumph.", "Victory.", "Excellence.", "Success."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className="blog-container">
      <div className="left-container">
        <div className="star-icon-text">
          <FaStar className="star-icon" color="#FF7143" />
          <span className="left-para">YOUR GO-TO COMPANY FOR IT SOLUTIONS</span>
        </div>
        <div className="sec-left">
          <h1 className="sec-left-heading">
            Partner for your Digital{" "}
            <span className="span-heading">{words[index]}</span>
          </h1>
        </div>
        <p className="left-third-para">
          We amplify the value of your digital presence, propelling your brand
          to new heights.
        </p>
      </div>
      <div className="right-container">
        <div className="three-blocks">
          <div className="box">
            <h1 className="small-heading1">6+</h1>
            <p className="small-para">YEARS EXPERIENCE</p>
          </div>
          <div className="box">
            <h1 className="small-heading1">3</h1>
            <p className="small-para">LOCATIONS</p>
          </div>
          <div className="box">
            <h1 className="small-heading1">
              150+ <span className="span-small-heading">Global</span>
            </h1>
            <p className="small-para">SATISFIED CLIENTS</p>
          </div>
        </div>

        <p className="right-third-para">
          At the heart of our service lies a dedication to fulfilling your
          needs, prioritizing your requirements, and ensuring your utmost
          satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Blog;
