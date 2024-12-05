import "./CardSlider.css";
import award3 from "../../../assets/award3.jpg";
import award4 from "../../../assets/award4.jpg";
import award5 from "../../../assets/award5.jpg";
import award6 from "../../../assets/award6.jpg";
import Marquee from "react-fast-marquee";
import SampleCarousel from "./SampleCarousel";
import Slider1 from "../../../assets/HomeSlider/slider-1.jpg";
import Slider6 from "../../../assets/HomeSlider/slider-6.jpg";
import photo1 from "../../../assets/HomeSlider/TQM.png";
import photo2 from "../../../assets/HomeSlider/victoria intimate.png";
import photo3 from "../../../assets/HomeSlider/Dhaka-Garments-And-washing.png";
import photo4 from "../../../assets/HomeSlider/HAMS.png";
import photo5 from "../../../assets/HomeSlider/T-Shirt-Units.png";
import photo6 from "../../../assets/HomeSlider/Dhaka-Garments-And-washing.png";
import photo7 from "../../../assets/HomeSlider/knitting unit.png";
import photo8 from "../../../assets/HomeSlider/Dyeing-Unit.png";
import photo9 from "../../../assets/HomeSlider/The-Shanta-Pinnacle.png";

const CardSlider = () => {
  const slides = [
    {
      id: 1,
      image: photo1,
      title: "TOTAL QUALITY MANAGEMENT TQM",
      description: "10/15",
      link: `/tqm`,
    },
    {
      id: 2,
      image: photo2,
      title: "VICTORIA INTIMATE",
      description: "25+",
      link: `/victoriaIntimate`,
    },
    {
      id: 3,
      image: photo3,
      title: "DHAKA GARMENTS & WASHING LIMITED",
      description: "500+ Employees",
      link: `/dhakaGarment`,
    },
    {
      id: 4,
      image: photo4,
      title: "HAMS FASHION LTD",
      description: "14000+",
      link: `/hamsFasion`,
    },
    {
      id: 5,
      image: photo5,
      title: "GARMETS: T SHIRT UNIT",
      description: "100",
      link: `/garmentTShirt`,
    },
    {
      id: 6,
      image: photo6,
      title: "UNDER GARMENTS UNIT",
      description: "26+",
      link: `/underGarment`,
    },
    {
      id: 7,
      image: photo7,
      title: "KNITTING UNIT",
      description: "10/10",
      link: `/knitting`,
    },
    {
      id: 8,
      image: photo8,
      title: "DYEING UNIT",
      description: "31/35",
      link: `dyeing`,
    },
    {
      id: 9,
      image: photo9,
      title: "THE SHANTA PINNACLE",
      description: "7/14",
      link: `shanta`,
    },
  ];
  return (
    <div className="container-fluid">
      <div className="container-sm py-4">
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <Marquee speed={50} delay={0}>
            {slides.map((data) => (
              <SampleCarousel
                key={data.id}
                id={data.id}
                data={data}
              ></SampleCarousel>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
