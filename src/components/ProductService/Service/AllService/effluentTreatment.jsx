import React from "react";
import ETPPhoto from "../../../../assets/AllAssets/ProductService/Service/EffluentTreatmentPlant.jpg";
import SustainabilityPhoto from "../../../../assets/AllAssets/ProductService/Service/SustainableMilestones.jpg";
import "./AllService.css";

const effluentTreatment = () => {
  return (
    <>
      <div className="container my-3 mx-3">
        <div>
          <h5 className="fw-bold fs-3">Effluent Treatment Plant</h5>
          <p className="my-3 text-justify">
            At HAMS Garments Limited, the Effluent Treatment Plant (ETP) serves
            as a pivotal component in the company's commitment to environmental
            responsibility. This concise overview sheds light on the ETP
          </p>
        </div>

        <div
          className="my-3 rounded"
          style={{
            backgroundColor: "rgba(255, 204, 128, 0.1)",
            boxShadow: "0 2px 4px #0003, 0 6px 12px #00000030",
          }}
        >
          <div className="d-flex flex-column flex-md-row">
            <div>
              <div className="photo-text-product">
                <div className="photo-text-overlay-product"></div>
                <img
                  src={ETPPhoto}
                  alt=""
                  className="img-fluid rounded"
                  style={{ width: "1200px", height: "200px" }}
                />
              </div>
            </div>
            <div className="ms-0 mt-3 mt-md-0 ms-md-5 me-1 justify-items-center align-content-center text-justify">
              <p style={{ fontSize: "18px" }} className="fw-bolder">
                Innovative Transformation
              </p>
              <p
                className="my-3 me-2 text-justify"
                style={{ fontSize: "14px" }}
              >
                The ETP has undergone a significant innovation journey,
                transitioning from a conventional biological system to a more
                advanced Membrane Bio Reactor (MBR). This forward-looking step
                places HAMS at the forefront of eco-friendly textile processing.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h5 className="fw-bold fs-5">Sustainable Milestones</h5>
        </div>
        <div className="photo-text-product my-3">
          <div className="photo-text-overlay-product text-center">
            <p className="fw-bolder mx-5 ">
              <span>
                {" "}
                HAMS Garments Limited has set ambitious sustainability goals,
                targeting a 50% reduction in energy and water consumption per
                unit by 2030 from the 2020 baseline.
              </span>{" "}
              <br />
              <span>
                The ETP's transition to MBR is a foundational step, aligning
                with HAMS' commitment to a 40% reduction in greenhouse gas
                emissions per unit by 2030.
              </span>
            </p>
            <br />
          </div>
          <img
            className="img-fluid rounded"
            src={SustainabilityPhoto}
            alt=""
            style={{ height: "300px", width: "1100px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="my-3 w-75  container text-center text-justify">
        <p>
          In essence, the ETP at HAMS Garments Limited not only ensures
          compliance with environmental regulations but also propels the company
          toward a greener and more sustainable future in the textile industry.
        </p>
      </div>
    </>
  );
};

export default effluentTreatment;
