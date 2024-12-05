import React from "react";
import "../Layout.css";
import Photo6 from "../../../assets/arrow/down arrow green.png";

const OddTimeline = ({ timeData }) => {
  const { title, description, year } = timeData;
  return (
    <div>
      <div className="down-image">
        <img src={Photo6} alt="Flat Panel Image" className="img-fluid" />
      </div>
      <div className="timeline-item above-line">
        <div className="timeline-line-horizontal" />
        <div className="px-2 text-white">
          <div
            className="timeline-date p-0 m-0"
            style={{ color: "rgba(245, 139, 180, 1)" }}
          >
            {year}
          </div>
          <h5 className="p-0 m-0">{title}</h5>
          <p className="" style={{ fontSize: "12px" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OddTimeline;
