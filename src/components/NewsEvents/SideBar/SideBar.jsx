import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Achivement from "../../../assets/AllPhotoFinal/sidebar/achivement.jpg";
import sideSection1 from "../../../assets/newsEventSection/sideSection1.png";
import sideSection2 from "../../../assets/newsEventSection/sideSection2.png";
import SingleNews from "./SingleNews";
import "./Sidebar.css";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const getActiveStyle = (category) => {
    return selectedCategory === category
      ? { color: "rgba(255, 97, 0, 1)", cursor: "pointer" }
      : { cursor: "pointer" };
  };

  const sideSectionColor = "rgba(246, 246, 246, 1)";
  const sideBarNews = [
    {
      id: "1",
      image: sideSection1,
      date: "19th July, 2023",
      heading: "100 points scored by Hams in RSC.",
    },
    {
      id: "2",
      image: sideSection2,
      date: "15th July, 2023",
      heading: "FAMA certificate for license product.",
    },
    {
      id: "3",
      image: sideSection1,
      date: "15th July, 2023",
      heading: "ECOVARA, VISCOSE, Recycle yarns",
    },
  ];

  return (
    <>
      <div className="mx-2 mb-2">
        <h5 className="border-bottom border-dark description-text my-1 py-1 fw-bolder">
          Categories
        </h5>
        <h6
          className="fw-bold"
          style={getActiveStyle("All")}
          onClick={() => setSelectedCategory("All")}
        >
          <BsChevronRight /> All
        </h6>

        <h6
          className=" fw-bold"
          style={getActiveStyle("1")}
          onClick={() => setSelectedCategory("1")}
        >
          <BsChevronRight /> News
        </h6>
        <h6
          className="fw-bold"
          style={getActiveStyle("2")}
          onClick={() => setSelectedCategory("2")}
        >
          <BsChevronRight /> Events
        </h6>
      </div>
      <div style={{ backgroundColor: sideSectionColor }} className="my-3 mx-2">
        <h5 className="border-bottom border-dark description-text my-1 py-1 fw-bolder">
          Recent Posts
        </h5>

        {sideBarNews.map((singleNews) => (
          <SingleNews key={singleNews.id} singleNews={singleNews}></SingleNews>
        ))}
      </div>
      <div className="mx-2 my-1 text-justify">
        <h5 className="border-bottom border-dark description-text my-1 py-1 fw-bolder text-justify ">
          Feautred Posts
        </h5>
        <p className="fs-6 text-justify">
          Regular recognition programs, employee of the month awards, and
          platforms that celebrate achievements create a positive and motivating
          work environment.
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center my-3">
        <img
          src={Achivement}
          alt=""
          style={{ width: "230px", height: "260px" }}
        />
      </div>
    </>
  );
};

export default SideBar;
