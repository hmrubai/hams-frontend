import React from "react";
import CoverSlider from "./SliderCover/index";
import HomeAbout from "./About/index";
import DSDMP from "./DSDMP/index";
import OtherCompany from "./OtherCompany/index";
import DiscoverOffer from "./Discover/index";

const index = () => {
  return (
    <>
      {/* Home Slider Component */}
      <CoverSlider />
      {/* About HAMS Component */}
      <HomeAbout />
      {/* Design Center,3D Sampling,Digital Payment,Medical Facilities & POLICIES Component */}
      <DSDMP />
      {/* Other Company Business Details Component */}
      <OtherCompany />
      {/* Discover What We Offer Component */}
      <DiscoverOffer />
    </>
  );
};

export default index;
