import React from "react";
import { FaRegHandPointRight } from "react-icons/fa6";
import CoverHAMSFashion from "../../../../assets/AllAssets/HomePage/OtherCompany/CompanyCover/Hamsfashin.png";
import "../otherCompany.css";

const DhakaGarmentWashLtd = () => {
  return (
    <>
      {/* Cover Image */}
      <div className="pt-3">
        <img
          className="img-fluid mt-4"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src={CoverHAMSFashion}
          alt="Dhaka Garment & Wash Cover Image"
        />
      </div>

      {/* All Information */}
      <div className="container my-5">
        <div className="row flex-column flex-lg-row mx-1 mx-lg-3">
          {/* Left Content */}
          <div className="col-12">
            <div className="text-center text-lg-start">
              <h4 className="fw-bold" style={{ color: "rgba(255, 97, 0, 1)" }}>
                Dhaka Garments and Washing Limited
              </h4>
              <h6 className="fw-normal">
                Dhaka Garments and Wash Limited is a prominent player in the
                readymade garment industry in Bangladesh, specializing in
                washing and Woven & Denim manufacturing services. Here's a brief
                overview of the business
              </h6>
            </div>

            {/* Key Sections */}
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                {/* <GoHorizontalRule className="me-2" /> */}
                <FaRegHandPointRight className="me-2 handIconColor" />
                Facility Size
              </h5>
              <p className="ms-lg-4 ms-2">
                The company operates in a space spanning 1,05,000 sq. ft,
                providing an extensive working area for its operations.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Daily Production
              </h5>
              <p className="ms-lg-4 ms-2">
                With a production capacity of 1,20,000 pieces of Denim and Non
                denim items per day, Dhaka Garments and Wash Limited efficiently
                handles various washing and dyeing processes.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Washing and Dyeing Services
              </h5>
              <p className="ms-lg-4 ms-2">
                The company offers a wide range of washing and dyeing services,
                including normal garments wash, heavy garments wash, pigment
                wash, stone wash, sandblasting, and sustainable dyeing
                processes.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Clientele
              </h5>
              <p className="ms-lg-4 ms-2">
                Dhaka Garments and Wash has built a reputable client portfolio
                with accreditation catering to well-known brands such as H&M,
                KIABI, Esprit, Primark, Target Australia, S. Oliver, and Next.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Sustainable Practices
              </h5>
              <p className="ms-lg-4 ms-2">
                The company has incorporated sustainable practices in its
                operations, evident in the recent addition of ozone machines and
                nebulizing machines, aimed at reducing water and chemical
                consumption.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Future Expansions
              </h5>
              <p className="ms-lg-4 ms-2">
                The company has ambitious expansion plans, including adding more
                working area, sewing lines, and dyeing machines, showcasing a
                commitment to growth and meeting the evolving needs of the
                industry.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mt-4 text-center text-lg-start">
              <p>
                In summary, Dhaka Garments and Wash Limited stands out as a
                reliable and sustainable player in the garment industry,
                providing high-quality washing and dyeing services to its
                esteemed clientele.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DhakaGarmentWashLtd;
