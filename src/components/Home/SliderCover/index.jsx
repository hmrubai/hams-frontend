/* eslint-disable react-hooks/rules-of-hooks */
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetHomePagesQuery } from "../../../services/post";
import "./cover.css";

const index = () => {
  const homeRes = useGetHomePagesQuery();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (homeRes.isFetching) return <div></div>;
  if (homeRes.isError) return <h1></h1>;

  const carouselItems = homeRes?.data?.data?.slider;

  if (isMobile) {
    // Render Swiper without pagination for mobile devices
    return (
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true,
        }}
        keyboard={true}
        slideToClickedSlide
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Keyboard]}
        className="mySwiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="carousel-height"
            style={{
              backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}/${
                item.image
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              minHeight: "100vh",
            }}
          >
            <div className="container-fluid">
              <Row className="d-flex align-items-lg-center custom-height1 custom-height3">
                <Col lg={8} sm={9} md={10} className="">
                  <div className="d-flex">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/${
                        homeRes?.data?.data?.sliderFeature.logo
                      }`}
                      alt="Badge"
                      className="img-fluid image-margin responsive-img hide-on-landscape"
                      style={{ opacity: 0.9 }}
                    ></img>
                  </div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center mx-auto">
                <Col
                  className="py-3"
                  lg={5}
                  sm={12}
                  md={6}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div style={{ paddingLeft: "20px" }}>
                    <h1 className="text-lg-start text-sm-start swiper-heading1">
                      {item.title}
                    </h1>
                    <h2
                      className="text-sm-start text-lg-start swiper-heading2"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />
                    <Button className="carousel-button border-0 mt-2 mx-2 mx-lg-0">
                      <Link to={item.button_link}>{item.button_text}</Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else {
    // Render Swiper with pagination for non-mobile devices
    return (
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          keyboard={true}
          slideToClickedSlide
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Keyboard]}
          className="mySwiper"
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className=""
              style={{
                backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}/${
                  item.image
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                minHeight: "100vh",
              }}
            >
              <div className="container-fluid">
                <Row className="d-flex align-items-lg-center custom-height1 custom-height3">
                  <Col lg={8} className=""></Col>
                  <Col lg={4} sm={9} md={10} className="mx-auto">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/${
                        homeRes?.data?.data?.sliderFeature.logo
                      }`}
                      alt="Badge"
                      className="img-fluid image-margin responsive-img hide-on-landscape"
                      style={{ opacity: 0.9 }}
                    ></img>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center mx-auto">
                  <Col
                    className="py-3"
                    lg={5}
                    sm={12}
                    md={6}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  >
                    <div style={{ paddingLeft: "20px" }}>
                      <h1 className="text-lg-start text-sm-start swiper-heading1">
                        {item.title}
                      </h1>
                      <h2
                        className="text-sm-start text-lg-start swiper-heading2"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />

                      <Button className="carousel-button border-0 mt-2 mx-2 mx-lg-0">
                        <Link to={item.button_link}>{item.button_text}</Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
};

export default index;
