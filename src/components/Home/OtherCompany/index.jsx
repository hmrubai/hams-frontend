import React from "react";
import Marquee from "react-fast-marquee";
import photo1 from "../../../assets/AllAssets/HomePage/OtherCompany/TQM.png";
import photo2 from "../../../assets/AllAssets/HomePage/OtherCompany/vil.png";
import photo3 from "../../../assets/AllAssets/HomePage/OtherCompany/dgwl.png";
import photo4 from "../../../assets/AllAssets/HomePage/OtherCompany/hams.png";
import photo5 from "../../../assets/AllAssets/HomePage/OtherCompany/tshirt.png";
import photo7 from "../../../assets/AllAssets/HomePage/OtherCompany/knitting.png";
import photo8 from "../../../assets/AllAssets/HomePage/OtherCompany/dyeing.png";
import photo9 from "../../../assets/AllAssets/HomePage/OtherCompany/shanta.png";
import photo10 from "../../../assets/AllAssets/HomePage/OtherCompany/hams fashion.png";
import CardDetails from "./cardDetails";
import "./otherCompany.css";

const CardSlider = () => {
  const slides = [
    {
      id: 1,
      image: photo10,
      title: "HAMS FASHION LTD",
      description: "26+",
      link: `/hams-fashion-ltd`,
    },
    {
      id: 2,
      image: photo2,
      title: "VICTORIA INTIMATE",
      description: "25+",
      link: `/victoria-intimate-ltd`,
    },
    {
      id: 3,
      image: photo3,
      title: "DHAKA GARMENTS & WASHING LIMITED",
      description: "500+ Employees",
      link: `/dhaka-garment-wash-ltd`,
    },
    {
      id: 4,
      image: photo4,
      title: "HAMS GARMENTS LTD",
      description: "14000+",
      // link: `/hamsGarment`,
      link: `/hams-garment-ltd`,
    },

    {
      id: 5,
      image: photo5,
      title: "GARMETS: T SHIRT UNIT",
      description: "100",
      link: `/garment-shirt-ltd`,
    },
    {
      id: 6,
      image: photo1,
      title: "TOTAL QUALITY MANAGEMENT TQM",
      description: "10/15",
      link: `/tqm-ltd`,
    },
    {
      id: 7,
      image: photo7,
      title: "KNITTING UNIT",
      description: "10/10",
      link: `/knitting-unit`,
    },
    {
      id: 8,
      image: photo8,
      title: "DYEING UNIT",
      description: "31/35",
      link: `/dyeing-unit`,
    },
    {
      id: 9,
      image: photo9,
      title: "THE SHANTA PINNACLE",
      description: "7/14",
      link: `/shanta-unit`,
    },
  ];
  return (
    <div className="container-fluid">
      <div className="container-sm py-4">
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <Marquee speed={50} delay={0}>
            {slides.map((data) => (
              <CardDetails key={data.id} id={data.id} data={data}></CardDetails>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
