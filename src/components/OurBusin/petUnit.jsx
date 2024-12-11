import React from "react";
import PrintingSection from "../../assets/AllAssets/ourBusiness/PrintingSections.jpeg";
import EmbroideryUnit from "../../assets/AllAssets/ourBusiness/EmbroideryUnit.jpeg";
import TextileLab from "../../assets/AllAssets/ourBusiness/TextileUnit.jpeg";
import "./OurBusinessStyle.css";

const petUnit = () => {
  return (
    <>
      <div className="container my-4">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold fs-4 my-2">Printing Section</h5>
                <div className="photo-text-business">
                  <div className="photo-text-overlay-business text-justify">
                    <p className="fw-bolder mx-4">
                      HAMS owns a robust printing section with 36,000 sq. ft of
                      space, capable of producing 1,00,000 pieces per day. The
                      unit is recognized for various print types, including
                      laser print, pigment print, rubber print, high-density
                      print, and more. The clientele includes prominent brands
                      like H&M, Puma, Next, and Primark.
                    </p>
                  </div>
                  <img
                    src={PrintingSection}
                    alt="Printing Section"
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold fs-4 my-2">Embroidery Unit</h5>
                <div className="photo-text-business text-justify">
                  <div className="photo-text-overlay-business text-justify">
                    <p className="fw-bolder mx-4 ">
                      HAMS operates a 10,000 sq. ft embroidery unit with 9 sets
                      of Tajima and MAYA embroidery machines. The unit has a
                      capacity of 7 billion stitches per month and specializes
                      in intricate designs.
                    </p>
                  </div>
                  <img
                    src={EmbroideryUnit}
                    alt="Embroidery Unit"
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold fs-4 my-2">Textile Lab</h5>
                <div className="photo-text-business text-justify">
                  <div className="photo-text-overlay-business text-justify">
                    <p className="fw-bolder mx-4 text-justify">
                      The company has a dedicated Textile Lab accredited by
                      buyers like H&M, NEXT, Kmart, New Look, and M&S. The lab
                      conducts comprehensive tests, including fiber analysis,
                      pilling, abrasion, color fastness, and more.
                    </p>
                  </div>
                  <img
                    src={TextileLab}
                    alt="Textile Lab"
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default petUnit;
