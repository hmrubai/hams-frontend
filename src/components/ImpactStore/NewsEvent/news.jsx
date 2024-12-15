import React from "react";

const news = ({ news }) => {
  const textColor = "rgba(255, 97, 0, 1)";
  const { title, short_description, image, description } = news;
  return (
    <div
      className="news-card mx-lg-3 mx-sm-1 mt-2"
      style={{
        margin: "0px",
        padding: "0px",
      }}
    >
      <div
        className="zoom-container"
        style={{ marginBottom: "0px", height: "350px", overflow: "hidden" }}
      >
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
          className="img-fluid zoomable-image rounded"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div>
        <p className="my-2 description-text" style={{ color: textColor }}>
          {title}
        </p>
        <p className="fw-bolder">{short_description}</p>
      </div>
    </div>
  );
};

export default news;
