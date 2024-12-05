import React from "react";
import locationIcon from "../../../assets/newsEventSection/locationIcon.png";
import mailIcon from "../../../assets/newsEventSection/mailIcon.png";
import phoneIcon from "../../../assets/newsEventSection/phoneIcon.png";
import sideSection1 from "../../../assets/newsEventSection/sideSection1.png";
import sideSection2 from "../../../assets/newsEventSection/sideSection2.png";
import Achivement from "../../../assets/AllPhotoFinal/sidebar/achivement.jpg";
import {
  BsChevronRight,
  BsFacebook,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import SingleNews from "./SingleNews";
import { useGetCommonApiQuery } from "../../../services/post";

const SideBar = () => {
  const commonRes = useGetCommonApiQuery();

  const sideSectionColor = "rgba(246, 246, 246, 1)";
  const sideBarNews = [
    {
      id: "1",
      image: sideSection1,
      date: "15th July, 2023",
      heading: "Threads of Innovation",
    },
    {
      id: "2",
      image: sideSection2,
      date: "15th July, 2023",
      heading: "Threads of Innovation",
    },
    {
      id: "3",
      image: sideSection1,
      date: "15th July, 2023",
      heading: "Threads of Innovation",
    },
  ];
  return (
    <div>
      <div className="mx-2 my-2">
        <h6 className="border-bottom border-dark description-text">
          Categories
        </h6>
        <h6 className="description-text">
          <BsChevronRight />
          All
        </h6>
        <h6 className="description-text">
          <BsChevronRight /> News
        </h6>
        <h6 className="description-text">
          <BsChevronRight />
          Events
        </h6>
      </div>
      <div style={{ backgroundColor: sideSectionColor }} className="my-5">
        <h6 className="border-bottom border-dark">Recent Posts</h6>

        {sideBarNews.map((singleNews) => (
          <SingleNews id={singleNews.id} singleNews={singleNews}></SingleNews>
        ))}
      </div>

      <div>
        <img
          src={Achivement}
          alt=""
          style={{ width: "250px", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default SideBar;
