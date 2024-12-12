import React from "react";
import "./GoingGreen.css";

const commitmentHAMS = () => {
  return (
    <>
      {/* Company Introduce & Commitment Section */}
      <div className="container text-center my-4">
        <h5>HAMS Garments Limited</h5>
        <h5 className="text-bold fs-4 my-3">A Commitment to Sustainability</h5>
      </div>
      {/* Added Border */}
      <div className="border-top border-1"></div>

      {/* Introduction & Goals Section*/}
      <div className="container my-3 text-justify">
        <p className="my-2">
          <span className="fw-bold">Introduction:</span> HAMS Garments Limited
          (HAMSGL) is a prominent player in the textile and garment
          manufacturing industry, renowned not only for its high-quality
          products but also for its unwavering commitment to sustainability.
          This case study delves into HAMSGL's sustainability promises,
          highlighting key initiatives, achievements, and the impact on both the
          environment and the community.
        </p>
        <p className="my-3">
          <span className="fw-bold">Sustainability Goals:</span>HAMSGL has set
          ambitious sustainability goals, aligning with global standards and
          industry best practices. The goals encompass various facets of
          sustainability, including environmental conservation, social
          responsibility, and ethical business practices.
        </p>
      </div>
    </>
  );
};

export default commitmentHAMS;
