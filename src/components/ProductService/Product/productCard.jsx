import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const productCard = ({ product }) => {
  const { image, title, description, id } = product;

  const location = useLocation();

  useEffect(() => {
    if (location?.state?.from === "readMore") {
      window.scrollTo(0, 700);
    }
  }, []);

  return (
    <>
      {id <= 3 && (
        <Col lg={4} className="mb-2">
          <Link to={`/product-list/${id}`}>
            <div className="content">
              <div className="content-overlay"></div>
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
                className="content-image img-fluid"
                alt=""
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{title}hi</h3>
              </div>
            </div>
          </Link>
        </Col>
      )}
      {id > 3 && (
        <Col lg={3} className="mb-2">
          <Link to={`/product-list/${id}`}>
            <div className="content">
              <div className="content-overlay"></div>

              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
                className="content-image img-fluid"
                alt=""
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{title}</h3>{" "}
              </div>
            </div>
          </Link>
        </Col>
      )}
    </>
  );
};

export default productCard;
