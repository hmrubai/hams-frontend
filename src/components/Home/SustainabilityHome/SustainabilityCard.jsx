import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import SustainabilityCard1 from "../../../assets/AllAssets/HomePage/SustainabilityHome/su1.jpg";
import SustainabilityCard2 from "../../../assets/AllAssets/HomePage/SustainabilityHome/Su2.jpg";
import SustainabilityCard3 from "../../../assets/AllAssets/HomePage/SustainabilityHome/su3.jpg";
import SustainabilityCard4 from "../../../assets/AllAssets/HomePage/SustainabilityHome/su4.jpg";
import SustainabilityCard5 from "../../../assets/AllAssets/HomePage/SustainabilityHome/Su5.jpg";
import SustainabilityCard6 from "../../../assets/AllAssets/HomePage/SustainabilityHome/su6.jpg";

const SustainabilityCard = ({ sustainabilityStyle }) => {
  const { title, color, icon, id } = sustainabilityStyle;
  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    fetchModalContent(id);
  }, [id]);

  const fetchModalContent = (id) => {
    switch (id) {
      case 1:
        setModalImage(SustainabilityCard1);
        break;
      case 2:
        setModalImage(SustainabilityCard2);
        break;
      case 3:
        setModalImage(SustainabilityCard3);
        break;
      case 4:
        setModalImage(SustainabilityCard4);
        break;
      case 5:
        setModalImage(SustainabilityCard5);
        break;
      case 6:
        setModalImage(SustainabilityCard6);
        break;
    }
  };

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <>
      <div
        className="parent services-section mx-md-2 mx-lg-0 text-center my-3 zoom-effect sus-text-center"
        style={{ background: `${color}` }}
        onClick={handleModalOpen}
      >
        <div className="child">
          <img src={`${import.meta.env.VITE_IMAGE_URL}/${icon}`} alt="" />
        </div>
        <div className="mt-4">
          <p
            className="text-white mb-0 py-2"
            style={{
              fontSize: "14.5px",
              fontWeight: "600",
              padding: "5px",
            }}
          >
            {title}
          </p>
        </div>
      </div>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="p-0 m-0"
        show={modalShow}
        onHide={handleModalClose}
      >
        <Modal.Body className="p-0 m-0">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleModalClose}
            style={{
              position: "absolute",
              top: "-15px",
              right: "-15px",
              backgroundColor: "rgb(255, 97, 0)",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "25px" }}>
              X
            </span>
          </button>
          <img
            src={modalImage}
            alt={title}
            className="img-fluid W-100 h-50 rounded"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SustainabilityCard;
