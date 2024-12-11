import React from "react";
import HeroOurBusinessCover from "../../assets/AllAssets/ourBusiness/heroOurBusiness.jpg";

const HeroSection = () => {
  return (
    <div className="pt-3">
      <img
        className="img-fluid mt-4 rounded"
        src={HeroOurBusinessCover}
        alt="Our Business Cover Image"
      />
    </div>
  );
};

export default HeroSection;
