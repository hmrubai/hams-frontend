import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { GoHorizontalRule } from "react-icons/go";

const AchievementCard = ({ service }) => {
  const {
    id,
    secondaryHeading,
    primaryHeading,
    list1,
    list2,
    list3,
    image,
    description,
  } = service;
  // console.log(id);
  return (
    <div
      className={`row my-5 mx-lg-3 mx-sm-1 flex-column-reverse ${
        id % 2 !== 0 ? "flex-lg-row " : "flex-lg-row-reverse"
      }`}
    >
      <div className="col-lg-7 col-md-7 col-sm-12 my-3">
        <h5>
          <GoHorizontalRule className="minus-icon-style heading-icon-sizing" />{" "}
          {secondaryHeading}
        </h5>
        <h2>{primaryHeading}</h2>
        <p className="description-text">{description}</p>
        {/* <ul className="list-unstyled">
          <li className="my-2 d-flex align-items-center">
            <AiFillCheckCircle className="me-1 check-icon" />
            <span className="description-text">{list1}</span>
          </li>
          <li className="my-2 d-flex align-items-center">
            <AiFillCheckCircle className="me-1 check-icon" />
            <span className="description-text">{list2}</span>
          </li>
          <li className="my-2 d-flex align-items-center">
            <AiFillCheckCircle className="me-1 check-icon" />
            <span className="description-text">{list3}</span>
          </li>
        </ul> */}
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
  );
};

export default AchievementCard;
