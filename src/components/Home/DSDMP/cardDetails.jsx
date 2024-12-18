import React, { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";
import "./dsdmp.css";

const cardDetails = ({ idea }) => {
  const { image, heading, heading2, description, des1 } = idea;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  return (
    <>
      <Col
        lg={2}
        md={12}
        sm={12}
        xs={12}
        className="mx-2 rounded-4 my- py-2 provided-service-section zoom-effect"
        onClick={() => setModalShow(true)}
      >
        <div className="d-flex justify-content-center align-items-center flex-column py-2 text-justify">
          <div className="py-2">
            <img src={image} className="" style={{ width: "40px" }} alt="" />
          </div>
          <div className="text-center">
            <h6 className="my-2">{heading}</h6>
            <p className="bottom-0 px-2">{description}</p>
          </div>
        </div>
      </Col>

      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="provided-service-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{heading2}</Modal.Title>
        </Modal.Header>
        <div className="border"></div>
        <Modal.Body>
          <p>{des1}</p>
        </Modal.Body>
        <div className="border"></div>
        <Modal.Footer>
          <Button
            className="provided-service-close-button"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default cardDetails;
