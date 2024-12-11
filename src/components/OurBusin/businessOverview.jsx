import React from "react";
import WorldMap from "../../assets/AllAssets/ourBusiness/worldMap.png";

const businessOverview = () => {
  return (
    <>
      {/* Company Name & Overview for Our Business Section */}
      <div className="container">
        <div className="justify-content-center text-center my-5">
          <span className="fs-6">HAMS Garments Limited</span>
          <h3 className="fs-3 mt-2 fw-bold">Business Overview</h3>
        </div>
      </div>
      {/* World Map for Our Business Overview */}
      <img
        className="img-fluid mt-1"
        src={WorldMap}
        alt="Business Overview"
        style={{ width: "100%", height: "600px" }}
      />
    </>
  );
};

export default businessOverview;
