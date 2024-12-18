import React from "react";
import CoverSlider from "./SliderCover/index";
import HomeAbout from "./About/index";
import DSDMP from "./DSDMP/index";
import OtherCompany from "./OtherCompany/index";
import DiscoverOffer from "./Discover/index";
import ProductHome from "./ProductHome/index";
import ExploreVirtually from "./ExploreHAMS/index";
import SustainableHome from "./SustainabilityHome/index";
import AchievementsHome from "./Achievement/index";
import OurClientsHome from "./OurClient/index";
import ContactUsHome from "./ContactHome/Index";

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
      {/* Our Products for Home Component */}
      <ProductHome />
      {/* Explore HAMS Garments Virtually Component  */}
      <ExploreVirtually />
      {/* Sustainable for Home Component  */}
      <SustainableHome />
      {/* Our Achievements for Home Component  */}
      <AchievementsHome />
      {/* Our Clients for Home Component  */}
      <OurClientsHome />
      {/* Contact Us for Home Component  */}
      <ContactUsHome />
    </>
  );
};

export default index;
