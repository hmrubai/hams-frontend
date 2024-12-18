import React from "react";
import "./AllService.css";
import ProductLine from "../../../../assets/AllAssets/ProductService/Service/ProductionLines.jpg";
import BundlingPhoto from "../../../../assets/AllAssets/ProductService/Service/Bundling.jpg";

const garments = () => {
  return (
    <div className="container my-3 mx-3">
      <>
        <h3 className="fw-bold fs-3">Garments</h3>
        <p className="my-3 text-justify">
          HAMS Garments Limited (HAMSGL) operates a comprehensive garments unit
          that specializes in the production of tops and bottoms, including
          t-shirts and various knit items. Here are the key highlights of this
          unit
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
              <div className="photo-text-overlay-product text-justify">
                <p className="text-start mx-3">
                  Production Lines <br />{" "}
                  <span style={{ fontSize: "14px" }}>
                    The process starts with digital design creation using 3D
                    design software. Designers at HAMS use tools like Clo3D to
                    visualize garments in a three - dimensional space.
                  </span>
                </p>
              </div>
              <img
                src={ProductLine}
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
            <p className="my-3 me-2" style={{ fontSize: "14px" }}>
              The unit has a significant production capacity, churning out
              approximately 1,500,000 pieces per month.
            </p>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="d-flex gap-5">
          <div className="text-justify">
            <h5 className="fw-bold text-justify">Diverse Product Range</h5>
            <p className="my-3 me-2 text-justify">
              The garments unit produces a wide variety of knit apparel,
              including T-shirts, Polos, Hoodies, Sweatshirts, Dresses, Bottoms
              such as leggings and joggers
            </p>
          </div>
          <div className="mt-3 text-justify">
            <p className="my-4 me-2 text-justify">
              HAMSGL places a strong emphasis on quality, with rigorous
              standards in place
            </p>
            <h5 className="fw-bold text-end">Quality Assurance</h5>
          </div>
        </div>
      </div>

      <div className="my-3">
        <h5 className="fw-bold">Fabric & Finished Garment Inspection</h5>
        <p className="my-3 text-justify">
          Utilizing a 4-point system and Adhering to the AQL 1.5 standard.
        </p>
      </div>

      <>
        <h5 className="fw-bold">Lab Testing</h5>
      </>

      <div className="text-center photo-text-product my-3">
        <div className="text-center photo-text-overlay-product">
          <p className="fw-bolder mx-2">
            Conducted through accredited labs like ITS, SGS, and BV, alongside
            in-house testing facilities. Conducted through accredited labs like
            ITS, SGS, and BV, alongside in-house testing facilities.
          </p>
        </div>
        <img
          className="img-fluid rounded"
          src={BundlingPhoto}
          alt=""
          style={{ height: "300px", width: "1100px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default garments;
