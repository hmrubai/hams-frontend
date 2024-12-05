import React from "react";

const Certification = ({ certification }) => {
  const { id, heading1, heading2, description, image, download } =
    certification;
  return (
    <div className="row main-container mx-auto flex-lg-row flex-column-reverse my-3">
      <div className="col-lg-7 col-md-7 my-2">
        <h3>{heading1}</h3>
        <h5 className="my-3">{heading2}</h5>
        <p className="my-3 description-text">{description}</p>
      </div>
      <div className="col-lg-5 col-md-5 my-auto zoom-container">
        <img
          src={image}
          className="img-fluid zoomable-image"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default Certification;
