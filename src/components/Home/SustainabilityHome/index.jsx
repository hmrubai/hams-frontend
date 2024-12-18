import { Button, Col, Container, Row } from "react-bootstrap";
import SustainabilityCard from "./SustainabilityCard";
import { useGetHomePagesQuery } from "../../../services/post";
import { Link } from "react-router-dom";
import "./SustainabilityHome.css";

const index = () => {
  const homeRes = useGetHomePagesQuery();

  if (homeRes.isFetching) return <div></div>;
  if (homeRes.isError) return <h1>An error occur {homeRes.error.error}</h1>;

  const sustainabilityStyles = homeRes?.data?.data?.sustainabilityFeature;

  return (
    <Container
      className="my-5 main-container mx-auto d-flex justify-content-center"
      style={{ background: "rgba(255, 255, 255, 0.15)" }}
    >
      <Row className="mx-3 container-sm">
        <Col mdk={12} lg={6} sm={12} className="my-auto">
          <h3 className="secondary-heading">
            {homeRes?.data?.data?.sustainability.title}
          </h3>
          <p className="description-text text-justify">
            {homeRes?.data?.data?.sustainability.description}
          </p>
          <div className="mt-n2">
            <Link to="/sustainability">
              <Button className="section-button primary-color border-0 d-lg-block d-none">
                {homeRes?.data?.data?.sustainability.button_text}
              </Button>
            </Link>
          </div>
        </Col>

        <Col md={12} lg={6} sm={12}>
          <div className="certification-items grid-container">
            {sustainabilityStyles.map((sustainabilityStyle) => (
              <SustainabilityCard
                key={sustainabilityStyle.id}
                sustainabilityStyle={sustainabilityStyle}
              ></SustainabilityCard>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
