import React from "react";
import { FaRegHandPointRight } from "react-icons/fa6";
import CoverHAMSFashion from "../../../../assets/AllAssets/HomePage/OtherCompany/CompanyCover/Hamsfashin.png";
import "../otherCompany.css";

const DyeingUnit = () => {
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
                Dyeing Unit
              </h4>
              <h6 className="fw-bold mt-3">
                The dyeing unit at HAMS Garments Limited stands as a cornerstone
                of the company's commitment to excellence in textile processing.
                Here's a concise overview of the dyeing unit
              </h6>
            </div>

            {/* Key Sections */}
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Capacity and Facilities
              </h5>
              <p className="ms-lg-4 ms-2">
                Occupying a substantial 70,000 square feet, the dyeing unit
                processes 30,000 kilograms per day in dyeing production and
                40,000 kilograms per day in finishing production.
              </p>
              <p className="ms-lg-4 ms-2">
                The unit is equipped with 28 sets of state-of-the-art dyeing
                machines from renowned brands such as Sclavos, Fongs, Canler,
                and Delmenlar.
              </p>
              <p className="ms-lg-4 ms-2">
                Boasting both open and tube finishing facilities, the unit
                utilizes three stenters with eight chambers, one relax dryer,
                and open and tube compactors.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Technological Advancements
              </h5>
              <p className="ms-lg-4 ms-2">
                The dyeing unit recently underwent a transformative renovation,
                shifting from conventional biological systems to a Membrane Bio
                Reactor (MBR), showcasing a progressive approach to sustainable
                practices.
              </p>
              <p className="ms-lg-4 ms-2">
                The unit incorporates advanced processes like brush and sueded
                finishing, ensuring a diverse range of high-quality finishes.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Expansion Plans
              </h5>
              <p className="ms-lg-4 ms-2">
                Anticipating future demands, HAMS Garments Limited plans to add
                around 110,000 square feet for dyeing operations and 120,000
                square feet for sewing and storage.
              </p>
              <p className="ms-lg-4 ms-2">
                The expansion includes 20 additional sets of dyeing machines by
                2023–24, enhancing capacity by 20 tons per day and introducing
                special dyeing machines for synthetic fabrics.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mt-4 text-center text-lg-start">
              <p>
                The dyeing unit at HAMS Garments Limited not only adheres to
                stringent quality standards but also embraces sustainable
                practices, reflecting the company's forward-looking approach in
                the textile industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DyeingUnit;
