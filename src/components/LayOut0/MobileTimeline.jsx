import "./Layout.css";
import { FaEarthAsia } from "react-icons/fa6";
import Logo1 from "../assets/layout0/clientLogo/LOGO 1.png";
import Photo from "../assets/photo.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img src={Photo} className="p-1 img-fluid" alt="" />
      </Modal.Body>
    </Modal>
  );
}

const MobileTimeline = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        <img src={Logo1} className="img-fluid" alt="" />
        <p>Hennes & Mauritz</p>
        <FaEarthAsia className="fs-4"></FaEarthAsia>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default MobileTimeline;
