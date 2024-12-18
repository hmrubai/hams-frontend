import React from "react";
import DigitalDesign from "../../../../assets/AllAssets/ProductService/Service/DigitalDesignCreation.jpg";
import Efficient from "../../../../assets/AllAssets/ProductService/Service/EfficientCommuncation.jpg";
import "./AllService.css";

const designStudio = () => {
  return (
    <div className="container my-3 mx-">
      <>
        <h5 className="fw-bold fs-3 cabin-normal-400">Design Studio</h5>
        <p className="my-3 cabin-normal-400 text-justify">
          HAMS Design Studio stands as the creative nucleus within the HAMS
          Group, pioneering the innovative and trendsetting designs that define
          the essence of the brand. This cutting-edge studio is the birthplace
          of fashion-forward concepts and styles, driving the garment
          manufacturing process with an emphasis on aesthetics, functionality,
          and market relevance. Comprising a team of skilled designers, pattern
          makers, and trend analysts, the HAMS Design Studio is committed to
          staying ahead of industry trends, delivering fresh and captivating
          designs that resonate with diverse consumer preferences. This hub of
          creativity plays a pivotal role in ensuring that HAMS garments are not
          only of the highest quality but also at the forefront of fashion
          innovation.
        </p>
        <p className="my-3 cabin-normal-400 text-justify">
          HAMS Garments utilizes advanced technology, including 3D design tools
          like Clo3D, to streamline and enhance the sample development process.
          Here's an overview of how samples are developed with 3D designs at
          HAMS:
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
                  Digital Design Creation <br />{" "}
                  <span style={{ fontSize: "14px" }}>
                    The process starts with digital design creation using 3D
                    design software. Designers at HAMS use tools like Clo3D to
                    visualize garments in a three - dimensional space.
                  </span>
                </p>
              </div>
              <img
                src={DigitalDesign}
                alt=""
                className="img-fluid rounded"
                style={{ width: "1200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="ms-0 mt-3 mt-md-0 ms-md-5 me-1 justify-items-center align-content-center text-justify">
            <p style={{ fontSize: "18px" }} className="fw-bolder">
              Fit and Pattern Adjustments
            </p>
            <p className="my-3 me-2" style={{ fontSize: "14px" }}>
              Designers can make real-time adjustments to the fit and pattern of
              the garment within the 3D environment. This enables them to
              fine-tune details such as sizing, proportions, and seam
              placements.
            </p>
          </div>
        </div>
      </div>

      <div className="my-3 cabin-normal-400">
        <div className="d-flex cabin-normal-400 gap-5">
          <div className="text-justify">
            <h5 className="fw-bold cabin-normal-400">
              Fit and Pattern Adjustments
            </h5>
            <p className="my-3 cabin-normal-400">
              Designers can make real-time adjustments to the fit and pattern of
              the garment within the 3D environment. This enables them to
              fine-tune details such as sizing, proportions, and seam
              placements.
            </p>
          </div>
          <div className="mt-3 text-justify">
            <p className="mt-4 mb-3 cabin-normal-400 text-justify">
              The 3D design software enables realistic material simulation,
              allowing designers to visualize how different fabrics will drape
              and behave on the virtual garment. This aids in the selection of
              appropriate materials.
            </p>
            <h5 className="fw-bold text-end cabin-normal-400 text-justify">
              Material Simulation
            </h5>
          </div>
        </div>
      </div>
      <div className="my-3 cabin-normal-400">
        <h5 className="fw-bold cabin-normal-400">Reduced Iterations</h5>
        <p className="my-3 cabin-normal-400 text-justify">
          The ability to visualize and make adjustments in a 3D environment
          helps reduce the number of physical iterations needed, leading to
          faster and more accurate sample development.
        </p>
      </div>
      <>
        <h5 className="fw-bold cabin-normal-400">
          Efficient Communication with Manufacturers
        </h5>
      </>
      <div className="photo-text-product my-3 cabin-normal-400">
        <div className="photo-text-overlay-product cabin-normal-400">
          <p className="fw-bolder mx-2 cabin-normal-400">
            The 3D designs serve as detailed references for manufacturers,
            ensuring that the final product closely aligns with the approved
            virtual prototype.
          </p>
        </div>
        <img
          className="img-fluid rounded cabin-normal-400"
          src={Efficient}
          alt=""
          style={{ height: "300px", width: "1100px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default designStudio;
