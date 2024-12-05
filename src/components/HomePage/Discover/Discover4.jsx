import React, { useState } from "react";
import heroImage from "../../../assets/hero-section-slider-image-1.png";
import Img1 from "../../../assets/our-service/1-needlework.jpg";
import Img2 from "../../../assets/our-service/2-colorizing.jpg";
import Img3 from "../../../assets/our-service/3-reproduction.jpg";
import Img4 from "../../../assets/our-service/4-embroidery.jpg";
import Img5 from "../../../assets/our-service/5-offset-printing.jpg";
import Img6 from "../../../assets/our-service/6-accessories.jpg";
import Img7 from "../../../assets/our-service/7-etp.jpg";
import image2 from "../../../assets/contact-section-image.png";
import "./Discover.css";
import { Col, Row } from "react-bootstrap";
import DiscoverText from "./DiscoverText";
import { Link } from "react-router-dom";

function Discover4() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const menuItems = [
    {
      bg: `url(${Img1})`,
      header: "Needlework",
      description:
        "Needlework Details Will be added later.Needlework Details Will be added later.Needlework Details Will be added later.",
    },
    {
      bg: `url(${Img2})`,
      header: "Colorizing",
      description:
        "Colorizing Details Will be added later.Colorizing Details Will be added later.Colorizing Details Will be added later.",
    },
    {
      bg: `url(${Img3})`,
      header: "Reproduction",
      description:
        "Reproduction Details Will be added later.Reproduction Details Will be added later.Reproduction Details Will be added later.",
    },
    {
      bg: `url(${Img4})`,
      header: "Embroidery",
      description:
        "Embroidery Details Will be added later.Embroidery Details Will be added later.Embroidery Details Will be added later.",
    },
    {
      bg: `url(${Img5})`,
      header: "Offset Printing",
      description:
        "Offset Printing Details Will be added later. Offset Printing Details Will be added later.Offset Printing Details Will be added later.",
    },
    {
      bg: `url(${Img6})`,
      header: "Accessories",
      description:
        "Accessories Details Will be added later.Accessories Details Will be added later.Accessories Details Will be added later",
    },
    {
      bg: `url(${Img7})`,
      header: "ETP",
      description:
        "ETP Details Will be added later.ETP Details Will be added later.ETP Details Will be added later.ETP Details Will be added later.",
    },
  ];

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <section id="intro" className="info">
      <div className="h-100">
        <div className="dark-overlay">
          <div className="container-fluid">
            <Row
              className="d-flex justify-content-center main-banner2 discover-image"
              style={{
                backgroundImage: menuItems[activeMenuItem].bg,
              }}
            >
              <Col lg={8} md={10} className="">
                <Row className="">
                  <Col className="h-100" lg={3} md={3} sm={10}>
                    <div className="banner-content discover content-padding white sidebar h-100">
                      <h5
                        className="text-center"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                        }}
                      >
                        Discover What We Offer
                      </h5>
                      <ul id="menu" className="py-1">
                        {menuItems.map((menuItem, index) => (
                          <li
                            key={index}
                            className={`${
                              activeMenuItem === index ? "active" : ""
                            } py-1 py-xl-2`}
                          >
                            <Link
                              style={{ fontSize: "14px" }}
                              //   href="#"
                              className="change-bg"
                              data-bg={menuItem.bg}
                              data-header={menuItem.header}
                              onClick={() => handleMenuItemClick(index)}
                            >
                              {menuItem.header}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>

                  <Col
                    lg={9}
                    md={9}
                    sm={9}
                    className="d-flex align-items-end justify-content-start"
                  >
                    <div className="discover-parent row justify-content-start align-items-start">
                      <div
                        className="header-text col-md-12 text-success discover-child bottom-section"
                        style={{ backgroundColor: "rgba(127, 198, 164, 1)" }}
                      >
                        <p
                          id="header-text"
                          className="description-text text-dark"
                        >
                          <DiscoverText
                            discover={menuItems[activeMenuItem].description}
                          />
                        </p>
                        <div className="d-flex justify-content-end mb-2 w-100">
                          <button className="btn btn-light">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover4;
