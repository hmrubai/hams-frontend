import React, { useState } from "react";
import heroImage from "../../../assets/hero-section-slider-image-1.png";
import image2 from "../../../assets/contact-section-image.png";
import "./Discover.css";

function Discover3() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const menuItems = [
    {
      bg: `url(${heroImage})`,
      header: "Service",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio commodi saepe voluptatibus, asdfadfsasdfdsafds?",
    },
    {
      bg: `url(${image2})`,
      header: "Advice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio commodi saepe voluptatibus, asdfadfsasdfdsafds?",
    },
    {
      bg: `url(${heroImage})`,
      header: "new tab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio commodi saepe voluptatibus, asdfadfsasdfdsafds?",
    },
    {
      bg: `url(${image2})`,
      header: "new tab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio commodi saepe voluptatibus, asdfadfsasdfdsafds?",
    },
    {
      bg: `url(${heroImage})`,
      header: "new tab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio commodi saepe voluptatibus, asdfadfsasdfdsafds?",
    },
  ];

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <section id="intro" className="info">
      <div className="main-banner2 h-100">
        <div className="dark-overlay">
          <div className="container-fluid">
            <div
              className="row d-flex justify-content-center main-banner2"
              style={{ backgroundImage: menuItems[activeMenuItem].bg }}
            >
              <div className="col-md-10">
                <div className="banner-content discover content-padding white col-md-3 sidebar">
                  <h5>Discover What We Offer</h5>
                  <ul id="menu" className="">
                    {menuItems.map((menuItem, index) => (
                      <li
                        key={index}
                        className={activeMenuItem === index ? "active" : ""}
                      >
                        <a
                          className="change-bg"
                          data-bg={menuItem.bg}
                          data-header={menuItem.header}
                          onClick={() => handleMenuItemClick(index)}
                        >
                          {menuItem.header}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="discover-parent row justify-content-end">
                  <div
                    className="header-text col-md-8 text-success discover-child"
                    style={{ backgroundColor: "#7FC6A4" }}
                  >
                    <p id="header-text" className="description-text text-dark">
                      {menuItems[activeMenuItem].description}
                    </p>
                    <div className="d-inline-flex justify-content-end w-100">
                      <button>Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover3;
