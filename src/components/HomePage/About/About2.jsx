import { Button, Col, Row, Modal } from "react-bootstrap";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CountUp from "react-countup";
// import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
// import ModalVideo from 'react-modal-video';
import { motion } from "framer-motion";
import {
  animationFromLeft,
  animationFromRight,
} from "../../../hooks/useAnimation";
import { useGetHomePagesQuery } from "../../../services/post";
import ReactPlayer from "react-player";
import "./About";

const About2 = () => {
  const videoUrl =
    "https://www.youtube.com/embed/OaV3ZbXib3M?si=gq74NVZifes7gOqo?rel=0";
  const right = animationFromRight();

  const left = animationFromLeft();
  const [count, setCount] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setCount(29);
    }
  }, [inView]);

  const homeRes = useGetHomePagesQuery();

  if (homeRes.isFetching) return <div></div>;

  if (homeRes.isError) return <h1>An error occur {homeRes.error.error}</h1>;

  return (
    <div>
      <Row ref={ref} className="container justify-content-center mx-auto my-5">
        <Col
          lg={5}
          md={12}
          xxl={5}
          sm={12}
          className="d-flex align-items-center"
        >
          <>
            <ReactPlayer
              controls={true}
              url="https://www.youtube.com/watch?v=OaV3ZbXib3M"
            />
          </>
        </Col>
        <Col lg={7} md={12} xxl={7} sm={12} className="my-auto my-md-2">
          <motion.div
            variants={right}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <div className="me-0 me-lg-5 text-justify">
              <h4 className="secondary-heading">
                {homeRes?.data?.data?.about.short_title}
              </h4>
              <h6 className="primary-heading my-2">
                {homeRes?.data?.data?.about.title}
              </h6>
              <p className="mb-0 py-1 description-text text-start">
                {homeRes?.data?.data?.about.short_description}
              </p>
            </div>
            <Row className="my-2">
              <Col
                lg={4}
                sm={12}
                md={12}
                className="mx-lg-2 counter-BG rounded"
                style={{ height: "210px" }}
              >
                <div className="d-flex justify-content-center align-items-center my-4">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${
                      homeRes?.data?.data?.about.featured_image
                    }`}
                    alt=""
                    className="img-fluid"
                    srcSet=""
                  />
                </div>

                {/* previous code start */}
                <div className="experience-year" ref={ref}>
                  <CountUp
                    start={homeRes?.data?.data?.about.start_count}
                    end={homeRes?.data?.data?.about.end_count}
                    duration={8}
                    delay={3}
                    suffix="+"
                  >
                    {({ countUpRef }) => (
                      <div className="count-up experience-year">
                        <h5
                          className="text-white text-center mt-2 mb-0 experience-year"
                          // style={{ fontFamily: "Inter" }}
                          ref={countUpRef}
                        />
                      </div>
                    )}
                  </CountUp>
                  <p className="text-white text-center experience-year ">
                    Years Of Experience
                  </p>
                </div>
                {/* previous code end */}
              </Col>
              <Col
                lg={7}
                sm={12}
                md={9}
                className="d-flex justify-content-start"
              >
                <div className="text-">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: homeRes?.data?.data?.about.description,
                    }}
                    className="text-justify"
                  />

                  <Link to="about" state={{ from: "readMore" }}>
                    <Button className="border-0 about-button">
                      {homeRes?.data?.data?.about.button_text}
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default About2;
