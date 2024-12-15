import React from "react";
import PaCTProgram from "../../../assets/AllAssets/complianceCSR/compliance/pactprogramcompletion.jpg";
import PACTParticipation from "../../../assets/AllAssets/complianceCSR/compliance/PACTIIParticipation.jpg";
import PSESCollaboration from "../../../assets/AllAssets/complianceCSR/compliance/PSESCollaboration.jpg";
import BestPerformance from "../../../assets/AllAssets/complianceCSR/compliance/BestPerformanceAwardfromSTWI.jpg";
import ZDHCProject from "../../../assets/AllAssets/complianceCSR/compliance/ZDHCProjectCompletion.jpg";
import GIZProject from "../../../assets/AllAssets/complianceCSR/compliance/GIZProjectInitiation.jpg";
import NationalBusiness from "../../../assets/AllAssets/complianceCSR/compliance/NationalBusinessTrophy.jpg";
import RisingStar from "../../../assets/AllAssets/complianceCSR/compliance/RisingStarAward(2021)byKmartAustralia.jpg";
import Supplierkmart from "../../../assets/AllAssets/complianceCSR/compliance/SupplieroftheYear(2022)byKmartAustralia.jpg";
import SupplierNext from "../../../assets/AllAssets/complianceCSR/compliance/SupplierAward(2022)GOLDCategory.jpg";
import "./compliance.css";

const index = () => {
  return (
    <div>
      {/* Title start */}
      <div className="container my-3 text-center">
        <h5 className="fw-bold">
          Milestones Achieved by HAMS Garments Limited
        </h5>
      </div>
      {/* Title end */}

      {/* PaCT, PACT-II & PSES start == */}
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <div className="row text-start">
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={PaCTProgram}
                  className="img-fluid rounded"
                  style={{ width: "600px", height: "270px" }}
                />
                <h5 className="fw-bolder my-2">
                  PaCT Program Completion (2014-15)
                </h5>
                <p className="text-justify">
                  HAMS successfully completed the Partnership for Cleaner
                  Textiles (PaCT) program initiated by H&M and IFC. This program
                  reflects the company's commitment to cleaner and more
                  sustainable textile manufacturing.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={PACTParticipation}
                  className="img-fluid rounded"
                  style={{ width: "500px", height: "250px" }}
                />
                <h5 className="fw-bolder my-2">
                  PACT-II Participation (From 2021)
                </h5>
                <p className="text-justify">
                  Continuing its commitment to sustainability, HAMS actively
                  participates in PACT-II, demonstrating a continuous effort to
                  adhere to higher environmental and social standards.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={PSESCollaboration}
                  className="img-fluid rounded"
                  style={{ width: "500px", height: "250px" }}
                />
                <h5 className="fw-bolder my-2">PSES Collaboration</h5>
                <p className="text-justify">
                  Collaborating with German corporation GIZ and Huntsman, HAMS
                  engaged in the PSES project, emphasizing social and
                  environmental standards in the textile industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PaCT, PACT-II & PSES end == */}

      {/* Best Performance Award & ZDHC Project start == */}
      <div className="container my-2">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">
                  Best Performance Award from STWI
                </h5>
                <div className="photo-text-position-compliance">
                  <div className="photo-text-overlay-compliance text-justify px-2">
                    <p className="text-wrap">
                      HAMS received recognition and the Best Performance Award
                      from STWI (Swedish initiatives) for its outstanding
                      efforts in reducing environmental impact through decreased
                      water and energy consumption and reduced air emissions.
                    </p>
                  </div>
                  <img
                    src={BestPerformance}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">
                  ZDHC Project Completion (2019-20)
                </h5>
                <div className="photo-text-position-compliance">
                  <div className="photo-text-overlay-compliance text-justify px-2">
                    <p className="text-wrap">
                      HAMS successfully completed a Zero Discharge of Hazardous
                      Chemicals (ZDHC) project called "Implementing Chemical
                      Management System," making significant strides in chemical
                      management practices in the textile supply chain. 
                    </p>
                  </div>
                  <img
                    src={ZDHCProject}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Best Performance Award & ZDHC Project end == */}

      {/* GIZ Project, National Business Trophy &  Rising Star Award start == */}
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <div className="row text-start">
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={GIZProject}
                  className="img-fluid rounded"
                  style={{ width: "600px", height: "270px" }}
                />
                <h5 className="fw-bolder my-2">
                  GIZ Project Initiation (2021)
                </h5>
                <p className="text-justify">
                  The company embarked on a GIZ project titled "Digital Solution
                  for Substitution of Hazardous Chemicals in the Fashion Supply
                  Chain," showcasing its commitment to innovative and
                  sustainable solutions.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={NationalBusiness}
                  className="img-fluid rounded"
                  style={{ width: "500px", height: "250px" }}
                />
                <h5 className="fw-bolder my-2">
                  National Business Trophy (2017, 2021)
                </h5>
                <p className="text-justify">
                  HAMS Garments Ltd. received the prestigious National Business
                  Trophy twice, in 2017 and 2021, from the Government of the
                  People’s Republic of Bangladesh, recognizing its excellence in
                  business management.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={RisingStar}
                  className="img-fluid rounded"
                  style={{ width: "500px", height: "250px" }}
                />
                <h5 className="fw-bolder my-2">
                  Rising Star Award (2021) by Kmart Australia
                </h5>
                <p className="text-justify">
                  HAMS received the "Rising Star" award in 2021 from Kmart
                  Australia, underscoring its outstanding performance and rising
                  prominence in the global market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GIZ Project, National Business Trophy &  Rising Star Award start == */}

      {/* Supplier of the Year & Supplier Award start = */}
      <div className="container my-2">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">
                  Supplier of the Year (2022) by Kmart Australia
                </h5>
                <div className="photo-text-position-compliance">
                  <div className="photo-text-overlay-compliance text-justify px-2">
                    <p className="text-wrap">
                      The recognition as "Supplier of the Year" by Kmart
                      Australia in 2022 further solidifies HAMS' reputation as a
                      trusted and valued supplier in the international retail
                      landscape.
                    </p>
                  </div>
                  <img
                    src={Supplierkmart}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">
                  Supplier Award (2022) in GOLD Category from Next Sourcing
                  Bangladesh
                </h5>

                <div className="photo-text-position-compliance">
                  <div className="photo-text-overlay-compliance text-justify px-2">
                    <p className="text-wrap">
                      HAMS Garments Ltd. was honored with the "Supplier Award
                      2022" in the GOLD category by Next Sourcing Bangladesh,
                      reflecting its exceptional performance and contribution to
                      the supply chain. 
                    </p>
                  </div>
                  <img
                    src={SupplierNext}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Supplier of the Year & Supplier Award end = */}

      {/* summary start */}
      <div className="container text-center d-flex flex-column justify-content-center align-items-center">
        <p className="w-100 w-md-75 px-3">
          These milestones showcase HAMS Garments Limited's dedication to
          excellence, sustainability, and responsible business practices,
          positioning it as a leader in the textile and garment industry.
        </p>
      </div>
    </div>
  );
};

export default index;
