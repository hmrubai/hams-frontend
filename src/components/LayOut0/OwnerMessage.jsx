import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import "./Layout.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "../../assets/AllPhotoFinal/Director1.jpeg";
import { useLocation } from "react-router-dom";

const OwnerMessage = () => {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div id="owner" className="d-none d-md-block mb-2 mx-3">
      <Carousel
        className="justify-content-center align-items-center"
        itemsToShow={2}
      >
        <item className="p-2 text-justify">
          <Card
            style={{
              width: "100%",
              boxShadow: "0 2px 4px #0003, 0 6px 12px #00000030",
            }}
          >
            <div className="d-flex align-items-center p-4">
              <div className="me-3">
                <Card.Img
                  variant="top"
                  src="http://api-hams.bacbonx.com/uploads/icon/bb_91711878436.jpg"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
              <div className="justify-content-end my-5 text-justify">
                <Card.Title>Engr. Md. Shafiqur Rahman</Card.Title>
                <Card.Text>Managing Director, HAMS Garments Limited</Card.Text>
              </div>
            </div>

            <Card.Body className="text-justify">
              <Card.Text className="text-justify">
                Welcome to HAMS Garments Limited At HAMSGL, we are dedicated to
                excellence in every aspect of our business. Our commitment to
                quality, sustainability, and ethical practices drives us to
                continuously improve and innovate. We believe in creating a
                positive impact not only through the garments we produce but
                also through the way we conduct our business. Our journey is
                guided by a vision to be a leader in the textile and garment
                industry, setting benchmarks for quality and sustainability. We
                take pride in our certifications and accolades, which reflect
                our unwavering commitment to upholding the highest standards. We
                owe our success to the hard work and dedication of our
                employees, the trust and support of our clients, and our
                relentless pursuit of excellence. Together, we are creating a
                sustainable future, one garment at a time. Thank you for being a
                part of our journey.
              </Card.Text>
            </Card.Body>
          </Card>
        </item>
        <item className="my-5 p-2">
          <Card
            style={{
              width: "100%",
              boxShadow: "0 2px 4px #0003, 0 6px 12px #00000030",
            }}
          >
            <div className="d-flex align-items-center p-4">
              <div className="me-3">
                <Card.Img
                  variant="top"
                  src="https://www.hams.com.bd/images/client-2.jpg"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
              <div className="justify-content-end my-5 text-justify">
                <Card.Title>Shaifur Rahman</Card.Title>
                <Card.Text>Senior Director, HAMS Garments Limited</Card.Text>
              </div>
            </div>

            <Card.Body className="text-justify">
              <Card.Text className="text-justify">
                Welcome to HAMS Garments Limited As the Senior Director, I am
                proud to share our ongoing commitment to excellence,
                sustainability, and innovation. At HAMSGL, we are not just
                manufacturing garments; we are shaping the future of the textile
                industry by integrating cutting-edge technology, sustainable
                practices, and unparalleled quality into everything we do. Our
                dedicated team is the cornerstone of our success. Their
                expertise, creativity, and unwavering dedication allow us to
                consistently meet and exceed our clients' expectations. We are
                also deeply committed to our Corporate Social Responsibility
                initiatives, ensuring that we positively impact our community
                and the environment. Our vision is clear: to lead the industry
                with integrity, innovation, and sustainability. We continuously
                strive to improve our processes, reduce our environmental
                footprint, and deliver exceptional products to our customers
                worldwide. Thank you for your trust and support as we continue
                to build a brighter, more sustainable future.
              </Card.Text>
            </Card.Body>
          </Card>
        </item>
        <item className="p-2">
          <Card
            style={{
              width: "100%",
              boxShadow: "0 2px 4px #0003, 0 6px 12px #00000030",
            }}
          >
            <div className="d-flex align-items-center p-4">
              <div className="me-3">
                <Card.Img
                  variant="top"
                  src={Image}
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
              <div className="justify-content-end my-5 text-justify">
                <Card.Title>Abu Sufian</Card.Title>
                <Card.Text>Director, HAMS Garments Limited</Card.Text>
              </div>
            </div>

            <Card.Body className="text-justify">
              <Card.Text className="text-justify">
                Welcome to HAMS Garments Limited As a Director, I am delighted
                to share our journey of growth, innovation, and sustainability.
                At HAMSGL, we are driven by a passion for excellence and a
                commitment to delivering the highest quality garments to our
                esteemed clients across the globe. Our team of skilled
                professionals is our greatest asset. Their dedication,
                expertise, and creativity enable us to consistently exceed
                industry standards and customer expectations. We are proud to be
                at the forefront of sustainable practices, integrating
                eco-friendly methods and materials into our production processes
                to ensure a greener future for all. At HAMSGL, we believe in the
                power of collaboration and continuous improvement. Our strategic
                partnerships, advanced technologies, and robust quality control
                systems ensure that we remain a trusted leader in the textile
                industry. Thank you for your continued support and trust in
                HAMSGL. Together, we are building a sustainable and prosperous
                future.
              </Card.Text>
            </Card.Body>
          </Card>
        </item>
      </Carousel>
    </div>
  );
};

export default OwnerMessage;
