import React, { useEffect } from "react";
import "./AchievementLink.css";
import section1 from "../../../assets/servicesMenu/section1.png";
import section2 from "../../../assets/servicesMenu/section2.png";
import section3 from "../../../assets/servicesMenu/section3.png";
import section4 from "../../../assets/servicesMenu/section4.png";
import section5 from "../../../assets/servicesMenu/section5.png";
import section6 from "../../../assets/servicesMenu/section6.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { GoHorizontalRule } from "react-icons/go";
import rightArrow from "../../../assets/right-arrow.png";
// import OverView from "../Shared/OverView/OverView";
import AchievementCard from "./AchievementCard";

const AchievementLink = () => {
  const services = [
    {
      id: "1",
      secondaryHeading: "HAMS Design Center",
      primaryHeading: "Pioneering Creativity and Innovation",
      image: section1,
      description:
        " At the heart of HAMS's success lies its Design Center a hub of creativity and innovation that drives the company's distinctive edge in the fashion industry. The center serves as the crucible where ideas are molded into unique, trendsetting designs that re sonate with global fashion trends. HAMS Design Center is not merely about sketching garments; it's a collaborative space where designers, fabric experts, and sustainability enthusiasts converge. Focused on weaving a narrative of elegance, functionality, and environmental responsibility, the Design Center embodies HAMS's commitment to pushing the boundaries of conventional fashion, setting the stage for unparalleled collections that captivate and inspire",
    },
    {
      id: "2",
      secondaryHeading: "Revolutionizing Fashion",
      primaryHeading: "HAMS's 3D Sampling by Clo3",
      description:
        "HAMS stands at the forefront of the fashion industry, integrating cutting -edge technology into its creative processes. The introduction of 3D sampling by Clo3 is a testament to HAMS's commitment to innovation and efficiency. This revolutionary technology a llows designers to visualize garments in a three-dimensional space, streamlining the sampling process. With Clo3, HAMS accelerates product development, reduces waste, and ensures precision in design execution. This forward-thinking approach not only enhances the design-to-production timeline but also aligns seamlessly with HAMS's sustainability goals, marking a significant leap forward in the company's quest for excellence in fashion and environmental responsibility.",
      image: section2,
    },
    {
      id: "3",
      secondaryHeading: "Transforming Transactions",
      primaryHeading: "HAMS Digital Payment System",
      description:
        "In a stride towards modernity and efficiency, HAMS has embraced a robust digital payment system. This forward-thinking approach not only enhances the financial transaction process within the organization but also reflects HAMS's commitment to employee welfare. With a 100% digital payment system in place, HAMS ensures swift, secure, and transparent disbursement of salaries and benefits. This initiative not only aligns with global financial trends but also underscores HAMS's dedication to providing its workforce with convenient and reliable financial solutions, fostering a seamless and progressive work environment. The digital payment system embodies HAMS's commitment to innovation, efficiency, and the well-being of its valued employees.",
      image: section3,
    },
    {
      id: "4",
      secondaryHeading: "Caring for Well-Being",
      primaryHeading: "Medical Facilities at HAMS",
      description:
        "At HAMS, the well-being of its workforce is paramount, and this commitment extends to providing comprehensive medical facilities. The organization ensures access to quality healthcare for its employees, promoting a healthy and supportive work environment. HAMS's medical facilities are equipped with modern amenities, offering timely healthcare services, routine check-ups, and emergency support. The emphasis on health reflects HAMS's holistic approach to employee welfare, acknowledging that a healthy workforce is key to sustained productivity. Through its medical facilities, HAMS not only address es the immediate health needs of its employees but also fosters a culture of preventive care, emphasizing the importance of a healthy work-life balance.",
      image: section3,
    },
    {
      id: "5",
      secondaryHeading: "Garment Production Service",
      primaryHeading: "Knitting",
      description:
        "Pioneering Policies Shaping HAMS Today To be written once it is available",
      image: section2,
    },
  ];
  return (
    <div>
      <section className="services-menu-section-bg-image d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center"></div>
        <h1 className="text-white text-center">
          Do Well, Live Well & <br />
          <span className="hero-text">Dress</span> Very Well
        </h1>
        {/* <div className="d-flex">
          <p className="text-white mb-0 mx-2">Home</p>
          <img src={rightArrow} className="mx-2" alt="" srcSet="" />
          <p className="text-white mb-0 mx-2">Company</p>
        </div> */}
      </section>

      <section className="pt-5">
        <div className="container-fluid">
          <div className="">
            <div className="row main-container justify-content-center mx-auto">
              {/* <div className="col-lg-2 col-md-2 col-sm-12 left-sidenav">
                <OverView />
              </div> */}

              <div className="col-lg-8 col-md-10 col-sm-12">
                {services.map((service) => (
                  <AchievementCard
                    key={service.id}
                    service={service}
                  ></AchievementCard>
                ))}

                <h3 className="text-center my-3">
                  <GoHorizontalRule className="minus-icon-style" />
                  How We Work
                </h3>

                <div className="row my-5 mx-lg-5 mx-sm-1">
                  <div className="col-lg-5 col-md-5 col-sm-12 my-auto">
                    <img
                      src={section5}
                      className="img-fluid"
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <div className="col-md-7 col-lg-7 col-sm-12 my-auto">
                    <h5>Garment Production Service</h5>
                    <h2>Knitting</h2>
                    <ul className="list-unstyled">
                      <li className="my-2 d-flex align-items-center">
                        <AiFillCheckCircle className="me-1 check-icon" />
                        <span className="description-text">
                          List 1: Creative Expression and Customization
                        </span>
                      </li>
                      <li className="my-2 d-flex align-items-center">
                        <AiFillCheckCircle className="me-1 check-icon" />
                        <span className="description-text">
                          List 1: Creative Expression and Customization
                        </span>
                      </li>
                      <li className="my-2 d-flex align-items-center">
                        <AiFillCheckCircle className="me-1 check-icon" />
                        <span className="description-text">
                          List 1: Creative Expression and Customization
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementLink;
