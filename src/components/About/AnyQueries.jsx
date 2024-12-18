import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useGetAllPostQuery, useGetCommonApiQuery } from "../../services/post";

const AnyQueries = () => {
  const aboutRes = useGetAllPostQuery();
  const commonRes = useGetCommonApiQuery();

  return (
    <div className="mt-5">
      <div
        className=""
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(175, 207, 126, 0.45), rgba(29, 47, 64, 0.8)), url(${
            import.meta.env.VITE_IMAGE_URL
          }/${commonRes?.data?.data?.banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "auto",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div className="container py-5">
          <div className="text-center p-2 text-white">
            <h5
              className="fw-bold"
              style={{
                color: " rgba(255, 255, 255, 1)",
                borderBottom: "3px solid rgba(255, 97, 0, 1)",
                display: "inline",
                paddingBottom: "3px",
              }}
            >
              {aboutRes?.data?.data?.customer_support.short_title}
            </h5>
            <h4
              className="px-3  py-3"
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              {aboutRes?.data?.data?.customer_support.title}
            </h4>
          </div>

          <div>
            <div className="row text-white">
              <div className="col-md-6 col-12">
                <div className="p-3 text-end d-flex justify-content-center justify-content-md-end">
                  <div className="p-2" style={{ color: "rgba(255, 97, 0, 1)" }}>
                    <LuPhoneCall size="40"></LuPhoneCall>
                  </div>
                  <div className="text-center">
                    <p className="p-0 m-0">Contact Us</p>
                    <p className="p-0 m-0">
                      {commonRes?.data?.data?.phone_number}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="p-3 text-end d-flex justify-content-center justify-content-md-start">
                  <div className="p-2" style={{ color: "rgba(255, 97, 0, 1)" }}>
                    <TfiEmail size="40"></TfiEmail>
                  </div>
                  <div className="text-center">
                    <p className="p-0 m-0">Email Us</p>
                    <p className="p-0 m-0">{commonRes?.data?.data?.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center justify-content-center mt-4">
            <></>
            <Link
              type="button"
              className="btn  fw-bold"
              to="/contact"
              style={{
                background: "rgba(255, 97, 0, 1)",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyQueries;
