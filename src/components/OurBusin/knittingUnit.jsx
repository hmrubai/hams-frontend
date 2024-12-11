import React from "react";
import KnittingUnits from "../../assets/AllAssets/ourBusiness/KnittingUnits.jpeg";
import "./OurBusinessStyle.css";

const knittingUnit = () => {
  return (
    <>
      <div className="container my-3">
        <h5 className="fw-bolder fs-3">Knitting Units</h5>
      </div>
      <div className="photo-text-business">
        <div className="photo-text-overlay-business">
          <p className="fw-bolder mx-4">
            The company's knitting unit spans 56,000 sq. ft and has a daily
            production capacity of 25,000 kgs. It houses 64 sets of circular
            knitting machines and 4 sets of semi-jacquard flat knitting
            machines. Future expansions include an additional 30,000 sq. ft and
            50 more knitting machines.
          </p>
        </div>
        <img
          src={KnittingUnits}
          alt="Knitting Units"
          className="img-fluid d-none d-md-block"
        />
        <img
          src={KnittingUnits}
          alt="Knitting Units"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </>
  );
};

export default knittingUnit;

// Previous code =================================

// <div className="photo-text-business">
//   <div className="photo-text-overlay-business">
//     <p className="fw-bolder mx-4">
//       The company's knitting unit spans 56,000 sq. ft and has a daily production
//       capacity of 25,000 kgs. It houses 64 sets of circular knitting machines
//       and 4 sets of semi-jacquard flat knitting machines. Future expansions
//       include an additional 30,000 sq. ft and 50 more knitting machines.
//     </p>
//   </div>
//   <img src={KnittingUnits} alt="" className="img-fluid d-none d-md-block" />
//   <img
//     src={KnittingUnits}
//     alt="Knitting Unit"
//     className="img-fluid d-block d-md-none"
//     style={{ width: "100%", height: "500px" }}
//   />
// </div>;
