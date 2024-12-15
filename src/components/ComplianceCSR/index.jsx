/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import HeroSectionCover from "./heroSection";
import ComplianceIndex from "./compliance/index";
import CSRIndex from "./csr/index";

const index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "compliance";

  const handleTabClick = (tab) => {
    setSearchParams({ tab });
  };

  useEffect(() => {
    window.scrollTo(300, 0);
  }, [activeTab]);

  return (
    <>
      {/* Compliance & CSR Cover section */}
      <HeroSectionCover />

      {/* Tab section start */}
      <section>
        <div className="my-5 d-flex justify-content-center">
          <div>
            <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleTabClick("compliance")}
                  active={activeTab === "compliance"}
                  className={`py-2 px-5 fw-bold m-2 ${
                    activeTab === "compliance" ? "btn-primary" : ""
                  }`}
                  style={{
                    background:
                      activeTab === "compliance"
                        ? "rgba(255, 97, 0, 1)"
                        : "white",
                    color: activeTab === "compliance" ? "white" : "black",
                  }}
                >
                  Compliance
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleTabClick("csr")}
                  active={activeTab === "csr"}
                  className={`py-2 px-5 fw-bold m-2 ${
                    activeTab === "csr" ? "btn-primary" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === "csr" ? "rgba(255, 97, 0, 1)" : "white",
                    color: activeTab === "csr" ? "white" : "black",
                  }}
                >
                  CSR
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Conditional Rendering for Tab Content */}
            {activeTab === "compliance" && <ComplianceIndex />}
            {activeTab === "csr" && <CSRIndex />}
          </div>
        </div>
      </section>
      {/* Tab section end */}
    </>
  );
};

export default index;
