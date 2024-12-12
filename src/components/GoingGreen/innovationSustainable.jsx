import React from "react";
import InnovationSustainable from "../../assets/AllAssets/GoingGreen/Innovations.jpg";
import "./GoingGreen.css";

const innovationSustainable = () => {
  return (
    <div>
      <div className="container my-3">
        <h3 className="fw-bolder fs-3">
          Innovations and sustainable practices
        </h3>
      </div>
      <div className="photo-text-sustainability">
        <div className="photo-text-overlay-sustainability">
          <p className="fs-5 fw-bolder mx-3">
            The company is investing in research and development to explore
            innovative materials and processes, ensuring sustainability remains
            at the forefront of its business operations.
          </p>
        </div>

        <img
          src={InnovationSustainable}
          alt="Innovations and Sustainable Images"
          className="img-fluid d-none d-md-block"
          style={{ width: "100%", height: "500px" }}
        />

        <img
          src={InnovationSustainable}
          alt="Innovations and Sustainable Images"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default innovationSustainable;
