// import React from 'react'
import Video from "../../assets/products/video.png";
import { VscChromeMinimize } from "react-icons/vsc";
import Card1 from "../../assets/products/card1.png";
import Card2 from "../../assets/products/card2.png";
import "./Layout7.css";

const StepByStep = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex row">
          <div className="col-md-7">
            <div className="mb-3">
              <h5 className="productOver-color">
                <VscChromeMinimize className="VscChromeMinimizeColor fs-2" />
                Step By Step Process
              </h5>
              <p className="productOver-p-color">
                Lorem ipsum dolor sit amet consectetur. Urna maecenas sed massa
                malesuada platea. Placerat ut posuere morbi eget ut. Enim id nec
                fermentum aenean. Netus purus lorem porttitor id sit. Mauris
                phasellus amet dui ultricies malesuada quis tortor senectus nec.
                Sit tincidunt id ut venenatis vel nam. Convallis gravida
                scelerisque vehicula facilisis lectus porttitor.{" "}
              </p>
              <img src={Video} className="w-100" />
            </div>
          </div>
          <div className="col-md-2">
            <div></div>
          </div>
          <div className="col-md-3">
            <h5 className="border-bottom  border-dark">Recent Posts</h5>
            <div className="d-flex">
              <div>
                <img src={Card1} className="m-1 rounded" alt="" />
              </div>
              <div className="">
                <p className="recent-p">
                  <span className="pattern-p">15 july 2023</span>
                  <br />
                  threads of Innovation
                  <br />
                  2023
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src={Card2} className="m-1 rounded" alt="" />
              </div>
              <div className="">
                <p className="recent-p">
                  <span className="pattern-p">15 july 2023</span>
                  <br />
                  threads of Innovation
                  <br />
                  2023
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src={Card2} className="m-1 rounded" alt="" />
              </div>
              <div className="">
                <p className="recent-p">
                  <span className="pattern-p">15 july 2023</span>
                  <br />
                  threads of Innovation
                  <br />
                  2023
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src={Card2} className="m-1 rounded" alt="" />
              </div>
              <div className="">
                <p className="recent-p">
                  <span className="pattern-p">15 july 2023</span>
                  <br />
                  threads of Innovation
                  <br />
                  2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStep;
