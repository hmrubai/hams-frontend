import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  useGetHomePagesQuery,
  useGetProductApiQuery,
} from "../../../services/post";
import Product from "./ProductCard";
import "./ProductHome.css";

const index = () => {
  const homeRes = useGetHomePagesQuery();
  const productRes = useGetProductApiQuery();

  const productObj = homeRes?.data?.data?.product;

  if (homeRes.isFetching) return <div></div>;
  if (homeRes.isError) return <h1>An error occur {homeRes.error.error}</h1>;

  const ProductData = productRes?.data?.data;
  console.log(ProductData);

  return (
    <div className="container my-5">
      <div className="container-sm">
        <div className="text-center">
          <h6 className="secondary-heading">{productObj.sort_title}</h6>
          <h2 className="primary-heading">{productObj.title}</h2>
          <div className="col col-md-6 col-sm-12 mx-auto ">
            <p className="description-text w-100 text-justify">
              {productObj.description}
            </p>
          </div>
        </div>

        <Row>
          {ProductData &&
            ProductData.length > 0 &&
            ProductData.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
        </Row>
        <div className="text-center my-3"></div>
      </div>
    </div>
  );
};

export default index;
