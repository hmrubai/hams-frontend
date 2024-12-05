import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { GoHorizontalRule } from "react-icons/go";

const UpdatedCSRCard = ({ csrData }) => {
  const { id, line1, line2, image } = csrData;
  return (
    <div>
      <div
        className={`row my-5 mx-lg-3 mx-sm-1 flex-column-reverse ${
          id % 2 !== 0 ? "flex-lg-row " : "flex-lg-row-reverse"
        }`}
      >
        <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
          <div className="">
            <h5 className="my-2 d-flex align-items-center fw-bold">
              <span className="">{line1}</span>
            </h5>
            <p className="my-2 d-flex align-items-center">
              <span className="description-text">{line2}</span>
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 my-auto zoom-container">
          <img
            src={image}
            className="img-fluid zoomable-image"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatedCSRCard;
