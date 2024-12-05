// import React from 'react'
import "./Layout.css";
import Card from "react-bootstrap/Card";
import { useGetAllPostQuery } from "../../services/post";
import ElevatingCard from "./ElevatingCard";

const ElevatingSection = () => {
  const aboutRes = useGetAllPostQuery();

  const elevatingData = aboutRes?.data?.data?.elevating_feature;

  if (aboutRes.isFetching) return <div></div>;
  if (aboutRes.isError) return <h1>An error occur {aboutRes.error.error}</h1>;

  return (
    <div id="certifications" className="evevating-bg py-3">
      <div className="container">
        <div className="text-center">
          <h5
            className=""
            style={{
              color: "rgba(29, 47, 64, 1)",
              borderBottom: "3px solid rgba(255, 97, 0, 1)",
              display: "inline",
              paddingBottom: "3px",
            }}
          >
            {aboutRes?.data?.data?.elevating.short_title}
          </h5>
          <h4 className="pt-4 pb-2" style={{ color: "rgba(29, 47, 64, 1)" }}>
            {aboutRes?.data?.data?.elevating.title}
          </h4>
          <div className="row mx-auto">
            <div className="col-md-7 col-sm-12 mx-auto">
              <p className="" style={{ color: "rgba(51, 51, 51, 0.75)" }}>
                {aboutRes?.data?.data?.elevating.description}
              </p>
            </div>
          </div>
        </div>

        <>
          <div className="justify-content-center">
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                {elevatingData.map((elevating) => (
                  <div key={elevating.id} className="col-md-3 text-md-center">
                    <ElevatingCard elevating={elevating}></ElevatingCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ElevatingSection;
