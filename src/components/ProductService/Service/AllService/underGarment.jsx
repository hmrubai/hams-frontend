import React from "react";
import "./AllService.css";
import ProductLineUD from "../../../../assets/AllAssets/ProductService/Service/ProductionLinesofundergarments.jpg";
import HealthierEcosystems from "../../../../assets/AllAssets/ProductService/Service/HealthierEcosystems.jpg";

const underGarment = () => {
  return (
    <div className="container my-3 mx-3">
      <>
        <h3 className="fw-bold fs-3">Under garments unit</h3>
        <p className="my-3 text-justify">
          HAMS Garments Limited (HAMSGL) has a dedicated undergarments unit that
          specializes in the production of high-quality lingerie, underwear,
          boxers, and bras. Here are some key highlights of this unit
        </p>
      </>

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
              <div className="photo-text-overlay-product">
                <p className="text-justify mx-3">
                  Production Lines <br />{" "}
                  <span style={{ fontSize: "14px" }}>
                    The undergarments unit consists of 40 specialized production
                    lines.he undergarments unit consists of 40 specialized
                    production lines.
                  </span>
                </p>
              </div>
              <img
                src={ProductLineUD}
                alt=""
                className="img-fluid rounded"
                style={{ width: "1200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="ms-0 mt-3 mt-md-0 ms-md-5 me-1 justify-items-center align-content-center text-justify">
            <p style={{ fontSize: "18px" }} className="fw-bolder">
              Monthly Output
            </p>
            <p className="my-3 me-2 text-justify" style={{ fontSize: "14px" }}>
              The unit boasts a robust monthly production capacity of
              approximately 3,500,000 pieces.
            </p>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="d-flex gap-5">
          <div className="text-justify">
            <h5 className="fw-bold text-justify">Diverse Product Range</h5>
            <p className="my-3 me-2 text-justify">
              HAMSGL's undergarments unit produces a wide variety of products,
              including Lingerie sets, Underwear for men and women, Boxers, Bras
            </p>
          </div>
          <div className="mt-3 text-justify">
            <p className="my-4 me-2 text-justify">
              The undergarments unit adheres to stringent quality control
              measures, ensuring that each piece meets the highest standards.
            </p>
            <h5 className="fw-bold text-end">High-Quality Standards</h5>
          </div>
        </div>
      </div>

      <div className="my-3">
        <h5 className="fw-bold">Environmental Sustainability</h5>
        <p className="my-3">
          Reduced chemical use lowers pollution and enhances soil health.
        </p>
      </div>

      <>
        <h5 className="fw-bold">Healthier Ecosystems</h5>
      </>

      <div className="photo-text-product my-3">
        <div className="text-center photo-text-overlay-product">
          <p className="mx-2">
            Promotes biodiversity and conserves water resources. Promotes
            biodiversity and conserves water resources.Promotes biodiversity and
            conserves water resources.
          </p>
        </div>
        <img
          className="img-fluid rounded"
          src={HealthierEcosystems}
          alt=""
          style={{ height: "300px", width: "1100px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default underGarment;
