import React from "react";
import "./ServicesMenu.css";
import section1 from "../../assets/servicesMenu/section1.png";
import section2 from "../../assets/servicesMenu/section2.png";
import section3 from "../../assets/servicesMenu/section3.png";
import section4 from "../../assets/servicesMenu/section4.png";
import section5 from "../../assets/servicesMenu/section5.png";
import section6 from "../../assets/servicesMenu/section6.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { GoHorizontalRule } from "react-icons/go";
import rightArrow from "../../assets/right-arrow.png";
import OverView from "../Shared/OverView/OverView";
import Service from "./Service";

const ServicesMenu = () => {
  const services = [
    {
      id: "1",
      secondaryHeading: "Garment Production Service",
      primaryHeading: "Knitting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis. quisquam consequuntur minus! Adipisci, blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
      image: section1,
    },
    {
      id: "2",
      secondaryHeading: "Garment Production Service",
      primaryHeading: "Knitting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis. quisquam consequuntur minus! Adipisci, blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
      image: section2,
    },
    {
      id: "3",
      secondaryHeading: "Garment Production Service",
      primaryHeading: "Knitting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis. quisquam consequuntur minus! Adipisci, blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
      image: section3,
    },
    {
      id: "4",
      secondaryHeading: "Garment Production Service",
      primaryHeading: "Knitting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis. quisquam consequuntur minus! Adipisci, blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
      image: section3,
    },
    {
      id: "5",
      secondaryHeading: "Garment Production Service",
      primaryHeading: "Knitting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis. quisquam consequuntur minus! Adipisci, blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est recusandae distinctio unde laboriosam non, quisquam consequuntur minus! Adipisci, blanditiis.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
      image: section2,
    },
  ];
  return (
    <div>
      <section className="employee-bg-image d-flex flex-column justify-content-center align-items-center"></section>

      <section className="">
        <div className="container-fluid">
          <div className="">
            <div className="row main-container justify-content-center mx-auto">
              <div className="col-lg-2 col-md-2 col-sm-12 left-sidenav">
                <OverView />
              </div>

              <div className="col-lg-8 col-md-10 col-sm-12">
                {services.map((service) => (
                  <Service key={service.id} service={service}></Service>
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

export default ServicesMenu;
