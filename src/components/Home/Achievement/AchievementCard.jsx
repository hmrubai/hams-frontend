import React from "react";
import { Col } from "react-bootstrap";
import "./AchievementHome.css";

const AchievementCard = ({ certification }) => {
  const { sort_title, title, description, button_text, certificate_img } =
    certification;

  const cardStyle = {
    maxWidth: "100%",
    height: "100%",
    border: "none",
    borderRadius: "8px",
    overflow: "hidden",
  };
  const cardImage = {
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  };

  function limitTextTo20Words(text) {
    const words = text.split(" ");
    const limitedWords = words.slice(0, 20);
    const limitedText = limitedWords.join(" ");
    return limitedText;
  }

  return (
    <Col
      lg={3}
      md={4}
      sm={6}
      xs={12}
      className="mb-4 d-flex justify-content-center"
    >
      <div className="card shadow-left" style={cardStyle}>
        <div className="d-flex justify-content-center align-items-center p-3">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}/${certificate_img}`}
            alt="Certificate"
            style={{
              width: "100%",
              maxWidth: "150px",
              height: "auto",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between p-3">
          <h5 className="card-title text-center">{sort_title}</h5>
          <p className="description-text">
            {description.length > 30
              ? limitTextTo20Words(description) + "..."
              : description}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default AchievementCard;
