// import React from "react";
import "./CardSlider.css";

import { Link } from "react-router-dom";

const SampleCarousel = ({ data }) => {
  const { image, title, description, link } = data;
  return (
    <div className="mx-4 ">
      <Link to={link}>
        <div className="image-container">
          <img
            src={image}
            // className="zoom-effect"
            className=""
            style={{ height: "250px", width: "350px" }}
            alt=""
            srcSet=""
          />
        </div>
      </Link>
    </div>
  );
};

export default SampleCarousel;
