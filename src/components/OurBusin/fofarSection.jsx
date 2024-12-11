import React from "react";

const sections = [
  {
    title: "Fabrication Strengths",
    content:
      "HAMS excels in fabricating diverse materials, including 100% Cotton, Cotton blends with modal, viscose, tencel, PC, CVC, PV, Linen, Hemp, and various blends. The company offers an extensive array of fabric styles, such as siro, grindle look, space-dyed look, inject yarn, neppy look, lurex or metallic yarn, and real indigo, among others.",
  },
  {
    title: "Organic",
    content: "HAMS excels in fabricating diverse materials, including",
  },
  {
    title: "Fancy Fabric",
    content: "HAMS excels in fabricating diverse materials, including",
  },
  {
    title: "Recycles Sustainable",
    content: "HAMS excels in fabricating diverse materials, including",
  },
];

const FofarSection = () => {
  return (
    <div className="container py-4">
      <div className="row text-center">
        {sections.map((section, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-3 text-justify mb-md-0"
          >
            <div>
              <h5 className="fw-bolder">{section.title}</h5>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FofarSection;

//=====Previous code================================

// import React from "react";

// const fofarSection = () => {
//   return (
//     <>
//       <div className="px-3 my-4">
//         <div className="row">
//           <div className="col-12">
//             <div className="row text-center p-5">
//               <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
//                 <h5 className="fw-bolder">Fabrication Strengths</h5>
//                 <p>
//                   HAMS excels in fabricating diverse materials, including 100%
//                   Cotton, Cotton blends with modal, viscose, tencel, PC, CVC,
//                   PV, Linen, Hemp, and various blends. The company offers an
//                   extensive array of fabric styles, such as siro, grindle look,
//                   space-dyed look, inject yarn, neppy look, lurex or metallic
//                   yarn, and real indigo, among others.
//                 </p>
//               </div>
//               <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
//                 <h5 className="fw-bolder">Organic</h5>
//                 <p>HAMS excels in fabricating diverse materials, including</p>
//               </div>
//               <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
//                 <h5 className="fw-bolder">Fancy Fabric</h5>
//                 <p>HAMS excels in fabricating diverse materials, including</p>
//               </div>
//               <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
//                 <h5 className="fw-bolder">Recycles Sustainable</h5>
//                 <p>HAMS excels in fabricating diverse materials, including</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default fofarSection;
