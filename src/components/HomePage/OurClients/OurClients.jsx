
import Marquee from "react-fast-marquee";
import SingleClient from "./SingleClient";
import "./OurClients.css";
import { useGetHomePagesQuery } from "../../../services/post";

const OurClients = () => {
  const homeRsc = useGetHomePagesQuery();

  if (homeRsc.isFetching) return <div></div>;
  if (homeRsc.isError) return <h1>An error occur {homeRsc.error.error}</h1>;

  const sliderData = homeRsc?.data?.data?.ourClient;

  return (
    <div className="container-fluid slider-background">
      <div className="container-sm py-4">
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="secondary-heading my-4">Our Clients</h6>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-auto px-5">
          <Marquee speed={80} delay={0}>
            {sliderData.map((data) => (
              <SingleClient key={data.id} data={data}></SingleClient>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
