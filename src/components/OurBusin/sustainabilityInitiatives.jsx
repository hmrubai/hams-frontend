import React from "react";
import Sustainability from "../../assets/AllAssets/ourBusiness/Sustainability.png";
import "./OurBusinessStyle.css";

const sustainabilityInitiatives = () => {
  return (
    <>
      <div className="container my-3">
        <h5 className="fw-bolder fs-3">Sustainability Initiatives</h5>
      </div>
      <div className="photo-text-business">
        <div className="photo-text-overlay-business">
          <p className="fw-bolder mx-4">
            HAMS is committed to sustainability, as reflected in its
            achievements and future goals. The company has adopted renewable
            energy sources, upgraded its effluent treatment plant, and committed
            to significant reductions in energy, greenhouse gas emissions, and
            water consumption by 2030. Accreditations from FEM and FSLM
            underscore its commitment to environmental and social
            responsibility.
          </p>
        </div>
        <img
          src={Sustainability}
          alt="Sustainability Initiatives"
          className="img-fluid d-none d-md-block"
        />
        <img
          src={Sustainability}
          alt="Sustainability Initiatives"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </>
  );
};

export default sustainabilityInitiatives;

// ========  previous code ==========

// <div>
//   <div className="container my-3">
//     <h3 className="fw-bolder fs-3">Sustainability Initiatives</h3>
//   </div>
//   <div className="photo-text-business">
//     <div className="photo-text-overlay-business">
//       <p className="fs-5 fw-bolder mx-3">
//         HAMS is committed to sustainability, as reflected in its achievements
//         and future goals. The company has adopted renewable energy sources,
//         upgraded its effluent treatment plant, and committed to significant
//         reductions in energy, greenhouse gas emissions, and water consumption by
//         2030. Accreditations from FEM and FSLM underscore its commitment to
//         environmental and social responsibility.
//       </p>
//     </div>
//     <img
//       src={Sustainability}
//       alt="Sustainability Initiatives"
//       className="img-fluid d-none d-md-block"
//     />

//     <img
//       src={Sustainability}
//       alt="Sustainability Initiatives"
//       className="img-fluid d-block d-md-none"
//       style={{ width: "100%", height: "700px" }}
//     />
//   </div>
// </div>;
