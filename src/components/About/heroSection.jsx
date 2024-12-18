import React from "react";
import AboutCover from "../../assets/AllAssets/About/aboutUs.jpg";

const heroSection = () => {
  return (
    <>
      <div className="pt-3">
        <img
          className="img-fluid mt-4 rounded"
          src={AboutCover}
          alt="About Cover Image"
        />
      </div>
    </>
  );
};

export default heroSection;
