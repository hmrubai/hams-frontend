import React from "react";
import AboutCover from "./heroSection";
import AboutUsData from "./AboutUsAbout/index";
import JourneyAbout from "./JourneyAbout/index";
import JourneyAboutSM from "./JourneyAbout/indexSm";
import OurConcernAbout from "./OurConcern/index";
import BoardOfDirectorHAMS from "./boardDirectorHAMS";
import CurrentClientAbout from "./CurrentClient/index";
import OurCertificationAbout from "./OurCertification/index";
import AnyQueries from "./AnyQueries";

const index = () => {
  return (
    <>
      {/* About Cover  */}
      <AboutCover />
      {/* About Us Component  */}
      <AboutUsData />
      {/* Our Journey for About [md device] Component  */}
      <JourneyAbout />
      {/* Our Journey for About [sm device] Component  */}
      <JourneyAboutSM />
      {/* Our Concerns for About Component  */}
      <OurConcernAbout />
      {/* Board Of Directors for About Component  */}
      <BoardOfDirectorHAMS />
      {/* Current Client for About Component  */}
      <CurrentClientAbout />
      {/* Our Certifications for About Component  */}
      <OurCertificationAbout />
      {/* Any Queries / Contact for About Component  */}
      <AnyQueries />
    </>
  );
};

export default index;
