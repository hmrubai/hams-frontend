import React from "react";
import "./ClientHome.css";

const ClientCard = ({ data }) => {
  const { logo, title } = data;

  return (
    <div className="mx-4 my-5">
      <div>
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}/${logo}`}
          className=""
          style={{ height: "50px", width: "120px" }}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default ClientCard;
