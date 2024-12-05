import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Discover from "./Discover";
import "./Layout6.css";
import TabProductList from "./TabProduct/TabProductList";

const TabProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tabProduct") || "product";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (location?.state?.from === "readMore") {
      window.scrollTo(0, 700);
    }
  }, [location]);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const newQueryParams = new URLSearchParams(location.search);
    newQueryParams.set("tabProduct", tab);
    navigate({ search: newQueryParams.toString() });
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center">
      <div className="">
        <Nav
          variant="tabs"
          className="justify-content-center"
          activeKey={activeTab}
          onSelect={handleTabClick}
        >
          <Nav.Item>
            <Nav.Link
              eventKey="product"
              className={`py-2 px-5 fw-bold m-2 ${
                activeTab === "product" ? "btn-primary" : ""
              }`}
              style={{
                background:
                  activeTab === "product" ? "rgba(255, 97, 0, 1)" : "white",
                color: activeTab === "product" ? "white" : "black",
              }}
            >
              Product
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="service"
              className={`py-2 px-5 fw-bold m-2 ${
                activeTab === "service" ? "btn-primary" : ""
              }`}
              style={{
                backgroundColor:
                  activeTab === "service" ? "rgba(255, 97, 0, 1)" : "white",
                color: activeTab === "service" ? "white" : "black",
              }}
            >
              Service
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTab === "product" && (
          <div>
            <TabProductList id={id}></TabProductList>
          </div>
        )}
        {activeTab === "service" && (
          <div>
            <Discover></Discover>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabProduct;
