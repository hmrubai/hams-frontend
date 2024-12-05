import React from "react";
import { AiFillCheckCircle, AiOutlineMinus } from "react-icons/ai";

const Business = ({ business }) => {
  const { id, image, heading1, heading2, description, list1, list2, list3 } =
    business;
  return (
    <div
      className={`row my-5 mx-lg-3 mx-sm-1 flex-column-reverse ${
        id % 2 !== 0 ? "flex-lg-row " : "flex-lg-row-reverse"
      }`}
    >
      <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
        <h5>
          <AiOutlineMinus className="minus-icon-style secondary-heading border-0" />
          {heading1}
        </h5>
        <h2>{heading2}</h2>
        <p className="description-text">{description}</p>
        <ul className="list-unstyled">
          <li className="my-2 description-text">
            <AiFillCheckCircle className="list-icon-bg" />
            {list1}
          </li>
          <li className="my-2 description-text">
            <AiFillCheckCircle className="list-icon-bg" />
            {list2}
          </li>
          <li className="my-2 description-text">
            <AiFillCheckCircle className="list-icon-bg" />
            {list3}
          </li>
        </ul>
      </div>

      <div className="col-lg-5 col-lg-5 col-sm-12 my-auto zoom-container">
        <img
          src={image}
          className="img-fluid zoomable-image"
          loading="lazy"
          alt="cc"
        />
      </div>
    </div>
  );
};

export default Business;
