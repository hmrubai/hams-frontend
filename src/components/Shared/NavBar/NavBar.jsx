import { useEffect, useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import companyLogo from "../../../assets/AllPhotoFinal/FooterLogo//HGL.png";
import line from "../../../assets/line.png";
import navEmail from "../../../assets/navEmail.png";
import navLocation from "../../../assets/navLocation.png";
import { useLogout, useToken, useUser } from "../../../hooks/useAuth";
import { useGetCommonApiQuery } from "../../../services/post";
import "./NavBar.css";

const NavBar = () => {
  const commonRes = useGetCommonApiQuery();
  const token = useToken();
  const user = useUser();
  const virtualTourApi = commonRes?.data?.data?.tour_link;

  const logout = () => {
    useLogout();
    location.reload();
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.3)");
  const [isUpperNavVisible, setUpperNavVisible] = useState(true);

  useEffect(() => {
    const handleMouseWheel = () => {
      const scrollPosition = 10;

      if (window.scrollY >= scrollPosition) {
        setBackgroundColor("rgba(0, 0, 0, 0.9)");
        setUpperNavVisible(false);
      } else {
        setBackgroundColor("rgba(0, 0, 0, 0.3)");
        setUpperNavVisible(true);
      }
    };

    window.addEventListener("wheel", handleMouseWheel);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  return (
    <div className="fixed-top">
      <div>
        <div
          className={
            isUpperNavVisible
              ? "upper-nav d-none d-md-none d-lg-block"
              : "upper-nav-hidden"
          }
        >
          <div className="container">
            <div className="d-flex justify-content-between my-auto mx-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="mb-0 d-flex align-items-center py-1">
                  <Link
                    href="https://maps.app.goo.gl/dmVEneAMGi3fmVsN8"
                    target="blank"
                    className="text-decoration-none text-white"
                  >
                    <img src={navLocation} alt="" className="me-1" srcSet="" />
                    {commonRes?.data?.data?.office_address_one}
                  </Link>
                </div>

                <img src={line} alt="" className="mx-3" srcSet="" />
                <img src={navEmail} alt="" className="mx-2" srcSet="" />
                <h6 className="d-flex align-items-center py-1 mb-0 mx-2">
                  {commonRes?.data?.data?.email}
                </h6>
              </div>

              <div className="social-icon text-center align-items-center d-flex justify-content-center">
                <>
                  <Link
                    to="https://www.facebook.com/profile.php?id=100064054327561"
                    target="blank"
                  >
                    <BsFacebook
                      className=""
                      size={20}
                      style={{ color: "#FFF", marginLeft: "12px" }}
                    />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/hamsgarmentsltd/"
                    target="blank"
                  >
                    <BsLinkedin
                      className=""
                      size={20}
                      style={{ color: "#FFF", marginLeft: "12px" }}
                    />{" "}
                  </Link>
                  <Link
                    to="https://www.youtube.com/@hamsgroupofficial6908"
                    target="blank"
                  >
                    {" "}
                    <BsYoutube
                      className=""
                      size={20}
                      style={{ color: "#FFF", marginLeft: "12px" }}
                    />{" "}
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={showModal}
          onHide={closeModal}
          size="lg"
          dialogClassName="modal-fullscreen"
        >
          <Modal.Header closeButton>
            <Modal.Title>Virtual Walkthrough</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              title="Virtual Walkthrough"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              src={virtualTourApi}
            ></iframe>
          </Modal.Body>
        </Modal>

        <Navbar
          expand="lg"
          className="custom-navbar"
          style={{ backgroundColor }}
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <div className="ms-5">
                <Link to="/">
                  <img
                    src={companyLogo}
                    className="company-logo h-25"
                    alt=""
                    srcSet=""
                  />
                </Link>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="container-fluid d-flex justify-content-lg-center justify-content-sm-start">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    (isActive ? "active " : "") +
                    "text-color ms-2 text-decoration-none hover-link navbar-font"
                  }
                >
                  Home
                </NavLink>

                {/* Home page route nav links start ===  */}
                <NavLink
                  to="/home-page-route"
                  className={({ isActive }) =>
                    (isActive ? "active " : "") +
                    "text-color ms-2 text-decoration-none hover-link navbar-font"
                  }
                >
                  New Home
                </NavLink>
                {/* Home page route nav links end ===  */}

                <NavLink
                  to="/about"
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                >
                  About Us
                </NavLink>
                {/* <NavLink
                  to="/our-business"
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                >
                  Our Business
                </NavLink> */}
                {/* ======== Our Business route nav links start ==== */}
                <NavLink
                  to="/our-business"
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                >
                  Our Business
                </NavLink>
                {/* ======== Our Business route nav links end ==== */}

                <NavLink
                  to="/products"
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                >
                  Products & Services
                </NavLink>
                {/* <NavLink
                  to="/sustainability"
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                >
                  Going Green
                </NavLink> */}
                {/* ======== Going Green route nav links start ==== */}
                <NavLink
                  to="/going-green"
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                >
                  Going Green
                </NavLink>
                {/* ======== Going Green route nav links end ==== */}
                {/* <NavLink
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                  to="/compliance-csr"
                >
                  Complience & CSR
                </NavLink> */}
                {/* ======== Compliance & CSR route nav links start ==== */}
                <NavLink
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                  to="/compliance-csr-route"
                >
                  Compliance & CSR
                </NavLink>
                {/* ======== Compliance & CSR route nav links end ==== */}
                {/* <NavLink
                  to="impact-stories"
                  className="text-color text-decoration-none navbar-font ms-2"
                >
                  Impact Stories
                </NavLink> */}
                {/* ======== Impact Stories route nav links start ==== */}
                <NavLink
                  to="impact-stories-route"
                  className="text-color text-decoration-none navbar-font ms-2"
                >
                  Impact Stories
                </NavLink>
                {/* ======== Impact Stories route nav links end ==== */}

                {/* <NavLink
                  to="employee-first"
                  className="text-color ms-2 text-decoration-none navbar-font"
                >
                  Employee First
                </NavLink> */}
                {/* ======== Employee First route nav links start ==== */}
                <NavLink
                  to="/employee-first-route"
                  className="text-color ms-2 text-decoration-none hover-link navbar-font"
                >
                  Employee First
                </NavLink>
                {/* ======== Employee First route nav links end ==== */}

                {/**<NavLink   
                  to="/contact"
                  className="text-color ms-2 text-decoration-none navbar-font"
                >
                  Contact Us
                </NavLink>**/}
              </Nav>

              <Button
                className="nav-button border-0 mx-1 virtual-tour my-3 my-lg-0 my-md-1"
                onClick={openModal}
              >
                Virtual Tour
              </Button>

              <Link to="/contact">
                <Button className="nav-button border-0 mx-1 login-button my-3 my-lg-0 my-md-1">
                  Contact Us
                </Button>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
