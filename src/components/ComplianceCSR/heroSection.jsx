import React from "react";
import ComplianceCSRCover from "../../assets/AllAssets/complianceCSR/Covercompliance.jpg";

const heroSection = () => {
  return (
    <>
      <div className="pt-3">
        <img
          className="img-fluid mt-4 rounded"
          src={ComplianceCSRCover}
          alt="Compliance & CSR Cover Image"
        />
      </div>
    </>
  );
};

export default heroSection;
