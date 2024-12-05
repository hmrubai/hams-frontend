import { VscChromeMinimize } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import "./Layout7.css";
import Video from "../../assets/products/video.png";
import { FaCheckCircle } from "react-icons/fa";
import Card1 from "../../assets/products/card1.png";
import Card2 from "../../assets/products/card2.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ProductOverview = () => {
  return (
    <div className="container">
      <div className="d-flex row" style={{ paddingTop: "20px" }}>
        <div className="col-md-7">
          <div className="">
            <h5 className="productOver-color">
              <VscChromeMinimize className="VscChromeMinimizeColor fs-3" />
              Product overview
            </h5>
            <p className="productOver-p-color">
              Lorem ipsum dolor sit amet consectetur. Urna maecenas sed massa
              malesuada platea. Placerat ut posuere morbi eget ut. Enim id nec
              fermentum aenean. Netus purus lorem porttitor id sit. Mauris
              phasellus amet dui ultricies malesuada quis tortor senectus nec.
              Sit tincidunt id ut venenatis vel nam. Convallis gravida
              scelerisque vehicula facilisis lectus porttitor. Ac mauris
              bibendum et nec. Condimentum eget turpis libero quis velit eros
              euismod. Orci euismod mattis laoreet sagittis velit. Dignissim
              faucibus quis pellentesque diam. Aliquet sit et ullamcorper tortor
              pellentesque lorem donec. Risus nibh phasellus id ultricies
              facilisi neque phasellus diam. Ullamcorper sapien nulla facilisi
              consectetur. Risus urna volutpat et ut. Sodales vitae sit elit ac.
              Enim libero eros nisi elit in sed. Scelerisque quis adipiscing
              amet vitae felis scelerisque sollicitudin. Volutpat gravida
              dictumst sit velit nunc vulputate penatibus a nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
