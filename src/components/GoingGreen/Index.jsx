import React from "react";
import HeroSection from "./heroSection";
import IntroduceGoal from "./commitmentHAMS";
import ReducingImpact from "./ReducingEnvironmenta";
import SocialResponsibility from "./socialResponsibility";
import EAR from "./ear";
import CommunityEngagement from "./communityEngagement";
import ECC from "./ecc";
import InnovationSustainable from "./innovationSustainable";
import ConclusionPDF from "./conclusionPDF";

const Index = () => {
  return (
    <>
      {/* Hero Section Cover Image Of Going Green */}
      <HeroSection />
      {/* Introduction & Goals of Going Green */}
      <IntroduceGoal />
      {/* Reducing Environmental Impact of Going Green */}
      <ReducingImpact />
      {/* Social Responsibility of Going Green  */}
      <SocialResponsibility />
      {/* Ethical,Achievements & Reduction of Going Green  */}
      <EAR />
      {/* Community Engagement of Going Green  */}
      <CommunityEngagement />
      {/* Employee,Challenges & Continuous of Going Green  */}
      <ECC />
      {/* Innovations & sustainable practices of Going Green  */}
      <InnovationSustainable />
      {/* Conclusion & PDF Download of Going Green  */}
      <ConclusionPDF />
    </>
  );
};

export default Index;
