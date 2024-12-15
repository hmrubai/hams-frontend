/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import HeroImpactCover from "./heroSection";
import NewsEvent from "./NewsEvent/index";
import VideoGallery from "./videoGallery/index";
import PhotoGallery from "./PhotoGallery/index";

const index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [activeTab, setActiveTab] = useState(
    queryParams.get("tab") || "NewsEvent"
  );

  useEffect(() => {
    setActiveTab(queryParams.get("tab") || "NewsEvent");
  }, [location.search]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`);
  };
  return (
    <>
      <HeroImpactCover />

      {/* Tab link start  */}

      <div className="container my-5 d-flex justify-content-center">
        <div className="">
          <Nav
            variant="tabs"
            className="justify-content-center"
            defaultActiveKey={activeTab}
          >
            <Nav.Item>
              <Nav.Link
                onClick={() => handleTabClick("NewsEvent")}
                active={activeTab === "NewsEvent"}
                className={`py-2 px-5 fw-bold m-2 ${
                  activeTab === "NewsEvent" ? "btn-primary" : ""
                }`}
                style={{
                  backgroundColor:
                    activeTab === "NewsEvent" ? "rgba(255, 97, 0, 1)" : "white",
                  color: activeTab === "NewsEvent" ? "white" : "black",
                }}
              >
                News & Event
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleTabClick("photoGallery")}
                active={activeTab === "photoGallery"}
                className={`py-2 px-5 fw-bold m-2 ${
                  activeTab === "photoGallery" ? "btn-primary" : ""
                }`}
                style={{
                  backgroundColor:
                    activeTab === "photoGallery"
                      ? "rgba(255, 97, 0, 1)"
                      : "white",
                  color: activeTab === "photoGallery" ? "white" : "black",
                }}
              >
                HAMS Photo Gallery
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleTabClick("videoGallery")}
                active={activeTab === "videoGallery"}
                className={`py-2 px-5 fw-bold m-2 ${
                  activeTab === "videoGallery" ? "btn-primary" : ""
                }`}
                style={{
                  backgroundColor:
                    activeTab === "videoGallery"
                      ? "rgba(255, 97, 0, 1)"
                      : "white",
                  color: activeTab === "videoGallery" ? "white" : "black",
                }}
              >
                HAMS Video Gallery
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {activeTab === "NewsEvent" && <NewsEvent />}
          {activeTab === "videoGallery" && (
            <div className="">
              <VideoGallery />
            </div>
          )}
          {activeTab === "photoGallery" && <PhotoGallery />}
        </div>
      </div>
    </>
  );
};

export default index;
