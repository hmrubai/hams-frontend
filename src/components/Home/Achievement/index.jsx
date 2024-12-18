import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetHomePagesQuery } from "../../../services/post";
import Certification from "./AchievementCard";
import "./AchievementHome.css";

const index = () => {
  const homeRes = useGetHomePagesQuery();

  if (homeRes.isFetching) return <div></div>;
  if (homeRes.isError) return <h1>An error occur {homeRes.error.error}</h1>;

  const certificationData = homeRes?.data?.data?.certificationList;

  return (
    <div className="container-sm">
      <div className="text-center">
        <h5 className="secondary-heading">
          {homeRes?.data?.data?.certification.sort_title}
        </h5>
        <h2 className="primary-heading">
          {homeRes?.data?.data?.certification.title}
        </h2>
      </div>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <Row>
            {certificationData.map((certification) => (
              <Certification
                key={certification.id}
                certification={certification}
              ></Certification>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default index;
