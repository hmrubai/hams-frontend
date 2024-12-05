import React from "react";
import Image6 from "../../assets/ourBussiness/networkphoto.png";
import Dyeing from "./Dyeing";
import "./OurBusiness.css";

import EmbroideryUnit from "../../assets/AllPhotoFinal/OurBusinessRoute/EmbroideryUnit.jpeg";
import GarmentsUnit from "../../assets/AllPhotoFinal/OurBusinessRoute/GarmentsUnit.jpeg";
import KnittingUnits from "../../assets/AllPhotoFinal/OurBusinessRoute/KnittingUnits.jpeg";
import PrintingSection from "../../assets/AllPhotoFinal/OurBusinessRoute/PrintingSections.jpeg";
import Sustainability from "../../assets/AllPhotoFinal/OurBusinessRoute/Sustainability22.png";
import TextileLab from "../../assets/AllPhotoFinal/OurBusinessRoute/TextileUnit.jpeg";
import WorldMap from "../../assets/AllPhotoFinal/OurBusinessRoute/WORLDMAP.png";

const KnittingUnit = () => {
  return (
    <>
      <div>
        <div className="container my-3">
          <h5 className="fw-bolder fs-3 using-title-font">Knitting Units</h5>
        </div>
        <div className="photo-text-business">
          <div className="photo-text-overlay-business">
            <p className="fs-5 fw-bolder mx-5">
              The company's knitting unit spans 56,000 sq. ft and has a daily
              production capacity of 25,000 kgs. It houses 64 sets of circular
              knitting machines and 4 sets of semi-jacquard flat knitting
              machines. Future expansions include an additional 30,000 sq. ft
              and 50 more knitting machines.
            </p>
          </div>
          <img
            src={KnittingUnits}
            alt=""
            className="img-fluid d-none d-md-block"
          />
          <img
            src={KnittingUnits}
            alt="Knitting Unit"
            className="img-fluid d-block d-md-none"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>
      <Dyeing />

      <div className="container my-3">
        <h5 className="fw-bolder fs-3 using-title-font">Garments Unit</h5>
      </div>
      {/* <img className="img-fluid" src={Image7} alt="" /> */}
      <div className="photo-text-business">
        <div className="photo-text-overlay-business">
          <p className="fs-5 fw-bolder mx-5">
            The garments unit spans 2,24,000 sq. ft, accommodating 2,200 sets of
            machines. The monthly production capacity reaches 50,00,000 pieces,
            with dedicated lines for T-shirts, knit items, undergarments, and
            lingerie.
          </p>
        </div>
        {/* <img src={Image7} alt="" className="img-fluid" /> */}
        <img
          src={GarmentsUnit}
          alt=""
          className="img-fluid d-none d-md-block"
        />
        <img
          src={GarmentsUnit}
          alt="Knitting Unit"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "500px" }}
        />
      </div>

      <div className="container my-4">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold fs-4 my-2 using-title-font">
                  Printing Section
                </h5>
                {/* <img
                  src={Image2}
                  className="img-fluid rounded d-none d-md-block"
                  style={{ width: "600px", height: "500px" }}
                /> */}
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
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold fs-4 my-2 using-title-font">
                  Embroidery Unit
                </h5>
                {/* <img
                  src={Image3}
                  className="img-fluid rounded"
                  style={{ width: "600px", height: "500px" }}
                /> */}
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
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold fs-4 my-2 using-title-font">
                  Textile Lab
                </h5>
                {/* <img
                  src={Image4}
                  className="img-fluid rounded"
                  style={{ width: "600px", height: "500px" }}
                /> */}
                <div className="photo-text-business text-justify">
                  <div className="photo-text-overlay-business text-justify">
                    <p className="fw-bolder  mx-4 text-justify">
                      The company has a dedicated Textile Lab accredited by
                      buyers like H&M, NEXT, Kmart, New Look, and M&S. The lab
                      conducts comprehensive tests, including fiber analysis,
                      pilling, abrasion, color fastness, and more.
                    </p>
                  </div>
                  <img
                    src={TextileLab}
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h3 className="fw-bolder fs-3 using-title-font">
          Sustainability Initiatives
        </h3>
      </div>
      {/* <img className="img-fluid my-1" src={Image5} alt="" /> */}
      <div className="photo-text-business">
        <div className="photo-text-overlay-business">
          <p className="fs-5 fw-bolder mx-5">
            HAMS is committed to sustainability, as reflected in its
            achievements and future goals. The company has adopted renewable
            energy sources, upgraded its effluent treatment plant, and committed
            to significant reductions in energy, greenhouse gas emissions, and
            water consumption by 2030. Accreditations from FEM and FSLM
            underscore its commitment to environmental and social
            responsibility.
          </p>
        </div>
        {/* <img src={Image5} alt="" className="img-fluid" /> */}
        <img
          src={Sustainability}
          alt=""
          className="img-fluid d-none d-md-block"
          // style={{ width: "100%", height: "100%" }}
        />

        <img
          src={Sustainability}
          alt="Knitting Unit"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "700px" }}
        />
      </div>
      {/* <img className="img-fluid mt-1" src={WorldMap} alt="" style={{width:"100%", height:"600px"}} /> */}
      <div className="my-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.3915553774978!2d90.45293749999999!3d24.1930625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375679003a734f6d%3A0x7c8f4e259ab14cd3!2sHAMS%20GARMENTS%20LTD!5e0!3m2!1sen!2sbd!4v1729681349868!5m2!1sen!2sbd"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
        {/* <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58230.27922326656!2d90.37672634863281!3d24.193031099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375679d4e48cbb45%3A0x154a262f295c2e70!2sHAMS%20Garments%20Ltd.!5e0!3m2!1sen!2sbd!4v1697451531857!5m2!1sen!2sbd"

          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.3915553774978!2d90.45293749999999!3d24.1930625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375679003a734f6d%3A0x7c8f4e259ab14cd3!2sHAMS%20GARMENTS%20LTD!5e0!3m2!1sen!2sbd!4v1729681349868!5m2!1sen!2sbd"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
          className="col-lg-10"
        ></iframe> */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3639.39245145416!2d90.4503691!3d24.1930311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375679d4e48cbb45%3A0x154a262f295c2e70!2sHAMS%20Garments%20Ltd.......!5e0!3m2!1sen!2sbd!4v1724578778617!5m2!1sen!2sbd"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </>
  );
};

export default KnittingUnit;
