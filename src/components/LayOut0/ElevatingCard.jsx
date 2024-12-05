// import React from "react";
import Card from "react-bootstrap/Card";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const ElevatingCard = ({ elevating }) => {
  const { title, description, icon, year, file, link } = elevating;

  return (
    <>
      <div>
        <div className="row justify-content-center m-1">
          <div className="col-md border1 m-1">
            <Card className="border-0" style={{ height: "15rem" }}>
              <div className="">
                <Card.Body>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${icon}`}
                    style={{ width: "50px", height: "" }}
                    className="my-2"
                  />
                  <Card.Title
                    className=""
                    style={{ color: "rgba(29, 47, 64, 1)" }}
                  >
                    {title}
                  </Card.Title>
                  <Card.Text>
                    <p className="" style={{ color: "rgba(51, 51, 51, 0.75)" }}>
                      {description}
                    </p>
                    <p className="" style={{ color: "rgba(29, 47, 64, 1)" }}>
                      {year}
                    </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <div className="w-100 d-flex">
              <div className="text-center justify-content-center w-75">
                <Link className="" to={link || "#"} target="_blank">
                  <button
                    type="button"
                    className="btn fw-bold w-100"
                    style={{
                      background: "rgba(255, 97, 0, 1)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Read More
                  </button>
                </Link>
              </div>

              <div className="text-center justify-content-center w-25 ps-1">
                <a
                  href={`${import.meta.env.VITE_IMAGE_URL}${file}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-bold w-100"
                  style={{
                    background: "rgba(255, 97, 0, 1)",
                    color: "rgba(255, 255, 255, 1)",
                  }}
                >
                  <FaFileDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElevatingCard;
