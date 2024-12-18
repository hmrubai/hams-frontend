import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useGetHomePagesQuery } from "../../../services/post";
import "./Explore.css";

const index = () => {
  const [showModal, setShowModal] = useState(false);

  const homeRes = useGetHomePagesQuery();

  if (homeRes.isFetching) return <div></div>;

  if (homeRes.isError) return <h1>An error occurred {homeRes.error.error}</h1>;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      id="virtualWalkthrough"
      className="virtual-walkthrough-bg-image d-flex flex-column justify-content-center align-items-center"
    >
      <div className="d-flex flex-column align-items-center"></div>
      <h6 className="secondary-heading text-white">
        {homeRes?.data?.data?.virtually.sort_title}
      </h6>
      <h3 className="text-white text-center">
        {homeRes?.data?.data?.virtually.title}
      </h3>

      <Button
        className="section-button border-0 primary-color"
        onClick={openModal}
      >
        {homeRes?.data?.data?.virtually.button_text}
      </Button>

      <Modal
        show={showModal}
        onHide={closeModal}
        size="xl"
        dialogClassName="modal-fullscreen"
      >
        <Modal.Header closeButton>
          <Modal.Title>Virtual Walkthrough</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-dialog-scrollable">
          <iframe
            title="Virtual Walkthrough"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            src="https://tourmkr.com/F1p5Gk4yir"
          ></iframe>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default index;
