import React from "react";
import rightArrow from "../../../assets/right-arrow.png";
import "./LearnMore.css";
import { Col, Container, Row } from "react-bootstrap";
import section1 from "../../../assets/certificationDetails/section1.png";

const LearnMore = () => {
  return (
    <div className="">
      <section className="learn-more-section-bg-image d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center"></div>
        <h1 className="text-white text-center">
          Do Well, Live Well & <br />
          <span className="hero-text">Dress</span> Very Well
        </h1>
        <div className="d-flex">
          <p className="text-white mb-0 mx-2">Home</p>
          <img src={rightArrow} className="mx-2" alt="" srcSet="" />
          <p className="text-white mb-0 mx-2">Learn More</p>
        </div>
      </section>
      <Container>
        <Row>
          <div className="d-flex justify-content-center my-2">
            <h4 className="secondary-heading text-center">
              This is Details Page
            </h4>
          </div>
          <Col
            lg={10}
            className="d-flex justify-content-center align-items-center mx-auto"
          >
            <Col lg={5}>
              <img
                src={section1}
                alt=""
                className="img-fluid p-2 mx-2"
                srcSet=""
              />
            </Col>
            <Col lg={7}>
              <h3 className="p-2 mx-2">Heading</h3>
              <p className="description-text p-2 mx-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                cupiditate iure, qui nobis fugit illo, fugiat maxime eius cum
                similique eligendi, voluptates nemo quo totam sint voluptatum ad
                rerum ratione! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Labore cupiditate iure, qui nobis fugit illo,
                fugiat maxime eius cum similique eligendi, voluptates nemo quo
                totam sint voluptatum ad rerum ratione! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Labore cupiditate iure, qui
                nobis fugit illo, fugiat maxime eius cum similique eligendi,
                voluptates nemo quo totam sint voluptatum ad rerum ratione!
              </p>
            </Col>
          </Col>
          <Col
            lg={10}
            className="d-flex justify-content-center align-items-center mx-auto"
          >
            <Col lg={7}>
              <h3 className="p-2 mx-2">Heading</h3>
              <p className="description-text p-2 mx-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                cupiditate iure, qui nobis fugit illo, fugiat maxime eius cum
                similique eligendi, voluptates nemo quo totam sint voluptatum ad
                rerum ratione! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Labore cupiditate iure, qui nobis fugit illo,
                fugiat maxime eius cum similique eligendi, voluptates nemo quo
                totam sint voluptatum ad rerum ratione! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Labore cupiditate iure, qui
                nobis fugit illo, fugiat maxime eius cum similique eligendi,
                voluptates nemo quo totam sint voluptatum ad rerum ratione!
              </p>
            </Col>
            <Col lg={5}>
              <img
                src={section1}
                alt=""
                className="img-fluid p-2 mx-2"
                srcSet=""
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LearnMore;
