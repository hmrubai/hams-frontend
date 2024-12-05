import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import About from "../About/About";
import LatestProducts from "../LatestProducts/LatestProducts";
import Sustainability from "../Sustainability/Sustainability";
import ContactUs from "../ContactUs/ContactUs";
import Certifications from "../Certifications/Certifications";
import OurClients from "../OurClients/OurClients";
import VirtualWalkThrough from "../VirtualWalkThrough/VirtualWalkThrough";
import Achievements from "../Achievements/Achievements";
import { useLoaderData } from "react-router-dom";
import About2 from "../About/About2";
import Discover5 from "../Discover/Discover5";
import Accord from "../HeroCarousel/Accord";
import CardSlider from "../CardSlider/CardSlider";
import SampleCarousel from "../CardSlider/SampleCarousel";
import { ToastContainer } from "react-toastify";
// import Discover2 from '../Discover/Discover2';
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <HeroCarousel />
      {/* <About /> */}
      {/* <Accord></Accord> mu */}
      <About2 />
      <Achievements />
      <CardSlider />
      {/* <SampleCarousel/> */}
      <Discover5 />
      <LatestProducts />
      <VirtualWalkThrough />
      <Sustainability />
      <Certifications />
      <OurClients />
      <ContactUs />
      <ToastContainer />
    </div>
  );
};

export default Home;
