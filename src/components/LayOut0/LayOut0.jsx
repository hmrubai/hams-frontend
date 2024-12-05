// // import React from 'react'

// import CustomerSection from "../LayOut0/CustomerSection";
// import ElevatingSection from "../LayOut0/ElevatingSection";
// import HeroBanner from "../LayOut0/HeroBanner";
// import JourneySection from "../LayOut0/JourneySection";
// // import MobileTimeline from "../LayOut0/MobileTimeline";
// import OurClient from "../LayOut0/OurClient";
// import ProcessSection from "../LayOut0/ProcessSection";
// import QualitySection from "../LayOut0/QualitySection";
// // import WeAre from "../LayOut0/WeAre";
// import WeAre from "./WeAre";
// import OwnerMessage from "./OwnerMessage";
// import OwnerMessageMobile from "./OwnerMessageMobile";
// import TimeLineM from "./TimeLineM";
// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Layout0 = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const section = document.getElementById(location.hash.substring(1));
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);
//   return (
//     <div className="">
//       <HeroBanner></HeroBanner>
//       {/* <WeAre id="we-are-section" /> */}
//       <WeAre id="we-are-section" />
//       <JourneySection></JourneySection>
//       <TimeLineM></TimeLineM>
//       <ProcessSection></ProcessSection>
//       <QualitySection></QualitySection>
//       <OwnerMessage></OwnerMessage>
//       <OwnerMessageMobile />
//       <OurClient></OurClient>
//       <ElevatingSection></ElevatingSection>
//       <CustomerSection></CustomerSection>
//       {/* <MobileTimeline></MobileTimeline> */}
//     </div>
//   );
// };

// export default Layout0;

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import HeroBanner from "../LayOut0/HeroBanner";
// import WeAre from "./WeAre";
// import JourneySection from "../LayOut0/JourneySection";
// import TimeLineM from "./TimeLineM";
// import ProcessSection from "../LayOut0/ProcessSection";
// import QualitySection from "../LayOut0/QualitySection";
// import OwnerMessage from "./OwnerMessage";
// import OwnerMessageMobile from "./OwnerMessageMobile";
// import OurClient from "../LayOut0/OurClient";
// import ElevatingSection from "../LayOut0/ElevatingSection";
// import CustomerSection from "../LayOut0/CustomerSection";

// const Layout0 = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const section = document.getElementById(location.hash.substring(1));
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <div>
//       <HeroBanner />
//       <div id="we-are-section">
//         <WeAre />
//       </div>
//       <JourneySection />
//       <TimeLineM />
//       <ProcessSection />
//       <QualitySection />
//       <OwnerMessage />
//       <OwnerMessageMobile />
//       <OurClient id="client" />

//       <div id="certifications">
//         <ElevatingSection />
//       </div>
//       <CustomerSection />
//     </div>
//   );
// };

// export default Layout0;

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import HeroBanner from "../LayOut0/HeroBanner";
// import WeAre from "./WeAre";
// import JourneySection from "../LayOut0/JourneySection";
// import TimeLineM from "./TimeLineM";
// import ProcessSection from "../LayOut0/ProcessSection";
// import QualitySection from "../LayOut0/QualitySection";
// import OwnerMessage from "./OwnerMessage";
// import OwnerMessageMobile from "./OwnerMessageMobile";
// import OurClient from "../LayOut0/OurClient";
// import ElevatingSection from "../LayOut0/ElevatingSection";
// import CustomerSection from "../LayOut0/CustomerSection";

// const Layout0 = () => {
//   const location = useLocation();

//   // Assuming you have an object or a function that determines if a section is active or inactive
//   const sectionStatus = {
//     weAre: true,
//     journey: true,
//     timeLine: true,
//     process: true,
//     quality: true,
//     ownerMessage: true,
//     ownerMessageMobile: false,
//     client: true,
//     elevating: true,
//     customer: true,
//   };

//   useEffect(() => {
//     if (location.hash) {
//       const section = document.getElementById(location.hash.substring(1));
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <div>
//       <HeroBanner />
//       {sectionStatus.weAre && (
//         <div id="we-are-section">
//           <WeAre />
//         </div>
//       )}
//       {sectionStatus.journey && <JourneySection />}
//       {sectionStatus.timeLine && <TimeLineM />}
//       {sectionStatus.process && <ProcessSection />}
//       {sectionStatus.quality && <QualitySection />}
//       {sectionStatus.ownerMessage && <OwnerMessage />}
//       {sectionStatus.ownerMessageMobile && <OwnerMessageMobile />}
//       {sectionStatus.client && <OurClient />}
//       {sectionStatus.elevating && <ElevatingSection />}
//       {sectionStatus.customer && <CustomerSection />}
//     </div>
//   );
// };

// export default Layout0;

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import HeroBanner from "../LayOut0/HeroBanner";
// import WeAre from "./WeAre";
// import JourneySection from "../LayOut0/JourneySection";
// import TimeLineM from "./TimeLineM";
// import ProcessSection from "../LayOut0/ProcessSection";
// import QualitySection from "../LayOut0/QualitySection";
// import OwnerMessage from "./OwnerMessage";
// import OwnerMessageMobile from "./OwnerMessageMobile";
// import OurClient from "../LayOut0/OurClient";
// import ElevatingSection from "../LayOut0/ElevatingSection";
// import CustomerSection from "../LayOut0/CustomerSection";

// const Layout0 = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const section = document.getElementById(location.hash.substring(1));
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <div>
//       <HeroBanner />
//       <div id="we-are-section">
//         <WeAre />
//       </div>
//       <JourneySection />
//       <TimeLineM />
//       <ProcessSection />
//       <QualitySection />
//       <OwnerMessage id="owner" />
//       <OwnerMessageMobile />
//       <OurClient id="client" />
//       <div id="certifications">
//         <ElevatingSection />
//       </div>
//       <CustomerSection />
//     </div>
//   );
// };

// export default Layout0;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeroBanner from "../LayOut0/HeroBanner";
import WeAre from "./WeAre";
import JourneySection from "../LayOut0/JourneySection";
import TimeLineM from "./TimeLineM";
import ProcessSection from "../LayOut0/ProcessSection";
import QualitySection from "../LayOut0/QualitySection";
import OwnerMessage from "./OwnerMessage";
import OwnerMessageMobile from "./OwnerMessageMobile";
import OurClient from "../LayOut0/OurClient";
import ElevatingSection from "../LayOut0/ElevatingSection";
import CustomerSection from "../LayOut0/CustomerSection";

const Layout0 = () => {
  const location = useLocation();
  const [hash, setHash] = useState();
  useEffect(() => {
    setHash(location.hash);
  }, []);
  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500);
      } else {
        console.warn("Section not found:", location.hash.substring(1));
      }
    }
  }, [hash]);

  return (
    <div>
      <HeroBanner />
      <div id="we-are-section">
        <WeAre />
      </div>
      <JourneySection />
      <TimeLineM />
      <ProcessSection />
      <div>{/* <OwnerMessage /> */}</div>
      {/* <OwnerMessageMobile /> */}
      <div>
        <OurClient />
      </div>
      <div>
        <ElevatingSection />
      </div>
      <CustomerSection id="com" />
    </div>
  );
};

export default Layout0;
