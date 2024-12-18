import React from "react";
import CoverHAMSFashion from "../../../../assets/AllAssets/HomePage/OtherCompany/CompanyCover/Hamsfashin.png";
import { FaRegHandPointRight } from "react-icons/fa6";
import "../otherCompany.css";

const VictoriaIntimateLTD = () => {
  return (
    <>
      {/* Cover Image */}
      <div className="pt-3">
        <img
          className="img-fluid mt-4"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src={CoverHAMSFashion}
          alt="Victoria Intimate Cover Image"
        />
      </div>

      {/* All Information */}
      <div className="container my-5">
        <div className="row flex-column flex-lg-row mx-1 mx-lg-3">
          {/* Left Content */}
          <div className="col-12">
            <div className="text-center text-lg-start">
              <h4 className="fw-bold" style={{ color: "rgba(255, 97, 0, 1)" }}>
                Victoria Intimate Limited: Elevating Knit Garments with
                Precision and Style
              </h4>
              <h6 className="fw-bold mt-3">
                Embarking on a Journey of Excellence
              </h6>
              <h6 className="fw-normal">
                Established in 2022, Victoria Intimate Limited stands as a
                beacon of innovation and quality in the realm of knit garments.
                This succinct overview encapsulates the key facets of this
                dynamic unit:
              </h6>
            </div>

            {/* Key Sections */}
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Expansive Infrastructure
              </h5>
              <p className="ms-lg-4 ms-2">
                Spanning an impressive 1,78,500 square feet, Victoria Intimate
                Limited houses a total of 52 lines dedicated to the production
                of knit garments. The facility is meticulously designed to
                ensure optimal efficiency and workflow.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Operational Prowess
              </h5>
              <p className="ms-lg-4 ms-2">
                With 28 lines already operational, Victoria Intimate Limited has
                swiftly asserted its presence in the market. The unit is
                characterized by cutting-edge technology and a commitment to
                delivering top-notch knit garments.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Monthly Production Capacity
              </h5>
              <p className="ms-lg-4 ms-2">
                The operational lines contribute to a formidable monthly
                production capacity of 12,00,000 pieces. This reflects the
                unit's capability to meet substantial demands while maintaining
                unwavering standards of quality.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Knit Garment Specialization
              </h5>
              <p className="ms-lg-4 ms-2">
                Specializing in knit garments, Victoria Intimate Limited adds a
                touch of finesse to every piece it produces. The unit's focus on
                precision and style positions it as a preferred choice for
                clients seeking excellence in the knitwear segment.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mt-4 text-center text-lg-start">
              <p>
                In essence, Victoria Intimate Limited emerges as the world’s
                best Green certified knit garment industry, blending modern
                infrastructure with operational efficiency to redefine standards
                in the world of fashion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VictoriaIntimateLTD;
