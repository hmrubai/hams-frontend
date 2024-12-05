import React from "react";
import "./LearnMore3.css";
import section1 from "../../assets/company-menu-section/section1.png";
import mission from "../../assets/company-menu-section/mission.png";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import OverView from "../Shared/OverView/OverView";
import rightArrow from "../../assets/right-arrow.png";
import { Link } from "react-router-dom";

const LearnMore3 = () => {
  const companyMenuData = [
    {
      id: "1",
      heading1: "About HAMS",
      heading2:
        "Let's Talk About The <span className='minus-icon-style'>Company</span>",
      description1:
        "Lorem ipsum dolor sit amet, consectetuadipisicing elit. Iusto asperiores praesentium doloremque ipsam sit impeditadipisicing elit. Iusto asperiores praesentium doloremque ipsam sit impedit consecteturdistinctio accusamus, cum fugit. Eius earum optio amet eaque nostrum dicta animi illo maiores,",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias?",
    },
  ];

  const now = 60;
  return (
    <div>
      <div>
        <section className="learn-more3-bg-image d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center"></div>
          <h1 className="text-white text-center">
            We Promise
            <br />
            <span className="hero-text">Decarbonization</span>
          </h1>
          <div className="d-flex">
            <Link to="/">
              {" "}
              <p className="text-white mb-0 mx-2">Home</p>
            </Link>
            <img src={rightArrow} className="mx-2" alt="" srcSet="" />
            <p className="text-white mb-0 mx-2">Decarbonizaion</p>
          </div>
        </section>

        <section className="">
          <div className="container-fluid">
            <div className="">
              <div className="row justify-content-center main-container mx-auto">
                <div className="col-lg-2 col-sm-12 col-md-2 left-sidenav">
                  <OverView />
                </div>
                <div className="col-lg-8 col-sm-12 col-md-8">
                  <div className="row flex-lg-row flex-column-reverse my-5 mx-lg-3 mx-sm-1">
                    <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                      <h6>
                        {" "}
                        <AiOutlineMinus className="minus-icon-style secondary-heading border-0" />{" "}
                        About Hams
                      </h6>
                      <h4 className="primary-heading">
                        Let's Talk About The{" "}
                        <span className="minus-icon-style">Company</span>
                      </h4>
                      <p className="mb-0 description-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto asperiores praesentium doloremque ipsam sit
                        impedit adipisicing elit. Iusto asperiores praesentium
                        doloremque ipsam sit impedit consectetur distinctio
                        accusamus, cum fugit. Eius earum optio amet eaque
                        nostrum dicta animi illo maiores,
                      </p>
                      <br />
                      <p className="description-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, alias?
                      </p>
                      <div>
                        <p>4.3/5 </p>
                        <div className="d-inline-block mx-3 star-icon">
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <AiOutlineStar />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 my-auto zoom-container">
                      <img
                        src={section1}
                        className="img-fluid zoomable-image"
                        alt=""
                        srcSet=""
                      />
                    </div>
                  </div>

                  <div id="utility">
                    <div className="row my-5 mx-lg-3 mx-sm-1">
                      <div className="col-md-5 col-lg-5 col-sm-12 my-auto zoom-container">
                        <img
                          src={mission}
                          className="img-fluid zoomable-image"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                        <h6>
                          {" "}
                          <AiOutlineMinus className="minus-icon-style" />
                          Our Mission and Vision
                        </h6>
                        <h6 className="primary-heading">
                          Create Effective{" "}
                          <span className="minus-icon-style">
                            Mission & Vision
                          </span>{" "}
                          Statement
                        </h6>
                        <p className="mb-0 description-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Iusto asperiores praesentium doloremque ipsam
                          sit impedit
                        </p>
                        <br />
                        <div className="d-flex">
                          <BsDot className="minus-icon-style" />
                          <p className="description-text mb-0">
                            {" "}
                            <span className="fw-bold">Vision: </span>Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                            Excepturi, alias?
                          </p>
                        </div>
                        <div className="d-flex">
                          <BsDot className="dot-icon2 description-text" />{" "}
                          <p className="description-text mb-0">
                            <span className="fw-bold">Mission:</span> Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, alias?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row my-5 mx-lg-3 mx-sm-1 flex-lg-row flex-column-reverse">
                    <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                      <h6>
                        {" "}
                        <AiOutlineMinus className="minus-icon-style" />
                        Why Choose Us?
                      </h6>
                      <h3>
                        29 Years Of{" "}
                        <span className="minus-icon-style">Experience</span> On
                        Garment Industry
                      </h3>
                      <p className="mb-0 description-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto asperiores praesentium doloremque ipsam sit
                        impedit consectetur distinctio accusamus, cum fugit.
                        Eius earum optio amet eaque nostrum dicta animi illo
                        maiores,{" "}
                      </p>
                      <h6>Category 1</h6>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 my-auto zoom-container my-auto">
                      <img
                        src={section1}
                        className="img-fluid zoomable-image"
                        alt=""
                        srcSet=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnMore3;
