import React from "react";
import EmbroideryImage from "../../../../assets/AllAssets/ProductService/Service/Embrodairy.jpeg";
import "./AllService.css";

const embroidery = () => {
  return (
    <div className="container my-3 mx-3">
      <>
        <h3 className="fw-bold fs-3">Embroidery Unit</h3>
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
              <div className="photo-text-overlay-product"></div>
              <img
                src={EmbroideryImage}
                alt=""
                className="img-fluid rounded"
                style={{ width: "500px", height: "230px" }}
              />
            </div>
          </div>
          <div className="ms-0 mt-3 mt-md-0 ms-md-5 me-1 justify-items-center align-content-center">
            <p className="my-1 me-2" style={{ fontSize: "14px" }}>
              <span className="fw-bolder">Location :</span> 10 Thousand Sq. Ft.
            </p>
            <p className="my-1 me-2" style={{ fontSize: "14px" }}>
              <span className="fw-bolder">Equipment :</span> 5 sets of Tajima
              (Japan) Embroidery machines.
            </p>
            <p className="my-1 me-2" style={{ fontSize: "14px" }}>
              <span className="fw-bolder">Capacity :</span> 24 Heads per unit, 5
              billion stitch capacity per month.
            </p>
            <p className="my-1 me-2" style={{ fontSize: "14px" }}>
              <span className="fw-bolder">Production Output :</span> Around 6~7K
              pcs per day.
            </p>
            <ui className="my-1 me-2" style={{ fontSize: "14px" }}>
              <span className="fw-bolder">Special Attachments :</span>
              <li>Sequin device: 4 colour reversible</li>
              <li>Ap device</li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
};

export default embroidery;
