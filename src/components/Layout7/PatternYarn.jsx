import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "./Layout7.css";

const PatternYarn = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex row pt-3">
          <div className="col-md-7">
            <div className="">
              <div className="d-flex">
                <div>
                  <FaCheckCircle className="VscChromeMinimizeColor m-1" />
                </div>
                <div>
                  <h6 className="productOver-color">
                    <span className="fw-bolder">Pattern Selection:</span>
                    <span className="pattern-p">
                      {" "}
                      Patterns provide detailed instructions for stitch
                      patterns, shaping, and construction methods stitch
                      patterns, shaping, and construction methods.
                    </span>
                  </h6>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <FaCheckCircle className="VscChromeMinimizeColor m-1" />
                </div>
                <div>
                  <h6 className="productOver-color">
                    <span className="fw-bolder">
                      Yarn and Needle Selection:
                    </span>{" "}
                    <span className="pattern-p">
                      Based on the patterns recommendations, select the
                      appropriate yarn type, weight, and color.
                    </span>
                  </h6>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <FaCheckCircle className="VscChromeMinimizeColor m-1" />
                </div>
                <div>
                  <h6 className="productOver-color">
                    <span className="fw-bolder">Gauge Swatch:</span>{" "}
                    <span className="pattern-p">
                      Knit a gauge swatch using the chosen yarn and needles to
                      ensure your tension matches the patterns gauge.
                    </span>
                  </h6>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div></div>
          </div>
          <div className="col-md-3">
            <div className="">
              <h5 className="border-bottom  border-dark">Social Media Links</h5>
              <div className="d-flex">
                <FaFacebook className="text-primary fs-4" />{" "}
                <FaYoutube className="text-danger mx-3 fs-4" />{" "}
                <FaLinkedin className="text-primary-emphasis fs-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternYarn;
