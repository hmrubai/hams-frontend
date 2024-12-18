// import { useGetAllPostQuery } from "../../../services/post";
// import { CardDetails } from "./concernCard";

// const index = () => {
//   const aboutRes = useGetAllPostQuery();

//   const data = aboutRes?.data?.data?.process_feature;
//   const ObjApi = aboutRes?.data?.data?.process;

//   if (aboutRes.isFetching) return <div></div>;
//   if (aboutRes.isError) return <h1>An error occur {aboutRes.error.error}</h1>;

//   return (
//     <div className="product-gradient-clr py-5">
//       <div className="container">
//         <div className="">
//           <div className="text-center">
//             <h4
//               className="fw-bold my-3"
//               style={{
//                 color: "rgba(51, 51, 51, 1)",
//                 borderBottom: "3px solid rgba(255, 97, 0, 1)",
//                 display: "inline",
//                 paddingBottom: "3px",
//               }}
//             >
//               {ObjApi.short_title}
//             </h4>
//             <h4 className="" style={{ color: "rgba(29, 47, 64, 1)" }}>
//               {aboutRes?.data?.data?.process.title}
//             </h4>
//             <div className="row mx-auto">
//               <div className="col-lg-6 col-sm-12 mx-auto">
//                 <p
//                   className="text-justify"
//                   style={{ color: "rgba(51, 51, 51, 0.75)" }}
//                 >
//                   {aboutRes?.data?.data?.process.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="justify-content-center">
//             <div className="row">
//               <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
//                 {data.map((cardinfo) => (
//                   <div key={cardinfo.id} className="col-md-3 text-md-center">
//                     <CardDetails cardinfo={cardinfo}></CardDetails>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default index;

import { useGetAllPostQuery } from "../../../services/post";
import { CardDetails } from "./concernCard";

const Index = () => {
  const aboutRes = useGetAllPostQuery();

  const data = aboutRes?.data?.data?.process_feature;
  const ObjApi = aboutRes?.data?.data?.process;

  if (aboutRes.isFetching) return <div></div>;
  if (aboutRes.isError)
    return <h1>An error occurred: {aboutRes.error.error}</h1>;

  return (
    <div className="product-gradient-clr py-5">
      <div className="container">
        <div className="text-center">
          <h4
            className="fw-bold my-3"
            style={{
              color: "rgba(51, 51, 51, 1)",
              borderBottom: "3px solid rgba(255, 97, 0, 1)",
              display: "inline",
              paddingBottom: "3px",
            }}
          >
            {ObjApi.short_title}
          </h4>
          <h4 style={{ color: "rgba(29, 47, 64, 1)" }}>{ObjApi.title}</h4>
          <div className="row mx-auto">
            <div className="col-lg-6 col-sm-12 mx-auto">
              <p
                className="text-justify"
                style={{ color: "rgba(51, 51, 51, 0.75)" }}
              >
                {ObjApi.description}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {data.map((cardinfo) => (
            <div
              key={cardinfo.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex"
            >
              <CardDetails cardinfo={cardinfo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
