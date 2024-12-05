import React from "react";
import { Col } from "react-bootstrap";
import "./Certifications";

const Certification = ({ certification }) => {
  const { sort_title, title, description, button_text, certificate_img } =
    certification;

  const cardStyle = {
    width: "275px",
    height: "300px",
    border: "none",
  };
  const cardImage = {
    width: "190px",
    height: "80px",
  };
  function limitTextTo20Words(text) {
    const words = text.split(" ");
    const limitedWords = words.slice(0, 20);
    const limitedText = limitedWords.join(" ");
    return limitedText;
  }
  return (
    <Col lg={3} md={6} sm={12}>
      <div className="card shadow-left my-2 mx-auto" style={cardStyle}>
        <div className="h-100 d-flex justify-content-center align-items-center w-100">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}/${certificate_img}`}
            className="img-fluid"
            alt="..."
            style={cardImage}
          />
        </div>
        <div className="card-body d-flex justify-content-between flex-column">
          <h5 className="card-title text-center">{sort_title}</h5>
          <p className="description-text text-justify">
            {description.length > 30
              ? limitTextTo20Words(description)
              : description}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default Certification;
