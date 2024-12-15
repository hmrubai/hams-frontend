/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Button, Carousel, Col, Container, Modal, Row } from "react-bootstrap";
import "../NewsEvent/newsEvent.css";

const photoView = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIndex(0);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {images.map((image, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
              className="my-2"
              onClick={() => handleImageClick(index)}
            />
          </Col>
        ))}
      </Row>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modal-100w"
        centered
        fullscreen
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="py-3">
          <Carousel
            activeIndex={selectedIndex}
            onSelect={() => {}}
            controls={false}
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block img-fluid h-100 w-100 rounded"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Button
            variant="secondary"
            className="position-absolute top-50 start-0 translate-middle-y"
            style={{ backgroundColor: "rgba(255, 97, 0, 1)" }}
            onClick={handlePrev}
          >
            &lt;
          </Button>
          <Button
            variant="secondary"
            className="position-absolute top-50 end-0 translate-middle-y"
            style={{ backgroundColor: "rgba(255, 97, 0, 1)" }}
            onClick={handleNext}
          >
            &gt;
          </Button>
        </Modal.Body>
        <Modal.Header></Modal.Header>
      </Modal>
    </Container>
  );
};

export default photoView;
