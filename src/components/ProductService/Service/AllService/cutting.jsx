import React from "react";
import "./AllService.css";
import CuttingPhoto from "../../../../assets/AllAssets/ProductService/Service/PatternDesignMarkerMaking.jpg";
import BundlingPhoto from "../../../../assets/AllAssets/ProductService/Service/Bundling.jpg";

const cutting = () => {
  return (
    <div className="container my-3 mx-3">
      <>
        <h3 className="fw-bold fs-3">Cutting</h3>
        <p className="my-3 text-justify">
          HAMSGL's cutting unit exemplifies the company's commitment to quality,
          efficiency, and sustainability in garment manufacturing. By
          integrating advanced technology and skilled labor, HAMSGL ensures that
          each garment produced meets the highest standards of excellence.
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
              <div className="photo-text-overlay-product"></div>
              <img
                src={CuttingPhoto}
                alt=""
                className="img-fluid rounded"
                style={{ width: "1200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="ms-0 mt-3 mt-md-0 ms-md-5 me-1 justify-items-center align-content-center text-justify">
            <p style={{ fontSize: "18px" }} className="fw-bolder">
              Pattern Design & Marker Making
            </p>
            <p className="my-3 me-2" style={{ fontSize: "14px" }}>
              The process begins with the creation of detailed patterns and
              markers using computer-aided design (CAD) systems. This step
              ensures that fabric usage is optimized and patterns are laid out
              efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="d-flex gap-5">
          <div className="text-justify">
            <h5 className="fw-bold">Fabric Spreading</h5>
            <p className="my-3 me-2">
              Fabric rolls are spread out in layers on cutting tables using
              automated spreading machines. This step prepares the fabric for
              cutting and ensures uniformity across all layers.
            </p>
          </div>
          <div className="mt-3 text-justify">
            <p className="mt-4 me-2 text-justify">
              Automated cutting machines, guided by the CAD markers, precisely
              cut the fabric into the required shapes and sizes. These machines
              are capable of cutting multiple layers simultaneously, increasing
              productivity.
            </p>
            <h5 className="fw-bold text-end text-justify">Cutting</h5>
          </div>
        </div>
      </div>

      <div className="my-3">
        <h5 className="fw-bold">Inspection</h5>
        <p className="my-3 text-justify">
          Each cut piece undergoes a thorough inspection to verify accuracy and
          quality. Any defective pieces are identified and rectified at this
          stage
        </p>
      </div>

      <>
        <h5 className="fw-bold">Bundling</h5>
      </>
      <div className="photo-text-product my-3">
        <div className="text-center photo-text-overlay-product text-start">
          <p className="fw-bolder mx-2">
            <span>
              Once inspected, the cut pieces are bundled according to size and
              design specifications, ready to be moved to the sewing unit for
              assembly.
            </span>
          </p>
          <br />
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

export default cutting;
