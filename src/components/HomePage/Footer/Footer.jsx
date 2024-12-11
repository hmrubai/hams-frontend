import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import DhakaGarments from "../../../assets/AllPhotoFinal/FooterLogo/DGWL.png";
import HamsFasion from "../../../assets/AllPhotoFinal/FooterLogo/HFL.png";
import HamsGarments from "../../../assets/AllPhotoFinal/FooterLogo/HGL.png";
import VectoriaGarments from "../../../assets/AllPhotoFinal/FooterLogo/VIL.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const goToCSR = () => {
    navigate("/compliance-csr", { state: { activeTab: "csr" } });
  };
  return (
    <footer className="footer-color-bg text-black py-5">
      <Container className="">
        <Row className="justify-content-center">
          <Col md={3} className="text-center mb-md-0 d-none d-md-block">
            <div className="d-flex flex-column align-items-center gap-4 mt-3">
              <Link to="/hamsGarment" className="">
                <img
                  src={HamsGarments}
                  alt="About Us"
                  className="img-fluid h-50 w-50"
                />
              </Link>

              <Link to="/victoriaIntimate">
                <img
                  src={VectoriaGarments}
                  alt="About Us"
                  className="img-fluid h-50 w-50"
                />
              </Link>
              <Link to="/dhakaGarment">
                <img
                  src={DhakaGarments}
                  alt="About Us"
                  className="img-fluid h-50 w-50"
                />
              </Link>
              <Link to="/hamsFasion">
                <img
                  src={HamsFasion}
                  alt="About Us"
                  className="img-fluid h-50 w-50"
                />
              </Link>
            </div>
          </Col>
          {/* mobile device show only */}
          <Col className="text-center mb-md-0 d-block d-sm-none my-3">
            <div className="d-flex flex-column align-items-center gap-2">
              <Row className="w-100">
                <Col xs={6} className="d-flex justify-content-center">
                  <a href="/hamsGarment">
                    <img
                      src={HamsGarments}
                      alt="About Us"
                      className="img-fluid h-50 w-100"
                    />
                  </a>
                </Col>
                <Col xs={6} className="d-flex justify-content-center">
                  <a href="/victoriaIntimate">
                    <img
                      src={VectoriaGarments}
                      alt="About Us"
                      className="img-fluid h-50 w-100"
                    />
                  </a>
                </Col>
              </Row>
              <Row className="w-100">
                <Col xs={6} className="d-flex justify-content-center">
                  <a href="/dhakaGarment">
                    <img
                      src={DhakaGarments}
                      alt="About Us"
                      className="img-fluid h-50 w-100"
                    />
                  </a>
                </Col>
                <Col xs={6} className="d-flex justify-content-center">
                  <a href="/hamsFasion">
                    <img
                      src={HamsFasion}
                      alt="About Us"
                      className="img-fluid h-50 w-100"
                    />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>

          {/* show only md device */}
          <Col
            md={5}
            className="text-start mb-3 mb-md-0 px-2 mb-md-0 d-none d-md-block text-black"
          >
            <>
              <h5 className="using-title-font">Visit Us</h5>
              <div>
                <p className="text-start">
                  <span className="fw-bold">Head Office:</span> House # 01, Road
                  # 06, Block # F, Niketon, Gulshan-1, Dhaka - 1212
                </p>
                <p className="text-start">
                  <span className="fw-bold">Factory:</span> Dakkhin Vangnahati,
                  Sreepur, Gazipur-1740, Bangladesh
                </p>
              </div>
            </>
            <>
              <h5 className="using-title-font">Contact Us</h5>

              <div className="d-flex align-items-center my-1">
                <FaEnvelope size={20} className="me-2" />
                <span className="">info@hams.com.bd</span>
              </div>
            </>
            <div className="d-flex justify-content-start align-items-start gap-3 mt-3">
              <a
                href="https://www.facebook.com/profile.php?id=100064054327561"
                target="blank"
                style={{ color: "blue" }}
              >
                <FaFacebook size={30} />
              </a>

              <a
                href="https://www.linkedin.com/company/hamsgarmentsltd/"
                target="blank"
                style={{ color: "blue" }}
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.youtube.com/@hamsgroupofficial6908"
                target="blank"
                style={{ color: "red" }}
              >
                <FaYoutube size={30} />
              </a>
            </div>
          </Col>

          <Col
            md={2}
            className="text-center mb-md-0 d-none d-md-block text-black"
          >
            <div className="d-flex flex-column align-items-start gap-2">
              <h5 className="using-title-font">Quick Links</h5>

              <Link
                to="/about#we-are-section"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                About Us
              </Link>

              <Link
                to="/our-business"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Our Business
              </Link>

              <Link
                to="/sustainability"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Sustainability
              </Link>

              <Link
                to="/products?tabProduct=product"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Products
              </Link>

              <Link
                to="/products?tabProduct=service"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Services
              </Link>

              <Link
                to="compliance-csr?tab=csr"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                CSR
              </Link>
            </div>
          </Col>

          <Col md={2} className="text-center mb-md-0 d-none d-md-block">
            <div className="d-flex flex-column align-items-start gap-2">
              <h5 className="my-3"></h5>
              <Link
                to="/"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Policy
              </Link>

              <Link
                to="/about#client"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Buyers
              </Link>

              <Link
                to="/about#certifications"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Certificates
              </Link>
              <Link
                to="/achievement"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Achievement
              </Link>
              <Link
                to="/impact-stories?tab=photoGallery"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Photo Gallery
              </Link>
              <Link
                to="/employee-first"
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Employees
              </Link>

              <Link
                to="/about#owner"
                state={{ scrollToDiv: true }}
                className="text-black fw-bold"
                style={{ textDecoration: "underline" }}
              >
                Messages
              </Link>
            </div>
          </Col>

          {/* mobile device social icon */}

          <div className="d-flex flex-column">
            <Col className="text-center mb-md-0 d-block d-sm-none">
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <div className="d-flex flex-rows gap-2">
                  <Link
                    href="/about#we-are-section"
                    className="text-black mb-2 fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/ourBusiness"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Our Business
                  </Link>

                  <Link
                    to="/sustainability"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Sustainability
                  </Link>
                  <Link
                    to="/products?tabProduct=product"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Products
                  </Link>
                </div>
                <div className="d-flex flex-rows gap-2">
                  <Link
                    to="/products?tabProduct=service"
                    className="text-black mb-2 fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Services
                  </Link>
                  <Link
                    to="compliance-csr?tab=csr"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    CSR
                  </Link>

                  <Link
                    to="/"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Policy
                  </Link>
                </div>
                <div className="d-flex flex-rows gap-2">
                  <Link
                    href="/about#client"
                    className="text-black mb-2 fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Buyers
                  </Link>
                  <Link
                    to="/about#certifications"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Certificates
                  </Link>
                  <Link
                    to="/achievement"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Achievement
                  </Link>
                  <Link
                    to="/impact-stories?tab=photoGallery"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Photo Gallery
                  </Link>
                </div>
                <div className="d-flex flex-rows gap-2 mb-3">
                  <Link
                    to="/employee-first"
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Employees
                  </Link>
                  <Link
                    to="/about#owner"
                    state={{ scrollToDiv: true }}
                    className="text-black fw-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    Messages
                  </Link>
                </div>
              </div>
            </Col>

            <Col className="text-center mb-md-0 d-block d-sm-none text-black">
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <>
                  <h5 className="using-title-font">Visit Us</h5>
                  <div>
                    <p className="text-center">
                      <span className="fw-bold">Head Office:</span> House # 01,
                      Road # 06, Block # F, Niketon, Gulshan-1, Dhaka - 1212
                    </p>
                    <p className="text-center">
                      <span className="fw-bold">Factory:</span> Dakkhin
                      Vangnahati, Sreepur, Gazipur-1740, Bangladesh
                    </p>
                  </div>
                </>
                <>
                  <h5 className="using-title-font">Contact Us</h5>
                  <div className="d-flex flex-column align-items-center my-1">
                    <div className="d-flex align-items-center">
                      <FaPhone size={20} className="me-2" />
                      <span className="">+88-02-222285092</span>
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <FaPhone size={20} className="me-2" />
                      <span className="">222286443</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaEnvelope size={20} className="me-2" />
                      <span className="">hams@gmail.com</span>
                    </div>
                  </div>
                </>
              </div>
            </Col>

            <Col className="text-center mb-md-0 d-block d-sm-none text-black">
              <div className="d-flex justify-content-center align-items-center gap-5 my-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100064054327561"
                  target="blank"
                  style={{ color: "blue" }}
                >
                  <FaFacebook size={30} />
                </a>

                <a
                  href="https://www.linkedin.com/company/hamsgarmentsltd/"
                  target="blank"
                  style={{ color: "blue" }}
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.youtube.com/@hamsgroupofficial6908"
                  style={{ color: "red" }}
                >
                  <FaYoutube size={30} />
                </a>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
