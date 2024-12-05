import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="container mt-5"
      style={{ background: "rgba(245, 245, 247, 1)" }}
    >
      <div className="pt-5">
        <div className="my-auto mt-3 py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29210.19444123975!2d90.3872909!3d23.7732445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7786cf64489%3A0x9413edfc0f68b732!2zSEFNUyBHcm91cCB8IOCmueCnjeCmr-CmvuCmruCmuCDgppfgp43gprDgp4Hgpqo!5e0!3m2!1sen!2sbd!4v1704165557539!5m2!1sen!2sbd"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="310"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div>
        <div className="d-flex row col-md-12">
          <Form className="col-md-8 mx-auto">
            <Form.Group controlId="name" className="my-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="text-black"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="my-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="text-black"
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="my-3">
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter your message"
                className="text-black"
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
          <div className="col-md-4">
            <div className="mt-3">
              <h5>
                <span className="fw-bold">Head Office:</span> House # 01, Road #
                06, Block # F, Niketon, Gulshan-1, Dhaka - 1212
              </h5>
              <h5>
                <span className="fw-bold">Factory Address :</span> Dakkhin
                Vangnahati, Sreepur, Gazipur-1740, Bangladesh.
              </h5>
              <>
                <h5 className="fw-bold">Contact Us</h5>
                <div className="d-flex align-items-center my-1">
                  <FaPhone size={20} className="me-2" />
                  <span className="">+88-02-222285092</span>
                </div>
                <div className="d-flex align-items-center my-1">
                  <FaPhone size={20} className="me-2" />
                  <span className="">222286443</span>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
