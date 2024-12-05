// import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPages = () => {
  return (
    <div className="container">
      <div className="m-5">
        <h2 className="text-bolder">Page Not Found</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione
          voluptate tenetur odit molestias adipisci quis ea libero, minus dolor
          consectetur porro modi excepturi, cupiditate deleniti amet aliquam non
          repudiandae?
        </p>
        <h5 className="text-bolder">
          Go to
          <Link className="link-success m-2" to="/">
            HomePage
          </Link>
        </h5>
      </div>
    </div>
  );
};
