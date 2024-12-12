import React from "react";
import EthicalPractices from "../../assets/AllAssets/GoingGreen/EAR/Ethical-Business-Practices.jpg";
import Achievements from "../../assets/AllAssets/GoingGreen/EAR/Achievements&impact.jpg";
import ReductionCarbon from "../../assets/AllAssets/GoingGreen/EAR/Reduction-Carbon-Emissions.jpg";
import "./GoingGreen.css";

const ear = () => {
  return (
    <>
      <div className="container my-4">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold my-2">Ethical Business Practices</h5>
                <div className="photo-text-sustainability">
                  <div className="text-start text-justify photo-text-overlay-sustainability">
                    <p className="fw-bolder mx-3">
                      <span className="fw-bold">
                        Compliance Certifications:
                      </span>{" "}
                      HAMSGL holds several certifications, including ACCORD, RMG
                      Sustainability Council (RSC), Sedex, WRAP, Higg Index, and
                      BSCI. These certifications validate the company's
                      adherence to ethical, social, and environmental standards.
                    </p>
                  </div>
                  <img
                    src={EthicalPractices}
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                    alt="Ethical Business Practices Images"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold my-2">Achievements and impact</h5>
                <div className="photo-text-sustainability">
                  <div className="text-start text-justify  photo-text-overlay-sustainability">
                    <p className="fw-bolder mx-3">
                      HAMSGL has made significant strides in its sustainability
                      journey, leading to positive outcomes
                    </p>
                  </div>
                  <img
                    src={Achievements}
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                    alt=" Achievements and Impact Image"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold my-2">Reduction in Carbon Emissions</h5>
                <div className="photo-text-sustainability">
                  <div className="text-start photo-text-overlay-sustainability text-justify">
                    <p className="fw-bolder mx-3">
                      By investing in energy-efficient machinery and modifying
                      processes, HAMSGL has achieved a noteworthy reduction in
                      carbon emissions, contributing to a greener and more
                      sustainable future.
                    </p>
                  </div>
                  <img
                    src={ReductionCarbon}
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                    alt=" Reduction in Carbon Emissions Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ear;
