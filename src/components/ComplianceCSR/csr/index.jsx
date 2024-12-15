import React from "react";
import DigitalPayment from "../../../assets/AllAssets/complianceCSR/csr/Digital-Payment-System.jpg";
import HealthcareEducation from "../../../assets/AllAssets/complianceCSR/csr/Healthcare&Education-Initiatives.jpg";
import SustainableFabric from "../../../assets/AllAssets/complianceCSR/csr/Sustainable-Fabric-Production.jpg";
import Women from "../../../assets/AllAssets/complianceCSR/csr/Women-Empowerment.jpg";
import WorkersWelfare from "../../../assets/AllAssets/complianceCSR/csr/Workers-Welfare.jpg";
import "./Csr.css";

const index = () => {
  return (
    <>
      {/* Title start */}
      <div className="container my-3 text-center">
        <h5 className="fw-bold mb-3">CSR Activities</h5>
        <p className="mx-auto text-start text-md-center w-100 w-md-75 px-md-4">
          HAMS Garments Limited (HAMSGL) is deeply committed to Corporate Social
          Responsibility (CSR), integrating ethical practices and sustainability
          into its core business values. The company's CSR initiatives extend
          across various dimensions, making a positive impact on both local
          communities and the environment. Some key CSR activities of HAMSGL
          include
        </p>
      </div>

      {/* Title end */}

      {/* Workers' Welfare, Digital Payment System & Healthcare and Education start== */}
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <div className="row text-start">
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={WorkersWelfare}
                  className="img-fluid rounded"
                  style={{ width: "600px", height: "270px" }}
                />
                <h5 className="fw-bolder my-2">Workers' Welfare</h5>
                <p className="text-justify">
                  HAMSGL places a strong emphasis on the well-being of its
                  workforce. Initiatives such as health access and linkage
                  opportunities, employment opportunities for individuals with
                  physical challenges, and ongoing projects like Mothers@Work
                  and Halow+ underscore the company's dedication to fostering a
                  supportive and inclusive workplace.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={DigitalPayment}
                  className="img-fluid rounded"
                  style={{ width: "500px", height: "250px" }}
                />
                <h5 className="fw-bolder my-2">Digital Payment System</h5>
                <p className="text-justify">
                  HAMSGL has implemented a 100% digital payment system, ensuring
                  transparent and efficient salary distribution to all workers
                  through mobile banking. This initiative not only enhances
                  financial accessibility but also aligns with modern,
                  technology-driven practices.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-2">
                <img
                  src={HealthcareEducation}
                  className="img-fluid rounded"
                  style={{ width: "500px", height: "250px" }}
                />
                <h5 className="fw-bolder my-2">
                  Healthcare and Education Initiatives
                </h5>
                <p className="text-justify">
                  Collaborative projects with buyers like El-Courte Engles, M&S,
                  and BRAC-CDC demonstrate HAMSGL's commitment to healthcare and
                  education. These projects aim to provide health access,
                  educational opportunities, and empowerment to workers and
                  their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Workers' Welfare, Digital Payment System & Healthcare and Education end== */}

      {/* Sustainable Fabric,Women's Empowerment start */}
      <div className="container my-2">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">Sustainable Fabric Production</h5>
                <div className="photo-text-position-csr">
                  <div className="photo-text-overlay-csr text-justify px-2">
                    <p className="text-wrap">
                      HAMSGL integrates sustainability into its fabric
                      production processes. Efforts to reduce energy
                      consumption, greenhouse gas emissions, and water usage per
                      unit by 2030 showcase the company's dedication to
                      environmentally conscious manufacturing.
                    </p>
                  </div>
                  <img
                    src={SustainableFabric}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">Women's Empowerment</h5>

                <div className="photo-text-position-csr">
                  <div className="photo-text-overlay-csr text-justify px-2">
                    <p className="text-wrap">
                      The Maya Project collaboration with M&S and other
                      initiatives contribute to the empowerment of women,
                      offering them working opportunities and support.
                    </p>
                  </div>
                  <img
                    src={Women}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sustainable Fabric,Women's Empowerment end */}

      {/* conclusion start */}
      <div className="container text-center py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <p className="fs-6 text-start text-md-center">
              HAMSGL's CSR endeavors exemplify a holistic approach that goes
              beyond compliance, aiming to create a positive impact on the lives
              of its employees and the communities it operates in. The company's
              commitment to ethical business practices and sustainable
              development reinforces its position as a socially responsible
              player in the garment manufacturing industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
