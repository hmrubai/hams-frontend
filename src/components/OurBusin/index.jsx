import React from "react";
import HeroSection from "./heroSection";
import BusinessOverview from "./businessOverview";
import ProductRange from "./productRange";
import FofarSection from "./fofarSection";
import KnittingUnit from "./knittingUnit";
import DyeingAndFinishing from "./dyeingAndFinishing";
import GarmentUnit from "./garmentUnit";
import PetUnit from "./petUnit";
import Sustainability from "./sustainabilityInitiatives";
import FactoryGMap from "./factoryGMap";

const index = () => {
  return (
    <>
      {/* Cover Image of Our Business  */}
      <HeroSection />
      {/* Business Overview of Our Business */}
      <BusinessOverview />
      {/* Product Range of Our Business  */}
      <ProductRange />
      {/* Fabrication Strengths,Organic,Fancy Fabric &  Recycles Sustainable Of Our Business */}
      <FofarSection />
      {/* Knitting Units Section of Our Business */}
      <KnittingUnit />
      {/* Dyeing & Finishing Unit Section of Our Business  */}
      <DyeingAndFinishing />
      {/* Garments Unit of Our Business */}
      <GarmentUnit />
      {/* Printing Section, Embroidery Unit & Textile Lab  of Our Business */}
      <PetUnit />
      {/* Sustainability Initiatives of Our Business */}
      <Sustainability />
      {/* Factory Google Map Location of Our Business */}
      <FactoryGMap />
    </>
  );
};

export default index;
