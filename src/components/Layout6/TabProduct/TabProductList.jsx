import React from "react";
import "./TabProduct.css";
import { Button, Col, Row } from "react-bootstrap";
import TabProductCard from "./TabProductCard";
import { useGetProductSubCategoryQuery } from "../../../services/post";
import LatestProducts from "../../HomePage/LatestProducts/LatestProducts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const TabProductList = ({ id }) => {
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
                <TabProductCard
                  key={product.id}
                  product={product}
                ></TabProductCard>
              ))}
            </Row>
          </div>
        </div>
      ) : (
        <LatestProducts />
      )}
    </>
  );
};

export default TabProductList;
