import React from "react";
import section1 from "../../../src/assets/ssrSection/section1.png";
import section2 from "../../../src/assets/ssrSection/section2.png";
import section3 from "../../../src/assets/ssrSection/section3.png";
import "./BusinessMenu.css";
import { AiFillCheckCircle, AiOutlineMinus } from "react-icons/ai";
import OverView from "../Shared/OverView/OverView";
import { GoHorizontalRule } from "react-icons/go";
import rightArrow from "../../assets/right-arrow.png";
import Business from "./Business";
import "../../CommonStyles/CommonStyles.css";

const SSR = () => {
  const businessMenuData = [
    {
      id: "1",
      image: section1,
      heading1: "Garment Production Service",
      heading2: "Knitting",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Et, distinctio? Ab magni optio, beatae dicta laboriosam officiis itaque adipisci sapiente facere assumenda id ratione quae, aspernatur repellendus ut? Voluptatemexcepturi eligendi quia nobis at atque asperiores harumquaerat consectetur.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
    },
    {
      id: "2",
      image: section2,
      heading1: "Garment Production Service",
      heading2: "Knitting",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Et, distinctio? Ab magni optio, beatae dicta laboriosam officiis itaque adipisci sapiente facere assumenda id ratione quae, aspernatur repellendus ut? Voluptatemexcepturi eligendi quia nobis at atque asperiores harumquaerat consectetur.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
    },
    {
      id: "3",
      image: section3,
      heading1: "Garment Production Service",
      heading2: "Knitting",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Et, distinctio? Ab magni optio, beatae dicta laboriosam officiis itaque adipisci sapiente facere assumenda id ratione quae, aspernatur repellendus ut? Voluptatemexcepturi eligendi quia nobis at atque asperiores harumquaerat consectetur.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
    },
    {
      id: "4",
      image: section1,
      heading1: "Garment Production Service",
      heading2: "Knitting",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Et, distinctio? Ab magni optio, beatae dicta laboriosam officiis itaque adipisci sapiente facere assumenda id ratione quae, aspernatur repellendus ut? Voluptatemexcepturi eligendi quia nobis at atque asperiores harumquaerat consectetur.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
    },
    {
      id: "5",
      image: section2,
      heading1: "Garment Production Service",
      heading2: "Knitting",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Et, distinctio? Ab magni optio, beatae dicta laboriosam officiis itaque adipisci sapiente facere assumenda id ratione quae, aspernatur repellendus ut? Voluptatemexcepturi eligendi quia nobis at atque asperiores harumquaerat consectetur.",
      list1: "List 1: Creative Expression and Customization",
      list2: "List 1: Creative Expression and Customization",
      list3: "List 1: Creative Expression and Customization",
    },
  ];
  return (
    <div>
      <section className="business-menu-section-bg-image d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center"></div>
      </section>

      <section className="">
        <div className="container-fluid">
          <div className="">
            <div className="row main-container justify-content-center mx-auto">
              <div className="col-lg-2 col-sm-12 col-md-2 left-sidenav">
                <OverView />
              </div>

              <div className="col-lg-8 col-sm-12 col-md-8">
                {businessMenuData.map((business) => (
                  <Business key={business.id} business={business}></Business>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSR;
