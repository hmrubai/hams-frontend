import React from "react";
import "./CSR.css";
import section2 from "../../assets/csrSection/baby.jpeg";
import section8 from "../../assets/csrSection/bkash.jpeg";
import section7 from "../../assets/csrSection/care.jpeg";
import section6 from "../../assets/csrSection/cdc.jpeg";
import section5 from "../../assets/csrSection/crp.jpeg";
import section1 from "../../assets/csrSection/gear.jpeg";
import section4 from "../../assets/csrSection/maya.jpeg";
import section3 from "../../assets/csrSection/mother.jpeg";
import rightArrow from "../../assets/right-arrow.png";
import Service from "./SingleCSR";

const CSR = () => {
  const csrData = [
    {
      id: "1",
      line1: "GEAR Project April, 2019",
      line2: "Collaboration with H&M Buyer.",
      line3: "Present situation: On going",
      line4: "",
      image: section1,
    },
    {
      id: "2",
      line1: "Better Business for Childrent 09.08.2018",
      line2: "Collaboration with El-Courte Engles Buyer.",
      line3: "Present situation: On going",
      line4: "",
      image: section2,
    },
    {
      id: "3",
      line1: "Mothers@Work Project ,December 03,2018",
      line2: "Collaboration with M&S & K-mart Buyer.",
      line3: "Present Situation: On going",
      line4: "",
      image: section3,
    },
    {
      id: "4",
      line1: "Maya Project: Sep, 2020",
      line2: "Collaboration with M&S Buyer.",
      line3: "Present Situation: On going",
      line4: "",
      image: section4,
    },
    {
      id: "5",
      line1: "Working opportunity for physical",
      line2: "challenges / disable people",
      line3: "Present situation: On going",
      line4: "",
      image: section5,
    },
    {
      id: "6",
      line1: "BRAC-CDC (Centre for Disease Control):Aug, 2020",
      line2: "Collaboration with M&S Buyer.",
      line3: "Present Situation: On going",
      line4: "",
      image: section6,
    },
    {
      id: "7",
      line1: "Health access & Linkage Opportunities for workers",
      line2: "Halow + Project 2.07.2018",
      line3: "Collaboration with M&S Buyer",
      line4: "Present situation: On going",
      image: section7,
    },
    {
      id: "8",
      line1: "BSR- HER Finance Project: July, 2017",
      line2: "Digital payment system for all workers.",
      line3: "100% salary payment through mobile banking (bkash)",
      line4: "",
      image: section8,
    },
  ];
  return (
    <div>
      <section className="services-menu-section-bg-image d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center"></div>
        <h1 className="text-white text-center">
          Do Well, Live Well & <br />
          <span className="hero-text">Dress</span> Very Well
        </h1>
        <div className="d-flex">
          <p className="text-white mb-0 mx-2">Home</p>
          <img src={rightArrow} className="mx-2" alt="" srcSet="" />
          <p className="text-white mb-0 mx-2">Complience & CSR</p>
        </div>
      </section>

      <section className="">
        <div className="container-fluid">
          <div className="">
            <div className="row main-container justify-content-center mx-auto">
              <div className="col-lg-8 col-md-10 col-sm-12">
                {csrData.map((service) => (
                  <Service key={service.id} service={service}></Service>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
