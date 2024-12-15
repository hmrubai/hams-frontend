import React from "react";
import ImpactStoriesCover from "../../assets/AllAssets/impactStore/impactStories.jpg";

const heroSection = () => {
  return (
    <div className="pt-3">
      <img
        className="img-fluid mt-4 rounded"
        src={ImpactStoriesCover}
        alt="Impact Stories Cover Image"
      />
    </div>
  );
};

export default heroSection;
