import "./otherCompany.css";
import { Link } from "react-router-dom";

const cardDetails = ({ data }) => {
  const { image, link } = data;
  return (
    <div className="mx-4">
      <Link to={link}>
        <div className="image-container">
          <img
            src={image}
            className=""
            style={{ height: "250px", width: "350px" }}
            alt="Company Images"
          />
        </div>
      </Link>
    </div>
  );
};

export default cardDetails;
