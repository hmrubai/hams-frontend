import React from "react";
import ProductServiceCover from "../../assets/AllAssets/ProductService/productServices.jpg";

const heroSection = () => {
  return (
    <>
      <div className="pt-3">
        <img
          className="img-fluid mt-4 rounded"
          src={ProductServiceCover}
          alt="Product & Service Cover Image"
        />
      </div>
    </>
  );
};

export default heroSection;
