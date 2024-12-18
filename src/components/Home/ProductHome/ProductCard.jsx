import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductHome.css";

const ProductCard = ({ product }) => {
  const { id, image, title } = product;
  return (
    <>
      {id <= 23 && (
        <Col lg={4} className="mb-2">
          <Link to={`/products/${id}`} state={{ from: "readMore" }}>
            <div className="content">
              <div className="content-overlay"></div>
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
                className="content-image img-fluid "
                alt=""
                style={{ height: "300px", width: "full" }}
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{title}</h3>
              </div>
            </div>
          </Link>
        </Col>
      )}
      {id > 23 && (
        <Col lg={3} className="mb-2">
          <Link to={`/products/${id}`} state={{ from: "readMore" }}>
            <div className="content">
              <div className="content-overlay"></div>
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
                className="content-image img-fluid"
                alt=""
                style={{ height: "300px", width: "full" }}
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{title}</h3>
              </div>
            </div>
          </Link>
        </Col>
      )}
    </>
  );
};

export default ProductCard;
