// import React from "react";
import "./CompanyMenu.css";
import section1 from "../../../assets/company-menu-section/section1.png";
import mission from "../../../assets/company-menu-section/mission.png";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import OverView from "../../Shared/OverView/OverView";
import rightArrow from "../../../assets/right-arrow.png";
import { Link } from "react-router-dom";

const CompanyMenu = () => {
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

  return (
    <div>
      <div>
        <section className="companyBGImage d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center"></div>
          <h1 className="text-white text-center">
            Do Well, Live Well & <br />
            <span className="hero-text">Dress</span> Very Well
          </h1>
          <div className="d-flex">
            <Link to="/" className="text-white mb-0 mx-2">
              Home
            </Link>
            <img src={rightArrow} className="mx-2" alt="" srcSet="" />
            <p className="text-white mb-0 mx-2">Sustainability</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompanyMenu;
