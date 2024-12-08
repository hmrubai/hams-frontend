import React from "react";
import BusinessCover from "../../assets/otherPageCover/ourBusiness.jpg";
import KnittingUnit from "./KnittingUnit";
import "./OurBusiness.css";
import WorldMap from "../../assets/AllPhotoFinal/OurBusinessRoute/World Map.png";
import Bottoms from "../../assets/AllPhotoFinal/OurBusinessRoute/Bottoms.jpeg";
import Hoodies from "../../assets/AllPhotoFinal/OurBusinessRoute/Hoodies.jpeg";
import KidsWear from "../../assets/AllPhotoFinal/OurBusinessRoute/KidsWear.jpeg";
import LoungeWear from "../../assets/AllPhotoFinal/OurBusinessRoute/LoungeWear.jpeg";
import PoloShirt from "../../assets/AllPhotoFinal/OurBusinessRoute/PoloShirt.jpeg";
import Tops from "../../assets/AllPhotoFinal/OurBusinessRoute/Tops1.jpeg";
import TShirt from "../../assets/AllPhotoFinal/OurBusinessRoute/Tshirt.jpeg";
import UnderGarments from "../../assets/AllPhotoFinal/OurBusinessRoute/UnderGarments1.jpeg";
import { Link, useNavigate } from "react-router-dom";

