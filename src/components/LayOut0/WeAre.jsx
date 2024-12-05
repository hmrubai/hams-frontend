import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import { accordionData } from "../../Data/about";
import { useGetAllPostQuery, useGetHomePagesQuery } from "../../services/post";
import "./Layout.css";

const WeAre = () => {
  const aboutRes = useGetAllPostQuery();
  const location = useLocation();
  const homeRes = useGetHomePagesQuery();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (aboutRes.isFetching) return <div></div>;
  if (aboutRes.isError)
    return <h1>An error occurred: {aboutRes.error.error}</h1>;

  return (
    <div id="we-are-section">
      <div className="quality-bg py-5">
        <div className="container">
          <div className="d-flex row justify-content-center mx-2">
            <div className="col-md-5 col-sm-12 pt-4">
              <img
                className="img-fluid h-full"
                src={`http://api-hams.bacbonx.com/uploads/${aboutRes?.data?.data?.who_we_are.image}`}
                alt="Who We Are"
              />
            </div>
            <div className="col-md-6">
              <div className="me-0 me-lg-5">
                <h5
                  style={{
                    borderBottom: "3px solid rgba(255, 97, 0, 1)",
                    display: "inline",
                    paddingBottom: "2px",
                  }}
                  className="mt-2 mb-1 text-justify"
                >
                  {homeRes?.data?.data?.about.short_title}
                </h5>
                <h6 className="my-2 fs-6 fw-bolder text-justify">
                  {homeRes?.data?.data?.about.title}
                </h6>
                <h6 className="mb-0 my-2 fs-6 lh-base text-justify">
                  {homeRes?.data?.data?.about.short_description}
                </h6>
                {/* Additional Descriptions */}
                <h6 className="mb-0 my-2 fs-6 lh-base text-justify">
                  <span className="fw-bolder">Diverse Product Range:</span> HAMS
                  offers a wide array of products, from T-shirts to haute
                  couture, catering to every fashion need.
                </h6>
                <h6 className="mb-0 my-2 fs-6 lh-base text-justify">
                  <span className="fw-bolder">Innovative Fabrication:</span>{" "}
                  Mastery in fabric blends, including eco-friendly options like
                  Linen and Hemp, showcasing a commitment to sustainable
                  practices.
                </h6>
                <h6 className="mb-0 my-2 fs-6 lh-base text-justify">
                  <span className="fw-bolder">Cutting-Edge Technology:</span>{" "}
                  State-of-the-art knitting units with plans for expansion and
                  continuous technological upgrades.
                </h6>
              </div>
              <Accordion className="focus-ring-none border-0 fs-6 fw-bolder">
                {accordionData.map((item, index) => (
                  <Accordion.Item
                    className="my-2 border-0 fs-6 fw-bolder text-justify"
                    key={index}
                    eventKey={index.toString()}
                  >
                    <Accordion.Header className="fs-6 fw-bolder text-justify">
                      {item.title}
                    </Accordion.Header>
                    <Accordion.Body className="m-0 fs-6 fw-bolder text-justify">
                      {item.content}
                    </Accordion.Body>
                    {item.content1 && (
                      <Accordion.Body className="m-0 p-0 fs-6 fw-bolder text-justify">
                        {item.content1}
                      </Accordion.Body>
                    )}
                    {item.content2 && (
                      <Accordion.Body className="m-0 p-0 fs-6 fw-bolder text-justify">
                        {item.content2}
                      </Accordion.Body>
                    )}
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
