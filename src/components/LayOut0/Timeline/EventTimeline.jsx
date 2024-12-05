import React from "react";
import "../Layout.css";
import Photo1 from "../../../assets/arrow/up arrow purple.png";

const EventTimeline = ({ timeData }) => {
  const { title, description, year } = timeData;
  return (
    <div>
      <div className="up-image">
        <img src={Photo1} alt="Flat Panel Image" className="img-fluid" />
      </div>
      <div className="timeline-item below-line">
        
        <div className="px-2 text-white">
          <div
            className="timeline-date p-0 m-0"
            style={{ color: "rgba(253, 201, 50, 1)" }}
          >
            {year}
          </div>
          <h5 className="p-0 m-0">{title}</h5>
          <p className="" style={{ fontSize: "12px" }}>
            {description}
          </p>
        </div>

        <div className="timeline-line-horizontal" />
      </div>
    </div>
  );
};

export default EventTimeline;