const OurBusiness = () => {
  const navigate = useNavigate();

  //Images Navigation
  const handleImageClick = () => {
    navigate("/products/24");
  };

  const handleImageBottoms = () => {
    navigate("/products/21");
  };

  const handleImageLounge = () => {
    navigate("/products/27");
  };

  const handleImageKids = () => {
    navigate("/products/22");
  };
  const handleImageUnder = () => {
    navigate("/products/25");
  };
  const handleImagePoloHuddie = () => {
    navigate("/products/26");
  };
  const handleImageShirt = () => {
    navigate("/products/23");
  };
  return (
    <>
      {/* background image for our business section */}
      {/* <div className="companyCoverBG d-flex flex-column justify-content-center align-items-center"></div> */}
      <img className="img-fluid my-2 rounded" src={BusinessCover} alt="" />
      {/* company name & overview for our business section */}
      <div className="container">
        <div className="justify-content-center text-center my-5">
          <p className="fs-6 using-title-font">HAMS Garments Limited</p>
          <h3 className="fs-3 mt-2 fw-bold using-title-font">
            Business Overview
          </h3>
        </div>
      </div>
      {/* company location google map for our business section */}
      {/* <div className="my-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29210.19444123975!2d90.3872909!3d23.7732445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7786cf64489%3A0x9413edfc0f68b732!2zSEFNUyBHcm91cCB8IOCmueCnjeCmr-CmvuCmruCmuCDgppfgp43gprDgp4Hgpqo!5e0!3m2!1sen!2sbd!4v1704165557539!5m2!1sen!2sbd"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div> */}
      <img
        className="img-fluid mt-1"
        src={WorldMap}
        alt=""
        style={{ width: "100%", height: "600px" }}
      />
      {/* company product range for our business section */}
      <div className="container">
        <div className="text-start my-3">
          <h5 className="fs-3 mt-2 fw-bolder using-title-font">
            Our Product Range
          </h5>
          <p className="mt-3  me-md-5 text-justify">
            HAMS is a versatile player in the garment industry, specializing in
            the production and export of a wide array of apparel. The product
            range encompasses T-shirts, Polo Shirts, Sweatshirts, Rugby Shirts,
            Tank Tops, Fashionable Wear, Fancy Tops, Skirts, Leggings, Dresses,
            Hooded Jackets, Kids Wear, Undergarments, Swimwear, and more.
          </p>
        </div>
      </div>
      {/* company product image for our business section */}
      <div className="border-top border-1"></div>
      {/* <div className="container"></div> */}

      {/* ------------------main code ---------------- */}

      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="d-flex">
                  {/* <div
                    className="mb-4 cursor-pointer"
                    onClick={handleImageClick}
                  >
                    <div
                      onClick={handleImageClick}
                      className="photo-text-position d-none d-md-block cursor-pointer"
                    >
                      <div className="photo-text-overlay cursor-pointer">
                        <h5 className="fs-2 fw-bolder cursor-pointer">Tops</h5>
                      </div>

                      <div className="cursor-pointer">
                        <img
                          src={Tops}
                          alt=""
                          className="img-fluid rounded cursor-pointer"
                          style={{
                            width: "400px",
                            height: "600px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      onClick={handleImageClick}
                      className="photo-text-position d-block d-md-none cursor-pointer"
                    >
                      <div className="photo-text-overlay cursor-pointer">
                        <h5 className="fs-2 fw-bolder cursor-pointer">Tops</h5>
                      </div>
                      <div className="">
                        <img
                          src={Tops}
                          alt=""
                          className="img-fluid rounded cursor-pointer"
                          style={{
                            width: "200px",
                            height: "300px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  </div> */}
                  {/* ================================= */}
                  <div className="mb-4 cursor-pointer">
                    <Link onClick={handleImageClick}>
                      {/* Desktop View */}
                      <div className="photo-text-position d-none d-md-block">
                        <div className="photo-text-overlay">
                          <h5 className="fs-2 fw-bolder">Tops</h5>
                        </div>
                        <div>
                          <img
                            src={Tops}
                            alt="Tops"
                            className="img-fluid rounded"
                            style={{
                              width: "400px",
                              height: "600px",
                            }}
                          />
                        </div>
                      </div>

                      {/* Mobile View */}
                      <div className="photo-text-position d-block d-md-none">
                        <div className="photo-text-overlay">
                          <h5 className="fs-2 fw-bolder">Tops</h5>
                        </div>
                        <div>
                          <img
                            src={Tops}
                            alt="Tops"
                            className="img-fluid rounded"
                            style={{
                              width: "200px",
                              height: "300px",
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* ================================= */}
                  <div className="d-none d-md-block mb-4 justify-content-center align-content-center">
                    <div className="col">
                      <Link onClick={handleImageBottoms}>
                        <div className="col my-3 p-2">
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Bottoms</h5>
                            </div>
                            <div className="">
                              <img
                                src={Bottoms}
                                alt=""
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={handleImageLounge}>
                        <div className="col my-3 p-2">
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Lounge wear</h5>
                            </div>
                            <div className="">
                              <img
                                src={LoungeWear}
                                alt=""
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={handleImageKids}>
                        <div className="col my-3 p-2">
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Kids wear</h5>
                            </div>
                            <div className="">
                              <img
                                src={KidsWear}
                                alt=""
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* //mobile show  */}
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div className="d-flex">
                  <Link onClick={handleImageUnder}>
                    <div className="photo-text-position mb-4 d-none d-md-block">
                      <div className="photo-text-overlay">
                        <h5 className="fs-2 fw-bolder">Under garments</h5>
                      </div>
                      <div className="">
                        <img
                          src={UnderGarments}
                          alt=""
                          className="img-fluid rounded"
                          style={{ width: "400px", height: "600px" }}
                        />
                      </div>
                    </div>

                    <div className="photo-text-position mb-4 d-block d-md-none">
                      <div className="photo-text-overlay">
                        <h5 className="fs-2 fw-bolder">Under garments</h5>
                      </div>
                      <div className="">
                        <img
                          src={UnderGarments}
                          alt=""
                          className="img-fluid rounded"
                          style={{ width: "200px", height: "300px" }}
                        />
                      </div>
                    </div>
                  </Link>

                  <div className="d-none d-md-block mb-4 justify-content-center align-content-center">
                    <div className="col">
                      <Link onClick={handleImagePoloHuddie}>
                        <div className="col my-3 p-2">
                          {/* <img
                          src={Image6}
                          className="img-fluid rounded"
                          alt="Product 1"
                          style={{ width: "100px", height: "150px" }}
                        /> */}
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Polo shirt</h5>
                            </div>
                            <div className="">
                              <img
                                src={PoloShirt}
                                alt=""
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={handleImageShirt}>
                        <div className="col my-3 p-2">
                          {/* <img
                          src={Image7}
                          className="img-fluid rounded"
                          alt="Product 2"
                          style={{ width: "100px", height: "150px" }}
                        /> */}
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">T-Shirts</h5>
                            </div>
                            <div className="">
                              <img
                                src={TShirt}
                                alt=""
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={handleImagePoloHuddie}>
                        <div className="col my-3 p-2">
                          {/* <img
                          src={Image8}
                          className="img-fluid rounded"
                          alt="Product 3"
                          style={{ width: "100px", height: "150px" }}
                        /> */}
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Hoodies</h5>
                            </div>
                            <div className="">
                              <img
                                src={Hoodies}
                                alt=""
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================= */}

      {/* <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  eget leo ac nisi consectetur lobortis. Sed posuere dolor eu
                  arcu dignissim, ut dictum justo gravida. Quisque nec
                  vestibulum urna. Nulla facilisi.
                </p>
              </div>
              <div className="col-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  eget leo ac nisi consectetur lobortis. Sed posuere dolor eu
                  arcu dignissim, ut dictum justo gravida. Quisque nec
                  vestibulum urna. Nulla facilisi.
                </p>
              </div>
              <div className="col-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  eget leo ac nisi consectetur lobortis. Sed posuere dolor eu
                  arcu dignissim, ut dictum justo gravida. Quisque nec
                  vestibulum urna. Nulla facilisi.
                </p>
              </div>
              <div className="col-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  eget leo ac nisi consectetur lobortis. Sed posuere dolor eu
                  arcu dignissim, ut dictum justo gravida. Quisque nec
                  vestibulum urna. Nulla facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="px-3 my-4">
        <div className="row">
          <div className="col-12">
            <div className="row text-center p-5">
              <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
                <h5 className="fw-bolder using-title-fon">
                  Fabrication Strengths
                </h5>
                <p className="">
                  HAMS excels in fabricating diverse materials, including 100%
                  Cotton, Cotton blends with modal, viscose, tencel, PC, CVC,
                  PV, Linen, Hemp, and various blends. The company offers an
                  extensive array of fabric styles, such as siro, grindle look,
                  space-dyed look, inject yarn, neppy look, lurex or metallic
                  yarn, and real indigo, among others.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
                <h5 className="fw-bolder using-title-font">Organic</h5>
                <p className="">
                  HAMS excels in fabricating diverse materials, including
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
                <h5 className="fw-bolder using-title-font">Fancy Fabric</h5>
                <p className="">
                  HAMS excels in fabricating diverse materials, including
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 text-justify">
                <h5 className="fw-bolder using-title-font">
                  Recycles Sustainable
                </h5>
                <p className="">
                  HAMS excels in fabricating diverse materials, including
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Dyeing /> */}
      <KnittingUnit />
    </>
  );
};

export default OurBusiness;
