import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/AllAssets/HomePage/discover/needlework.jpg";
import Img2 from "../../../assets/AllAssets/HomePage/discover/ProductDevelopment.jpg";
import Img3 from "../../../assets/AllAssets/HomePage/discover/Fabrication.jpg";
import Img4 from "../../../assets/AllAssets/HomePage/discover/Cutting.jpg";
import Img5 from "../../../assets/AllAssets/HomePage/discover/ChestPrint.jpg";
import Img6 from "../../../assets/AllAssets/HomePage/discover/Embroidery.jpg";
import Img7 from "../../../assets/AllAssets/HomePage/discover/Garments.jpg";
import Img8 from "../../../assets/AllAssets/HomePage/discover/Wash.jpg";
import Img9 from "../../../assets/AllAssets/HomePage/discover/Accreditation.jpg";
import Img10 from "../../../assets/AllAssets/HomePage/discover/UnderGarments.jpg";

import DiscoverText from "./TextDiscover";
import "./Discover.css";

function index() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const menuItems = [
    {
      bg: `url(${Img1})`,
      gotTo: "products?tabProduct=service&discoverTab=designStdio",
      header: "Design Studio",
      description:
        "HAMS Design Studio stands as the creative nucleus within the HAMS Group, pioneering the innovative and trendsetting designs that define the essence of the brand.",
    },
    {
      bg: `url(${Img2})`,
      gotTo: "products?tabProduct=service&discoverTab=productdevelopment",
      header: "Product Development",
      description:
        "Products Development Details Will be added later.Colorizing Details Will be added later.Colorizing Details Will be added later. Colorizing Details Will be added later.Colorizing Details Will be added later.",
    },
    {
      bg: `url(${Img3})`,
      gotTo: "products?tabProduct=service&discoverTab=fabrication",
      header: "Fabrication",
      description:
        "HAMSGL offering versatility to meet various market demands by the fabrication process of HAMSGL.",
    },
    {
      bg: `url(${Img4})`,
      gotTo: "products?tabProduct=service&discoverTab=cutting",
      header: "Cutting",
      description:
        "Cutting Details Will be added later.Embroidery Details Will be added later.Embroidery Details Will be added later.Colorizing Details Will be added later.Colorizing Details Will be added later.",
    },
    {
      bg: `url(${Img5})`,
      gotTo: "products?tabProduct=service&discoverTab=chestprint",
      header: "Placement Print",
      description:
        "At HAMS, our Placement Printing Section is a testament to our commitment to innovation and quality in garment printing. With a sprawling 36,000 sq. ft dedicated to this art, we stand at the forefront of the industry with a production capacity of 1,00,000 p ieces per day.",
    },
    {
      bg: `url(${Img6})`,
      gotTo: "products?tabProduct=service&discoverTab=embroidery",
      header: "Embroidery",
      description:
        "HAMS operates a 10,000 sq. ft embroidery unit with 9 sets of Tajima and MAYA embroidery machines. The unit has a capacity of 7 billion stitches per month and specializes in intricate designs.",
    },
    {
      bg: `url(${Img7})`,
      gotTo: "products?tabProduct=service&discoverTab=garments",
      header: "Garments",
      description:
        "Dhaka Garments and Wash Limited is a prominent player in the readymade garment industry in Bangladesh, specializing in washing and Woven & Denim manufacturing services. ",
    },
    {
      bg: `url(${Img10})`,
      header: "Under Garments",
      gotTo: "products?tabProduct=service&discoverTab=undergarments",
      description:
        "Under Garments Details Will be added later.ETP Details Will be added later.ETP Details Will be added later.ETP Details Will be added later.",
    },
    {
      bg: `url(${Img8})`,
      gotTo: "products?tabProduct=service&discoverTab=wash",
      header: "Wash",
      description:
        "In the realm of garment finishing, HAMS Garments takes pride in its comprehensive wash profile, offering a spectrum of techniques that elevate the appeal and character of each garment.",
    },
    {
      bg: `url(${Img9})`,
      header: "Accreditation",
      gotTo: "products?tabProduct=service&discoverTab=accreditation",
      description:
        "HAMS Group's Textile Lab have accreditations from various organizations for standards related to textile testing and quality assurance.",
    },
    {
      bg: `url(${Img10})`,
      header: "Effluent Treatment Plant (ETP)",
      gotTo: "products?tabProduct=service&discoverTab=etp",
      description:
        "Effluent Treatment Plant Details Will be added later.ETP Details Will be added later.ETP Details Will be added later.ETP Details Will be added later.",
    },
  ];

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <section id="intro" className="info" style={{ marginTop: "75px" }}>
      <div className="h-50">
        <div className="dark-overlay">
          <div className="container-fluid">
            <Row
              className="d-flex justify-content-center main-banner2 discover-image"
              style={{
                backgroundImage: menuItems[activeMenuItem].bg,
              }}
            >
              <Col lg={12} md={12} className="">
                <Row className="">
                  <Col lg={2} md={2}></Col>
                  <Col className="h-100 p-0" lg={3} md={12} sm={12}>
                    <div className="banner-content discover content-padding white sidebar h-100">
                      <h5
                        className="text-center"
                        style={{
                          fontSize: "20px",
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
                              style={{ fontSize: "14px", fontWeight: "600" }}
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
                    lg={7}
                    md={12}
                    sm={12}
                    className="d-flex align-items-end"
                  >
                    <div className="discover-parent row">
                      {/* show only md device */}
                      <div
                        className="header-text col-md-12 text-success discover-child bottom-section d-none d-md-block"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                      >
                        <p
                          id="header-text"
                          className="description-text text-white"
                        >
                          <DiscoverText
                            discover={menuItems[activeMenuItem].description}
                          />
                        </p>
                        <div className="d-flex justify-content-end mb-2 w-100 pb-2">
                          <Button className="nav-button border-0 mx-1 virtual-tour my-2 my-lg-0 my-md-1 mx-4">
                            <Link to={menuItems[activeMenuItem].gotTo}>
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </div>
                      {/* show other mobile device */}
                      <div
                        className="header-text col-md-12 text-success discover-child bottom-section d-md-none"
                        style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
                      >
                        <p
                          id="header-text"
                          className="description-text text-white"
                        >
                          <DiscoverText
                            discover={menuItems[activeMenuItem].description}
                          />
                        </p>
                        <div className="d-flex justify-content-end mb-2 w-100 pb-2">
                          <Button className="nav-button border-0 mx-1 virtual-tour my-2 my-lg-0 my-md-1 mx-4">
                            <Link to={menuItems[activeMenuItem].gotTo}>
                              Read More
                            </Link>
                          </Button>
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

export default index;
