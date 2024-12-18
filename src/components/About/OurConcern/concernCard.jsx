// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";

// export const CardDetails = ({ cardinfo }) => {
//   const { title, description, image, long_description } = cardinfo;

//   const maxChars = 100;
//   const [showFullText, setShowFullText] = useState(false);

//   const toggleReadMore = () => {
//     setShowFullText(!showFullText);
//   };

//   const truncatedText = description.slice(0, maxChars);
//   const displayText = showFullText ? description : truncatedText;

//   return (
//     <div>
//       <Card className="border-0 m-3" style={{ with: "100px", height: "374px" }}>
//         <div className="">
//           <div className="zoom-container">
//             <Card.Img
//               variant="top"
//               className="zoomable-image"
//               src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
//               style={{ with: "100px", height: "200px" }}
//             />
//           </div>
//         </div>
//         <Card.Body className="text-center m-0 p-0">
//           <Card.Title
//             className="text-center my-3 fw-bold fs-6"
//             style={{ color: "rgba(29, 47, 64, 1)" }}
//           >
//             {title}
//           </Card.Title>
//           <Card.Text
//             className="ps-1 pe-1"
//             style={{ color: "rgba(51, 51, 51, 0.75)", textAlign: "justify" }}
//           >
//             {displayText}

//             {description.length > maxChars && (
//               <span
//                 style={{
//                   color: "rgb(255, 97, 0)",
//                   cursor: "pointer",
//                   marginLeft: "5px",
//                   fontWeight: "bold",
//                 }}
//                 onClick={toggleReadMore}
//               >
//                 <Link
//                   to={long_description}
//                   style={{
//                     color: "rgba(255, 97, 0, 1)",
//                     // marginTop: "10px",
//                     display: "block",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Read More
//                 </Link>
//               </span>
//             )}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const CardDetails = ({ cardinfo }) => {
  const { title, description, image, long_description } = cardinfo;

  const maxChars = 100;
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = description.slice(0, maxChars);
  const displayText = showFullText ? description : truncatedText;

  return (
    <Card
      className="border-0 shadow-sm mx-auto w-100"
      style={{ maxWidth: "300px" }}
    >
      <div className="zoom-container">
        <Card.Img
          variant="top"
          className="zoomable-image img-fluid"
          src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title
          className="text-center my-3 fw-bold fs-6"
          style={{ color: "rgba(29, 47, 64, 1)" }}
        >
          {title}
        </Card.Title>
        <Card.Text
          className="px-2"
          style={{ color: "rgba(51, 51, 51, 0.75)", textAlign: "justify" }}
        >
          {displayText}
          {description.length > maxChars && (
            <span
              style={{
                color: "rgb(255, 97, 0)",
                cursor: "pointer",
                marginLeft: "5px",
                fontWeight: "bold",
              }}
              onClick={toggleReadMore}
            >
              <Link
                to={long_description}
                style={{
                  color: "rgba(255, 97, 0, 1)",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                Read More
              </Link>
            </span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
