import React from "react";
import Image1 from "../../../assets/ProductServices/Specialized.png";
import "./Service.css";
import ChestPrintPhoto from "../../../assets/AllPhotoFinal/Service/ChestPrint.jpg";

const ChestPrint = () => {
  return (
    <>
      <div className="container my-3 mx-3">
        <div>
          <h3 className="fw-bold fs-3">Chest Print</h3>
          <p className="my-3 text-justify">
            At HAMS, our Placement Printing Section is a testament to our
            commitment to innovation and quality in garment printing. With a
            sprawling 36,000 sq. ft dedicated to this art, we stand at the
            forefront of the industry with a production capacity of 1,00,000
            pieces per day
          </p>
        </div>

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
                <div className="photo-text-overlay-product"></div>
                <img
                  src={ChestPrintPhoto}
                  alt=""
                  className="img-fluid rounded"
                  style={{ width: "1200px", height: "200px" }}
                />
              </div>
            </div>
            <div className="ms-0 mt-3 mt-md-0 ms-md-5 me-1 justify-items-center align-content-center">
              <p style={{ fontSize: "18px" }} className="fw-bolder">
                Specialized Machinery
              </p>
              <p
                className="my-3 me-2 text-justify"
                style={{ fontSize: "14px" }}
              >
                Equipped with state-of-the-art manual tables, octopus, and oval
                type machines, our facility is designed for precision and
                efficiency in every print we produce.
              </p>
            </div>
          </div>
        </div>

        <div className="my-3">
          <h5 className="fw-bold fs-5">Diverse Print Offerings</h5>
          <p className="my-3">
            Our expertise extends across a wide spectrum of prints, including
            but not limited to:
          </p>
        </div>
      </div>
      <div>
        <div
          className="my-3 rounded"
          style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
        >
          <div className="row p-2">
            <div className="col-sm-12 col-md-4">
              <div
                className="d-flex gap-2 p-1 rounded justify-content-center my-2"
                style={{ fontSize: "12px" }}
              >
                <ui>
                  <li>Laser Print</li>
                  <li> Rubber Print</li>
                  <li>Plastisol Print</li>
                </ui>
                <ui>
                  <li>Pigment Print</li>
                  <li>Puff Print</li>
                  <li>Glitter Print</li>
                </ui>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="d-flex gap-3 p-1 rounded justify-content-center my-2"
                style={{ fontSize: "12px" }}
              >
                <ui>
                  <li>High-Density Print</li>
                  <li>Photo Print</li>
                  <li>Metallic Print</li>
                </ui>
                <ui>
                  <li>Silicon Gel Print</li>
                  <li>Discharge Print</li>
                </ui>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="d-flex gap-3 p-1 rounded justify-content-center my-2"
                style={{ fontSize: "12px" }}
              >
                <ui>
                  <li>Spray Print</li>
                  <li>Foil Print</li>
                  <li>Flock Print</li>
                </ui>
                <ui>
                  <li>Engrave Print</li>
                  <li>Stone Setting</li>
                </ui>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="d-flex gap-5">
          <div>
            <h5 className="fw-bold text-start">Current Nominations</h5>
            <p className="my-3 me-2 text-justify">
              Renowned global brands such as H&M, Puma, Next, Primark, M&S,
              Pepkor, New look, Kmart, and more have nominated us for their
              placement print requirements, showcasing the trust they place in
              our capabilities.
            </p>
          </div>
          <div className="mt-3">
            <p className="mt-4 me-2 text-justify">
              With almost three decades of experience, HAMS Fashion Ltd has
              consistently delivered prints of unparalleled quality. Our chest
              prints, a focal point in fashion, are crafted with meticulous
              attention to detail, ensuring that each garment stands out with
              vibrancy and durability.
            </p>
            <h5 className="fw-bold text-end">Quality Beyond Boundaries</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChestPrint;
