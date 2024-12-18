import React from "react";
import ProductServiceCover from "./heroSection";
import ProductServiceTab from "./PSTab";
import Achievement from "./achievement";
const index = () => {
  return (
    <>
      {/* Product & Service Cover Image component  */}
      <ProductServiceCover />
      {/* Product & Service Tab Content */}
      <ProductServiceTab />
      {/* ACHIEVEMENTS Component  */}
      <Achievement />
    </>
  );
};

export default index;
