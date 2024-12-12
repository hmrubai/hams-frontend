import React from "react";
import CommunityEngagement from "../../assets/AllAssets/GoingGreen/community.png";
import "./GoingGreen.css";

const communityEngagement = () => {
  return (
    <>
      <div className="container my-3">
        <h5 className="fw-bolder">Community Engagement</h5>
      </div>
      <div className="photo-text-sustainability">
        <div className="photo-text-overlay-sustainability">
          <p className="fs-5 fw-bolder mx-3">
            Collaborative projects with external entities, such as the Gear
            Project and PACT-II, showcase HAMSGL's commitment to engaging with
            the community and addressing broader industry challenges.
          </p>
        </div>
        <img
          src={CommunityEngagement}
          alt="Community Engagement Images"
          className="img-fluid d-none d-md-block h-100 w-100"
        />
        <img
          src={CommunityEngagement}
          alt="Community Engagement Images"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
    </>
  );
};

export default communityEngagement;
