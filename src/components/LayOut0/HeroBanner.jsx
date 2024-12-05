import React from "react";
import "./Layout.css";
import { FaArrowRight } from "react-icons/fa";
import Image1 from "../../assets/otherPageCover/aboutUs.jpg";

const HeroBanner = () => {
  return (
    <section>
      <div className="heroTextStyle">
        <div className="d-flex flex-column align-items-center text-white"></div>
      </div>
      <img className="img-fluid my-2 rounded" src={Image1} alt="" />
    </section>
  );
};

export default HeroBanner;
