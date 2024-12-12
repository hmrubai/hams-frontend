import React from "react";
import SustainabilityCover from "../../assets/AllAssets/GoingGreen/sustainability.jpg";
import "./GoingGreen.css";

const heroSection = () => {
  return (
    <>
      <div className="pt-3">
        <img
          className="img-fluid mt-4 rounded"
          src={SustainabilityCover}
          alt="Going Green Cover Image"
        />
      </div>
    </>
  );
};

export default heroSection;
