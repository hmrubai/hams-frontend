import React from "react";
import { GoHorizontalRule } from "react-icons/go";

const Dyeing = () => {
  return (
    <>
      <div className="container m-5">
        <div className="py-5 ps-5 mt-5">
          <div className="mt-5">
            <div className="row flex-lg-row flex-column-reverse my-5 mx-lg-3 mx-sm-1">
              <div className="">
                <div className="d-flex">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 my-auto">
                      <h4
                        className="fw-bold"
                        style={{ color: "rgba(255, 97, 0, 1)" }}
                      >
                        Dyeing Unit
                      </h4>
                      <h6 className="fw-bold">
                        The dyeing unit at HAMS Garments Limited stands as a
                        cornerstone of the company's commitment to excellence in
                        textile processing. Here's a concise overview of the
                        dyeing unit
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="description-text">
                    <h5 className="fw-bold ms-2">
                      <GoHorizontalRule className="minus-icon-style heading-icon-sizing" />
                      Capacity and Facilities
                    </h5>
                    <p className="ms-4">
                      Occupying a substantial 70,000 square feet, the dyeing
                      unit processes 30,000 kilograms per day in dyeing
                      production and 40,000 kilograms per day in finishing
                      production.
                    </p>
                    <p className="ms-4">
                      The unit is equipped with 28 sets of state-of-the-art
                      dyeing machines from renowned brands such as Sclavos,
                      Fongs, Canler, and Delmenlar.
                    </p>
                    <p className="ms-4">
                      Boasting both open and tube finishing facilities, the unit
                      utilizes three stenters with eight chambers, one relax
                      dryer, and open and tube compactors.
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="description-text">
                    <h5 className="fw-bold ms-2">
                      <GoHorizontalRule className="minus-icon-style heading-icon-sizing" />
                      Technological Advancements
                    </h5>
                    <p className="ms-4">
                      The dyeing unit recently underwent a transformative
                      renovation, shifting from conventional biological systems
                      to a Membrane Bio Reactor (MBR), showcasing a progressive
                      approach to sustainable practices.
                    </p>
                    <p className="ms-4">
                      The unit incorporates advanced processes like brush and
                      sueded finishing, ensuring a diverse range of high-quality
                      finishes.
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="description-text">
                    <h5 className="fw-bold ms-2">
                      <GoHorizontalRule className="minus-icon-style heading-icon-sizing" />
                      Expansion Plans
                    </h5>
                    <p className="ms-4">
                      Anticipating future demands, HAMS Garments Limited plans
                      to add around 110,000 square feet for dyeing operations
                      and 120,000 square feet for sewing and storage.
                    </p>
                    <p className="ms-4">
                      The expansion includes 20 additional sets of dyeing
                      machines by 2023–24, enhancing capacity by 20 tons per day
                      and introducing special dyeing machines for synthetic
                      fabrics.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                The dyeing unit at HAMS Garments Limited not only adheres to
                stringent quality standards but also embraces sustainable
                practices, reflecting the company's forward-looking approach in
                the textile industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dyeing;
