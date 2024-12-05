import React from "react";
import Image1 from "../../../assets/ProductServices/Creation.png";
import Image2 from "../../../assets/ProductServices/design.png";
import Image3 from "../../../assets/ProductServices/Manufacturers.png";
import FabricationPhoto from "../../../assets/AllPhotoFinal/Service/FabricVariety.jpg";
import SustainabilityFab from "../../../assets/AllPhotoFinal/Service/SustainableFabrics.jpg";
import "./Service.css";

const Fabrication = () => {
  return (
    <div className="container my-3 mx-3">
      <>
        <h5 className="fw-bold fs-3">Strengths in fabrication</h5>
        <p className="my-3 text-justify">
          HAMSGL offering versatility to meet various market demands by the
          fabrication process of HAMSGL
        </p>
      </>

      <div
        className="my-3 rounded"
        style={{
          backgroundColor: "rgba(255, 204, 128, 0.1)",
          boxShadow: "0 2px 4px #0003, 0 6px 12px #00000030",
        }}
      >
        <div className="d-flex flex-column flex-md-row">
          <div>
            <div className="photo-text-product">
              <div className="photo-text-overlay-product">
                <p className="text-justify mx-3">
                  Fabric Variety <br />{" "}
                  <span style={{ fontSize: "14px" }}>
                    HAMSGL specializes in producing a wide array of fabrics,
                    including 100% Cotton, Cotton blended with modal viscose,
                    tencel, etc.Other fabric options include PC
                    (Polyester-Cotton), CVC (Chief Value Cotton), PV
                    (Polyester-Viscose), Linen, Hemp, and various blends.
                  </span>
                </p>
              </div>
              <img
                src={FabricationPhoto}
                alt=""
                className="img-fluid rounded"
                style={{ width: "1200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="ms-0 mt-3 mt-md-0 ms-md-5 me-1 justify-items-center align-content-center text-justify">
            <p style={{ fontSize: "18px" }} className="fw-bolder">
              Innovative Designs
            </p>
            <p className="my-3 me-2" style={{ fontSize: "14px" }}>
              The company excels in creating innovative designs and fabric
              patterns, such as Siro/Grindle look quality, space-dyed look
              melange, inject yarn, snow effect quality, neppy look, lurex or
              metallic yarn, and more.
            </p>
            <p className="my-3 me-2" style={{ fontSize: "14px" }}>
              Specialized fabrics like viscose melange, dope-dyed melange, and
              real indigo contribute to a diverse product range.
            </p>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="d-flex gap-5">
          <div className="text-justify">
            <h5 className="fw-bold ">Knitting Expertise</h5>
            <p className="mt-2 me-2">
              HAMSGL has a well-equipped knitting unit with a capacity of 25,000
              kgs per day production.
            </p>

            <p className=" me-2">
              The knitting unit features 64 sets of circular knitting machines,
              producing single jersey, fleece, terry, rib interlock, and other
              fabric types.
            </p>
          </div>
          <div className="mt-3 text-justify">
            <p className="mt-3 me-2">
              The dyeing and finishing unit covers 70,000 sq. ft and has a
              production capacity of 30,000 kgs per day for dyeing and 40,000
              kgs per day for finishing.
            </p>
            <p className="my-2 me-2">
              o The unit is equipped with 28 sets of dyeing machines and 20 sets
              of finishing machines, ensuring a comprehensive dyeing and
              finishing process.
            </p>
            <h5 className="fw-bold text-end">Dyeing Capabilities</h5>
          </div>
        </div>
      </div>

      <div className="my-3 text-justify">
        <h5 className="fw-bold">Quality Assurance</h5>
        <p className="my-3 text-justify">
          HAMSGL follows stringent quality standards, employing a 4-point system
          for fabric and AQL 1.5 for finished garments.
        </p>
        <p className="my-3 text-justify">
          The company conducts lab tests with accredited partners such as ITS,
          SGS, BV, and in-house facilities for fabric and accessory testing.
        </p>
      </div>

      <>
        <h5 className="fw-bold">Sustainable Fabrics</h5>
      </>
      <div className="photo-text-product my-3">
        <div className="photo-text-overlay-product">
          <p className="fw-bolder mx-2">
            HAMSGL is well-versed in producing sustainable fabrics, contributing
            to a responsible and environmentally conscious approach in the
            fashion industry.
          </p>
        </div>
        <img
          className="img-fluid rounded"
          src={SustainabilityFab}
          alt=""
          style={{ height: "300px", width: "1100px", objectFit: "cover" }}
        />
      </div>
      <div className="my-3  container text-justify text-center">
        <p>
          HAMSGL's strengths in fabric innovation, diverse product offerings,
          sustainability initiatives, and future-focused
        </p>
        <p>
          {" "}
          expansion plans position it as a formidable player in the textile and
          garment manufacturing industry.
        </p>
      </div>
    </div>
  );
};

export default Fabrication;
