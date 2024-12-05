import React from "react";
import Image from "../../assets/ourBussiness/Dyeing.png";
import "./OurBusiness.css";

import DyeingFinishingUnit from "../../assets/AllPhotoFinal/OurBusinessRoute/DyeingAndFinishingUnit.jpeg";

const Dyeing = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <h5 className="fw-bold fs-4 my-3">Dyeing and Finishing Unit</h5>
              <div className="col-md-4 mb-4">
                <div className="photo-text-business">
                  <div className="photo-text-overlay-business text-justify">
                    <p className="fw-bolder mx-4">
                      HAMS operates a dyeing and finishing unit covering 70,000
                      sq. ft, with a daily production capacity of 30,000 kgs for
                      dyeing and 40,000 kgs for finishing. The unit is equipped
                      with 28 sets of dyeing machines and 20 sets of finishing
                      machines. Future plans include significant expansions in
                      working area and machinery.
                    </p>
                  </div>
                  <img
                    src={DyeingFinishingUnit}
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 p-3 gap-3 justify-content-center align-content-center">
                <div className="py-2 py-md-5">
                  <h5 className="fw-bold fs-4 my-2 using-title-font">Dyeing</h5>
                  <p className="text-justify">
                    The unit is equipped with 28 sets of dyeing machines and 20
                    sets of finishing machines. Future plans include significant
                    expansions in working area and machinery.
                  </p>
                </div>
                <div className="py-2 py-md-5">
                  <h5 className="fw-bold fs-4 my-2 using-title-font">
                    Heat Setting
                  </h5>
                  <p className="text-justify">
                    The unit is equipped with 28 sets of dyeing machines and 20
                    sets of finishing machines. Future plans include significant
                    expansions in working area and machinery.
                  </p>
                </div>
              </div>

              <div className="col-md-4 p-3  gap-3 justify-content-center align-content-center">
                <div className="py-2 py-md-5">
                  <h5 className="fw-bold fs-4 my-2 using-title-font">
                    Compacting
                  </h5>
                  <p className="text-justify">
                    The unit is equipped with 28 sets of dyeing machines and 20
                    sets of finishing machines. Future plans include significant
                    expansions in working area and machinery.
                  </p>
                </div>
                <div className="py-2 py-md-5">
                  <h5 className="fw-bold fs-4 my-2 using-title-font">
                    Finishing
                  </h5>
                  <p className="text-justify">
                    The unit is equipped with 28 sets of dyeing machines and 20
                    sets of finishing machines. Future plans include significant
                    expansions in working area and machinery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dyeing;
