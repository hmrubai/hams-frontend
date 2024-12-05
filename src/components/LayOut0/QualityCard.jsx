import React from "react";
import Card from "react-bootstrap/Card";
import { FaCheckCircle } from "react-icons/fa";
import Director from "../../assets/layout0/director.jpg";
import Accordion from "react-bootstrap/Accordion";

const QualityCard = ({ qualityCard }) => {
  const { title, description, icon, designation } = qualityCard;

  return (
    <div>
      <Card className="border-0 m-2 box box1">
        <div className="d-flex align-items-end m-2">
          <div>
            <img src={`http://api-hams.bacbonx.com/uploads/${icon}`} />
          </div>
          <div className="ps-2">
            <p className="fw-bold">{title}</p>
            <h4 className="fw-bold">{designation}</h4>
            <h6
              className="fw-bold"
              style={{ color: "rgba(255, 97, 0, 1)" }}
            ></h6>
          </div>
        </div>
        <Card.Body className="">
          <Accordion className="focus-ring-none">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="py-2 fs-4 fw-bold">
                Messages
              </Accordion.Header>
              <Accordion.Body>{description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QualityCard;
