// import React from "react";
// import Card from "react-bootstrap/Card";
// import { FaFileDownload } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const certificationCard = ({ elevating }) => {
//   const { title, description, icon, year, file, link } = elevating;

//   return (
//     <>
//       <div>
//         <div className="row justify-content-center m-1">
//           <div className="col-md border1 m-1">
//             <Card className="border-0" style={{ height: "15rem" }}>
//               <div className="">
//                 <Card.Body>
//                   <img
//                     src={`${import.meta.env.VITE_IMAGE_URL}/${icon}`}
//                     style={{ width: "50px", height: "" }}
//                     className="my-2"
//                   />
//                   <Card.Title
//                     className=""
//                     style={{ color: "rgba(29, 47, 64, 1)" }}
//                   >
//                     {title}
//                   </Card.Title>
//                   <Card.Text>
//                     <p className="" style={{ color: "rgba(51, 51, 51, 0.75)" }}>
//                       {description}
//                     </p>
//                     <p className="" style={{ color: "rgba(29, 47, 64, 1)" }}>
//                       {year}
//                     </p>
//                   </Card.Text>
//                 </Card.Body>
//               </div>
//             </Card>
//             <div className="w-100 d-flex">
//               <div className="text-center justify-content-center w-75">
//                 <Link className="" to={link || "#"} target="_blank">
//                   <button
//                     type="button"
//                     className="btn fw-bold w-100"
//                     style={{
//                       background: "rgba(255, 97, 0, 1)",
//                       color: "rgba(255, 255, 255, 1)",
//                     }}
//                   >
//                     Read More
//                   </button>
//                 </Link>
//               </div>

//               <div className="text-center justify-content-center w-25 ps-1">
//                 <a
//                   href={`${import.meta.env.VITE_IMAGE_URL}${file}`}
//                   download
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn fw-bold w-100"
//                   style={{
//                     background: "rgba(255, 97, 0, 1)",
//                     color: "rgba(255, 255, 255, 1)",
//                   }}
//                 >
//                   <FaFileDownload />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default certificationCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const CertificationCard = ({ elevating }) => {
  const { title, description, icon, year, file, link } = elevating;

  return (
    <Card
      className="border-top-0 border-end-0 border-bottom-0 border-4 shadow-sm h-100 gradient-left-border"
      style={{
        borderImage:
          "linear-gradient(to bottom, rgba(255, 97, 0, 0.6), rgba(101, 189, 147, 1)) 1",
      }}
    >
      <div className="d-flex flex-column justify-content-between h-100">
        <Card.Body>
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}/${icon}`}
            alt={title}
            style={{ width: "50px", height: "50px" }}
            className="my-2"
          />
          <Card.Title
            className="text-center fw-bold"
            style={{ color: "rgba(29, 47, 64, 1)" }}
          >
            {title}
          </Card.Title>
          <Card.Text>
            <p
              style={{ color: "rgba(51, 51, 51, 0.75)", textAlign: "justify" }}
            >
              {description}
            </p>
            <p
              className="text-center fw-bold"
              style={{ color: "rgba(29, 47, 64, 1)" }}
            >
              {year}
            </p>
          </Card.Text>
        </Card.Body>
        <div className="d-flex">
          <Link className="w-75 pe-1" to={link || "#"} target="_blank">
            <button
              type="button"
              className="btn fw-bold w-100"
              style={{
                background: "rgba(255, 97, 0, 1)",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Read More
            </button>
          </Link>
          <a
            href={`${import.meta.env.VITE_IMAGE_URL}${file}`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn fw-bold w-25"
            style={{
              background: "rgba(255, 97, 0, 1)",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            <FaFileDownload />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CertificationCard;
