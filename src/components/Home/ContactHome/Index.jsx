import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import Phone from "../../../assets/AllAssets/HomePage/ContactHome/phone.png";
import Email from "../../../assets/AllAssets/HomePage/ContactHome/email.png";
import LocationPin from "../../../assets/AllAssets/HomePage/ContactHome/locationPin.png";
import { useGetCommonApiQuery } from "../../../services/post";
import "./ContactHome.css";

const Index = () => {
  const commonRes = useGetCommonApiQuery();
  if (commonRes.isFetching) return <div></div>;
  if (commonRes.isError) return <h1>An error occur {commonRes.error.error}</h1>;

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(175, 207, 126, 0.45), rgba(29, 47, 64, 0.8)), url(${
          import.meta.env.VITE_IMAGE_URL
        }/${commonRes?.data?.data?.banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Row className="container-sm mx-auto">
        <div className="text-center my-3">
          <h6 className="text-white secondary-heading">Contact Us</h6>
          <p className="text-white description-text">
            You can contact with us by any of the following means
          </p>
        </div>
        <Col lg={6} className="my-auto">
          <div className="row col-lg-8 mx-auto justify-content-between">
            <div className="col-lg-5 email-us text-center align-items-center py-3">
              <img src={Email} className="contact-icon" alt="" srcSet="" />
              <h6 className="mb-0 my-1 description-text text-white">
                Email Us
              </h6>
              <p className="mb-0 my-1 description-text text-white">
                {commonRes?.data?.data?.email}
              </p>
            </div>
            <div className="col-lg-5 my-3 my-lg-0 my-md-0 phone-us text-center align-items-center py-3">
              <img src={Phone} className="contact-icon" alt="" srcSet="" />
              <h6 className="text-white mb-0 description-text my-1">
                Phone Number
              </h6>
              <p className="mb-0 description-text my-1 text-white">
                {commonRes?.data?.data?.phone_number}
              </p>
            </div>
          </div>
          <Form className="col-lg-8 mx-auto">
            <Form.Group controlId="name" className="my-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="bg-transparent text-white"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="my-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white"
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="my-3">
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter your message"
                className="bg-transparent text-white"
                required
              />
            </Form.Group>

            <button
              className="primary-color contact-button border-0 text-white my-2 mb-3 py-2"
              type="submit"
            >
              Send Message
            </button>
          </Form>
        </Col>
        <Col lg={6} className="my-auto mb-4">
          <div className="row mx-auto my-3">
            <div className="col-lg-10 email-us text-white text-center align-items-center py-3">
              <img
                src={LocationPin}
                className="contact-icon"
                alt=""
                srcSet=""
              />
              <p className="mb-0">Our Factory Address</p>
              <p className="mb-0 description-text text-white">
                Dakkhin Vangahati
              </p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.3915553774978!2d90.45293749999999!3d24.1930625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375679003a734f6d%3A0x7c8f4e259ab14cd3!2sHAMS%20GARMENTS%20LTD!5e0!3m2!1sen!2sbd!4v1729681349868!5m2!1sen!2sbd"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="285"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="col-lg-10"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
