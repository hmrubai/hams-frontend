import React from "react";
import "./sidebar.css";

const recentPost = ({ singleNews }) => {
  const { id, heading, date, image } = singleNews;

  return (
    <div
      className="d-flex my-3"
      onClick={() =>
        window.open(
          "https://www.facebook.com/share/p/eLrE9aRvmq5o3WNK/",
          "_blank"
        )
      }
      style={{ cursor: "pointer" }}
    >
      <div>
        <img src={image} alt="" className="img-fluid py-2" />
      </div>
      <div className="mx-2">
        <p className="mb-0" style={{ fontSize: "12px" }}>
          {date}
        </p>
        <p className="lh-1" style={{ fontSize: "15px" }}>
          {heading}
        </p>
      </div>
    </div>
  );
};

export default recentPost;
