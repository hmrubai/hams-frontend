import React from "react";
import CoverHAMSFashion from "../../../../assets/AllAssets/HomePage/OtherCompany/CompanyCover/Hamsfashin.png";
import { FaRegHandPointRight } from "react-icons/fa6";
import "../otherCompany.css";

const KnittingUnit = () => {
  return (
    <>
      {/* Cover Image */}
      <div className="pt-3">
        <img
          className="img-fluid mt-4"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src={CoverHAMSFashion}
          alt="Knitting Unit Cover Image"
        />
      </div>

      {/* All Information */}
      <div className="container my-5">
        <div className="row flex-column flex-lg-row mx-1 mx-lg-3">
          {/* Left Content */}
          <div className="col-12">
            <div className="text-center text-lg-start">
              <h4 className="fw-bold" style={{ color: "rgba(255, 97, 0, 1)" }}>
                KNITTING UNIT
              </h4>
              <h6 className="fw-bold mt-3">
                At HAMS Garments Limited, the knitting unit is a powerhouse of
                innovation and efficiency, contributing significantly to the
                company's reputation for high-quality garment production. Here's
                a brief overview of the knitting unit:
              </h6>
            </div>

            {/* Key Sections */}
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Capacity and Facilities
              </h5>
              <p className="ms-lg-4 ms-2">
                The knitting unit encompasses 56,000 square feet and operates
                with a daily production capacity of 25,000 kilograms.
              </p>
              <p className="ms-lg-4 ms-2">
                HAMS Garments Limited houses 64 sets of circular knitting
                machines, specializing in various knit fabrics.
              </p>
              <p className="ms-lg-4 ms-2">
                The unit features single jersey machines with 16, 20, 24, and 28
                gauges, fleece/terry machines with 16, 20, and 24 gauges, and
                rib/interlock machines with 14, 18, 20, 24, and 28 gauges.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Fabric Strengths
              </h5>
              <p className="ms-lg-4 ms-2">
                HAMS excels in working with an array of fabrics, including 100%
                cotton, cotton blends with modal, viscose, tencel, etc.
              </p>
              <p className="ms-lg-4 ms-2">
                Other fabric strengths include PC, CVC, PV, linen, linen blends,
                hemp, siro/grindle look quality, space-dyed mélange, inject
                yarn, and various other specialized textures and finishes.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Additional Fabric Strengths
              </h5>
              <p className="ms-lg-4 ms-2">
                The unit boasts expertise in producing single and Ly single
                jersey, lacoste, pique, plaited single jersey, terry and fleece
                fabrics, rib variations, waffle, interlock, and engineering
                stripe patterns.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Knitting Machinery
              </h5>
              <p className="ms-lg-4 ms-2">
                With 64 sets of circular knitting machines and 4 sets of
                semi-jacquard flat knitting machines, HAMS Garments Limited
                ensures a seamless and diverse production process.
              </p>
              <p className="ms-lg-4 ms-2">
                The unit plans to expand its knitting capacity by adding 30,000
                square feet and 50 more machines by December 2023.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Future Expansion
              </h5>
              <p className="ms-lg-4 ms-2">
                Future plans include an additional 30,000 square feet by
                December 2023 and the addition of 50 more machines to further
                enhance the knitting unit's capabilities.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mt-4 text-center text-lg-start">
              <p>
                The knitting unit at HAMS Garments Limited is a dynamic hub of
                creativity and technology, continuously evolving to meet the
                demands of the ever-changing fashion industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnittingUnit;
