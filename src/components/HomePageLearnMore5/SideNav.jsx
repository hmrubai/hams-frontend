// import React, { useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import "./LearnMore5.css";

// const SideNav = () => {
//   const [activeLink, setActiveLink] = useState(null);

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };
//   const links = [
//     { id: "designStudio", text: "Design Studio" },
//     { id: "productsDevelopment", text: "Products Development" },
//     { id: "fabrication", text: "Fabrication" },
//     { id: "cutting", text: "Cutting" },
//     { id: "chestPrint", text: "Chest Print" },
//     { id: "embroidery", text: "Embroidery" },
//     { id: "garments", text: "Garments" },
//     { id: "wash", text: "Wash" },
//     { id: "accreditation", text: "Accreditation" },
//     { id: "underGarments", text: "Under Garments" },
//     { id: "etp", text: "Effluent Treatment Plant" },
//   ];
//   return (
//     <>
//       <div className="my-4 d-flex justify-content-center align-items-center">
//         <ul className="list-unstyled py-5">
//           {links.map((link) => (
//             <li key={link.id} className="my-2 description-text">
//               <a
//                 href={`#${link.id}`}
//                 className={`nav-link ${
//                   link.id === activeLink ? "active-link" : ""
//                 }`}
//                 onClick={() => handleLinkClick(link.id)}
//               >
//                 {link.text}
//                 {link.id === activeLink && (
//                   <span className="arrow-icon">➜</span>
//                 )}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default SideNav;

// SideNav.js
import React, { useState } from "react";
import "./LearnMore5.css";

const SideNav = ({ activeSection }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const links = [
    { id: "designStudio", text: "Design Studio" },
    { id: "productsDevelopment", text: "Products Development" },
    { id: "fabrication", text: "Fabrication" },
    { id: "cutting", text: "Cutting" },
    { id: "chestPrint", text: "Chest Print" },
    { id: "embroidery", text: "Embroidery" },
    { id: "garments", text: "Garments" },
    { id: "wash", text: "Wash" },
    { id: "accreditation", text: "Accreditation" },
    { id: "underGarments", text: "Under Garments" },
    { id: "etp", text: "Effluent Treatment Plant" },
  ];
  return (
    <div className="side-nav">
      <ul className="list-unstyled py-5">
        {links.map((link) => (
          <li key={link.id} className="my-2 description-text">
            <a
              href={`#${link.id}`}
              className={`nav-link ${
                link.id === activeLink ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.text}
              {link.id === activeLink && <span className="arrow-icon">➜</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
