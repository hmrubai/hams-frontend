import React from "react";
import CoverHAMSFashion from "../../../../assets/AllAssets/HomePage/OtherCompany/CompanyCover/Hamsfashin.png";
import { FaRegHandPointRight } from "react-icons/fa6";
import "../otherCompany.css";

const TQM = () => {
  return (
    <>
      {/* Cover Image */}
      <div className="pt-3">
        <img
          className="img-fluid mt-4"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src={CoverHAMSFashion}
          alt="TQM Cover Image"
        />
      </div>

      {/* All Information */}
      <div className="container my-5">
        <div className="row flex-column flex-lg-row mx-1 mx-lg-3">
          {/* Left Content */}
          <div className="col-12">
            <div className="text-center text-lg-start">
              <h4 className="fw-bold" style={{ color: "rgba(255, 97, 0, 1)" }}>
                Total Quality Management (TQM)
              </h4>
            </div>

            {/* Key Sections */}
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Quality Standards Adherence
              </h5>
              <p className="ms-lg-4 ms-2">
                Strict adherence to international quality standards in fabric
                and finished garment production.
              </p>
              <p className="ms-lg-4 ms-2">
                Implementation of a comprehensive quality management system.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Employee Training and Involvement
              </h5>
              <p className="ms-lg-4 ms-2">
                Regular training programs for employees to ensure a high level
                of skill and competence.
              </p>
              <p className="ms-lg-4 ms-2">
                Encouraging employee involvement in quality improvement
                initiatives.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Customer Focus
              </h5>
              <p className="ms-lg-4 ms-2">
                A customer-centric approach, ensuring that products meet or
                exceed customer expectations.
              </p>
              <p className="ms-lg-4 ms-2">
                Gathering customer feedback and integrating it into the
                improvement process.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Process Control and Standardization
              </h5>
              <p className="ms-lg-4 ms-2">
                Stringent control over manufacturing processes to minimize
                variations.
              </p>
              <p className="ms-lg-4 ms-2">
                Standardization of procedures to maintain consistent quality
                across products.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Supplier Collaboration
              </h5>
              <p className="ms-lg-4 ms-2">
                Collaborative relationships with suppliers to ensure the quality
                of raw materials.
              </p>
              <p className="ms-lg-4 ms-2">
                Periodic evaluations of supplier performance.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Data-Driven Decision Making
              </h5>
              <p className="ms-lg-4 ms-2">
                Utilization of data analytics for informed decision-making in
                quality control.
              </p>
              <p className="ms-lg-4 ms-2">
                Monitoring key performance indicators to identify areas for
                improvement.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Waste Reduction
              </h5>
              <p className="ms-lg-4 ms-2">
                Implementation of practices to minimize material waste during
                production.
              </p>
              <p className="ms-lg-4 ms-2">
                Environmentally conscious manufacturing processes.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Employee Empowerment
              </h5>
              <p className="ms-lg-4 ms-2">
                Implementation of practices to minimize material waste during
                production.
              </p>
              <p className="ms-lg-4 ms-2">
                Recognition and rewards for employees contributing to quality
                excellence.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold d-flex align-items-center">
                <FaRegHandPointRight className="me-2 handIconColor" />
                Certifications and Accreditations
              </h5>
              <p className="ms-lg-4 ms-2">
                Obtaining and maintaining relevant industry certifications.
              </p>
              <p className="ms-lg-4 ms-2">
                Participation in programs that promote cleaner and more
                sustainable textile practices.
              </p>
            </div>

            {/* Conclusion */}
            <div className="mt-4 text-center text-lg-start">
              <p>
                These features collectively contribute to the establishment and
                maintenance of a robust Total Quality Management system,
                ensuring that HAMS maintains high standards of quality in its
                products and processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TQM;
