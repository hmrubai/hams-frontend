import React from "react";
import GarmentsUnit from "../../assets/AllAssets/ourBusiness/GarmentsUnit.jpeg";
import "./OurBusinessStyle.css";

const garmentUnit = () => {
  return (
    <>
      <div className="container my-3">
        <h5 className="fw-bolder fs-3">Garments Unit</h5>
      </div>
      <div className="photo-text-business">
        <div className="photo-text-overlay-business">
          <p className="fw-bolder mx-4">
            The garments unit spans 2,24,000 sq. ft, accommodating 2,200 sets of
            machines. The monthly production capacity reaches 50,00,000 pieces,
            with dedicated lines for T-shirts, knit items, undergarments, and
            lingerie.
          </p>
        </div>
        <img
          src={GarmentsUnit}
          alt="Garments Unit"
          className="img-fluid d-none d-md-block"
        />
        <img
          src={GarmentsUnit}
          alt="Garments Unit"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </>
  );
};

export default garmentUnit;

// ========= Previous code ===============

// <div className="container my-3">
//         <h5 className="fw-bolder fs-3">Garments Unit</h5>
//       </div>
//       <div className="photo-text-business">
//         <div className="photo-text-overlay-business">
//           <p className="fs-5 fw-bolder mx-5">
//             The garments unit spans 2,24,000 sq. ft, accommodating 2,200 sets of
//             machines. The monthly production capacity reaches 50,00,000 pieces,
//             with dedicated lines for T-shirts, knit items, undergarments, and
//             lingerie.
//           </p>
//         </div>
//         <img
//           src={GarmentsUnit}
//           alt=""
//           className="img-fluid d-none d-md-block"
//         />
//         <img
//           src={GarmentsUnit}
//           alt="Knitting Unit"
//           className="img-fluid d-block d-md-none"
//           style={{ width: "100%", height: "500px" }}
//         />
//       </div>
