import React from "react";
import CoverHAMSFashion from "../../../../assets/AllAssets/HomePage/OtherCompany/CompanyCover/Hamsfashin.png";
import { FaRegHandPointRight } from "react-icons/fa6";
import "../otherCompany.css";

const HamsGarmentLtd = () => {
  return (
    <>
      {/* Cover Image */}
      <div className="pt-3">
        <img
          className="img-fluid mt-4"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src={CoverHAMSFashion}
          alt="HAMS Garments Cover Image"
        />
      </div>

      {/* All Information */}
      <div className="container my-5">
        <div className="row flex-column flex-lg-row mx-1 mx-lg-3">
          {/* Left Content */}
          <div className="col-12">
            <div className="text-center text-lg-start">
              <h4 className="fw-bold" style={{ color: "rgba(255, 97, 0, 1)" }}>
                HAMS Garments Limited: Business Overview
              </h4>
            </div>

            {/* Key Sections */}
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Product Range
              </h5>
              <p className="ms-lg-4 ms-2">
                HAMS is a versatile player in the garment industry, specializing
                in the production and export of a wide array of apparel. The
                product range encompasses T-shirts, Polo Shirts, Sweatshirts,
                Rugby Shirts, Tank Tops, Fashionable Wear, Fancy Tops, Skirts,
                Leggings, Dresses, Hooded Jackets, Kids Wear, Undergarments,
                Swimwear, and more.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Fabrication Strengths
              </h5>
              <p className="ms-lg-4 ms-2">
                HAMS excels in fabricating diverse materials, including 100%
                Cotton, Cotton blends with modal, viscose, tencel, PC, CVC, PV,
                Linen, Hemp, and various blends. The company offers an extensive
                array of fabric styles, such as siro, grindle look, space-dyed
                look, inject yarn, neppy look, lurex or metallic yarn, and real
                indigo, among others.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Knitting Units
              </h5>
              <p className="ms-lg-4 ms-2">
                The company's knitting unit spans 56,000 sq. ft and has a daily
                production capacity of 25,000 kgs. It houses 64 sets of circular
                knitting machines and 4 sets of semi-jacquard flat knitting
                machines. Future expansions include an additional 30,000 sq. ft
                and 50 more knitting machines.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Dyeing and Finishing Unit
              </h5>
              <p className="ms-lg-4 ms-2">
                HAMS operates a dyeing and finishing unit covering 70,000 sq.
                ft, with a daily production capacity of 30,000 kgs for dyeing
                and 40,000 kgs for finishing. The unit is equipped with 28 sets
                of dyeing machines and 20 sets of finishing machines. Future
                plans include significant expansions in working area and
                machinery.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Garments Unit
              </h5>
              <p className="ms-lg-4 ms-2">
                The garments unit spans 2,24,000 sq. ft, accommodating 2,200
                sets of machines. The monthly production capacity reaches
                50,00,000 pieces, with dedicated lines for T-shirts, knit items,
                undergarments, and lingerie.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Printing Section
              </h5>
              <p className="ms-lg-4 ms-2">
                HAMS owns a robust printing section with 36,000 sq. ft of space,
                capable of producing 1,00,000 pieces per day. The unit is
                recognized for various print types, including laser print,
                pigment print, rubber print, high-density print, and more. The
                clientele includes prominent brands like H&M, Puma, Next, and
                Primark.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Embroidery Unit
              </h5>
              <p className="ms-lg-4 ms-2">
                HAMS operates a 10,000 sq. ft embroidery unit with 9 sets of
                Tajima and MAYA embroidery machines. The unit has a capacity of
                7 billion stitches per month and specializes in intricate
                designs.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Textile Lab
              </h5>
              <p className="ms-lg-4 ms-2">
                The company has a dedicated Textile Lab accredited by buyers
                like H&M, NEXT, Kmart, New Look, and M&S. The lab conducts
                comprehensive tests, including fiber analysis, pilling,
                abrasion, color fastness, and more.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Sustainability Initiatives
              </h5>
              <p className="ms-lg-4 ms-2">
                HAMS is committed to sustainability, as reflected in its
                achievements and future goals. The company has adopted renewable
                energy sources, upgraded its effluent treatment plant, and
                committed to significant reductions in energy, greenhouse gas
                emissions, and water consumption by 2030. Accreditations from
                FEM and FSLM underscore its commitment to environmental and
                social responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamsGarmentLtd;
