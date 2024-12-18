import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const achievment = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div id="achievement" className="achievement-bg pt-5 mt-5 mt-2">
        <div className="container">
          <div className="p-5">
            <div className="container mx-auto">
              <div className="row d-flex">
                <div className="col col-md-6 my-auto">
                  <div className="d-none d-lg-block justify-content-center mx-auto">
                    <h5 className="achievement-txt-clr">ACHIEVEMENTS</h5>
                    <h1 className="white-clr">
                      Milestones That we have <br /> Achieved
                    </h1>
                  </div>

                  <div className="d-block d-lg-none text-center justify-content-center mx-auto">
                    <h5 className="achievement-txt-clr">ACHIEVEMENTS</h5>
                    <h1 className="white-clr">
                      Milestones That we have <br /> Achieved
                    </h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center flex-direction-column">
                    <div className="d-flex col-md-6 justify-content-between">
                      <div className="text-center white-clr p-2">
                        {counterOn && (
                          <h3>
                            <CountUp
                              start={20}
                              end={100}
                              duration={5}
                              decimal={4}
                              suffix="+"
                            />
                          </h3>
                        )}

                        <p className="">Products</p>
                      </div>
                      <div className="text-center white-clr p-2">
                        {counterOn && (
                          <h3>
                            <CountUp
                              start={10}
                              end={120}
                              duration={5}
                              decimal={4}
                              suffix="M$+"
                            />
                          </h3>
                        )}

                        <p className="">Exports</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center flex-direction-column">
                    <div className="d-flex col-md-6 justify-content-between">
                      <div className="text-center white-clr p-2">
                        {counterOn && (
                          <h3 className="">
                            <CountUp
                              start={5}
                              end={50}
                              duration={5}
                              decimal={4}
                              suffix="+"
                            />
                          </h3>
                        )}
                        <p className="">Destination</p>
                      </div>
                      <div className="text-center white-clr p-2">
                        {counterOn && (
                          <h3 className="">
                            <CountUp
                              start={1000}
                              end={50000}
                              duration={5}
                              decimal={4}
                              suffix="+"
                            />
                          </h3>
                        )}
                        <p className="">Human Impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default achievment;
