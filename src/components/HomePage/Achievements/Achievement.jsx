import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useState } from "react";
import { Col } from "react-bootstrap";

const Achievement = ({ achievement }) => {
  const { image, id, startAt, endAt, heading1, heading2 } = achievement;
  const [count, setCount] = useState(startAt);
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setCount(endAt);
    }
  }, [inView]);

  return (
    <Col
      lg={2}
      xs={5}
      md={5}
      className="mx-2 rounded-4 my-2 py-3 provided-service-section zoom-effect"
      ref={ref}
    >
      <div className="count-up-container d-flex flex-column align-items-center justify-content-center">
        <h6 className="text-center">{heading1}</h6>
        <div className="my-2">
          <img
            src={image}
            alt=""
            className="img-fluid"
            style={{
              backgroundColor: "rgba(29, 47, 64, 1)",
              borderRadius: "5px",
            }}
          />
        </div>

        {id <= 5 && (
          <CountUp start={0} end={count} duration={2} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div className="count-up">
                <h3 className="my-1" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        )}
        {id >= 6 && id <= 12 && (
          <div>
            <h3 className="text-black text-center">
              {startAt}/{endAt}
            </h3>
          </div>
        )}
        {id == 13 && (
          <div>
            <h3 className="text-black text-center">{startAt}%</h3>
          </div>
        )}

        <h6 className="text-center">{heading2}</h6>
      </div>
    </Col>
  );
};

export default Achievement;
