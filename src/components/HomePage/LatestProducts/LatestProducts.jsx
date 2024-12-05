import React from "react";
import "./LatestProducts.css";
import image10 from "../../../assets/image10.png";
import image11 from "../../../assets/image11.png";
import image12 from "../../../assets/image12.png";
import image13 from "../../../assets/image13.png";
import image14 from "../../../assets/image14.png";
import product3 from "../../../assets/product3-details.png";
import { Button, Col, Row } from "react-bootstrap";
import Product from "./Product";
import {
  useGetHomePagesQuery,
  useGetProductApiQuery,
} from "../../../services/post";
import "./LatestProducts";

const LatestProducts = () => {
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

export default LatestProducts;
