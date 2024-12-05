// import React from 'react'
import { useEffect } from "react";
import LatestProducts from "../HomePage/LatestProducts/LatestProducts";
import Achievment from "./Achievment";
import Carousels from "./Carousels";
// import Faq from "./Faq";
// import Faqdata from "./Faqdata";
// import Footer from "./Footer";
import Products from "./Products";
import TabProduct from "./TabProduct";
// import './Faq.css';
// import TestDemo from "./testDemo";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.from === "readMore") {
      window.scrollTo(0, 700); // Adjust this value according to your needs
    }
  }, [location]);

  return (
    <div>
      <Carousels></Carousels>
      {/* <LatestProducts></LatestProducts> */}
      <TabProduct></TabProduct>

      {/* <Products></Products>    */}
      <Achievment ></Achievment>
      {/* <Faq></Faq> */}
      {/* <Footer></Footer>             */}

      {/* <Faqdata></Faqdata> */}

      {/* <TestDemo></TestDemo> */}
    </div>
  );
};
