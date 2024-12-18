import React from "react";
import "./Product.css";
import { Button, Col, Row } from "react-bootstrap";
import ProductCard from "./productCard";
import { useGetProductSubCategoryQuery } from "../../../services/post";
// import LatestProducts from "../../HomePage/LatestProducts/LatestProducts";
import ProductHomeComponent from "../../Home/ProductHome/index";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const index = ({ id }) => {
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.from === "readMore") {
      window.scrollTo(0, 700);
    }
  }, []);

  const ProductRes = useGetProductSubCategoryQuery(id);
  const productData = ProductRes?.data?.data || [];
  console.log(productData);

  return (
    <>
      {id ? (
        <div className="container my-5">
          <div className="container-sm">
            <Row>
              {productData.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
            </Row>
          </div>
        </div>
      ) : (
        // <LatestProducts />
        <ProductHomeComponent />
      )}
    </>
  );
};

export default index;
