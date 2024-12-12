import React from "react";
import ReducingImpact1 from "../../assets/AllAssets/GoingGreen/ReducingEnvironmental/Reducing-Environmental-1.jpg";
import ReducingImpact2 from "../../assets/AllAssets/GoingGreen/ReducingEnvironmental/Reducing-Environmental-Impact-2.jpg";
import ReducingImpact3 from "../../assets/AllAssets/GoingGreen/ReducingEnvironmental/Reducing-Environmental-Impact-3.jpg";
import ReducingImpact4 from "../../assets/AllAssets/GoingGreen/ReducingEnvironmental/Reducing-Environmental-Impact-4.jpg";
import "./GoingGreen.css";

const ReducingEnvironmenta = () => {
  return (
    <>
      <div className="container my-3">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4 mb-3 justify-content-center align-content-center">
                <h5 className="fw-bold my-3 text-end">
                  Reducing Environmental Impact
                </h5>
                <p className="text-justify">
                  <span className="fw-bold">Waste Management:</span>HAMSGL
                  actively manages and reduces waste through innovative
                  initiatives. A prime example is the implementation of a
                  Circular Value Chain, aiming to minimize the environmental
                  footprint associated with production processes.
                </p>
                <p className="my-3 text-justify">
                  <span className="fw-bold">Energy Efficiency:</span>
                  Installation of energy-efficient boilers and the incorporation
                  of Variable Frequency Drives (VFDs) in Water Treatment Plants
                  (WTP) and Effluent Treatment Plants (ETP) demonstrate HAMSGL's
                  commitment to reducing energy consumption.
                </p>
                <p className="text-justify">
                  <span className="fw-bold">Water Conservation:</span> The
                  company has successfully reduced water consumption per unit,
                  implementing rainwater harvesting systems, and exploring
                  innovative methods like reusing the last wash-off bath in the
                  dyeing process.
                </p>
              </div>
              <div className="col-md-4 p-3 gap-3">
                <div className="py-2">
                  <img
                    src={ReducingImpact1}
                    className="img-fluid rounded"
                    // style={{ width: "400px", height: "250px" }}
                    // style={{ width: "400px", height: "250px" }}
                    alt="Reducing Environmental Impact Images"
                  />
                </div>
                <div className="py-2 d-none d-md-block">
                  <img
                    src={ReducingImpact2}
                    className="img-fluid rounded d-none d-md-block"
                    // style={{ width: "400px", height: "250px" }}
                    alt="Reducing Environmental Impact Images"
                  />
                </div>
              </div>
              <div className="col-md-4 p-3  gap-3 d-none d-md-block">
                <div className="py-2">
                  <img
                    src={ReducingImpact3}
                    className="img-fluid rounded d-none d-md-block"
                    // style={{ width: "400px", height: "250px" }}
                    alt="Reducing Environmental Impact Images"
                  />
                </div>
                <div className="py-2">
                  <img
                    src={ReducingImpact4}
                    className="img-fluid rounded d-none d-md-block"
                    // style={{ width: "400px", height: "250px" }}
                    alt="Reducing Environmental Impact Images"
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

export default ReducingEnvironmenta;
