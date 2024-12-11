import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Tops from "../../assets/AllAssets/ourBusiness/productRange/Tops.jpeg";
import Bottoms from "../../assets/AllAssets/ourBusiness/productRange/Bottoms.jpeg";
import LoungeWear from "../../assets/AllAssets/ourBusiness/productRange/LoungeWear.jpeg";
import KidsWear from "../../assets/AllAssets/ourBusiness/productRange/KidsWear.jpeg";
import UnderGarments from "../../assets/AllAssets/ourBusiness/productRange/UnderGarments.jpeg";
import PoloShirt from "../../assets/AllAssets/ourBusiness/productRange/PoloShirt.jpeg";
import TShirt from "../../assets/AllAssets/ourBusiness/productRange/Tshirt.jpeg";
import Hoodies from "../../assets/AllAssets/ourBusiness/productRange/Hoodies.jpeg";
import "./OurBusinessStyle.css";

const productRange = () => {
  const navigate = useNavigate();

  //Product Images Wise Navigation Link
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
      {/* Product Range of  Our Business*/}
      <div className="container">
        <div className="text-start my-3">
          <h5 className="fs-3 mt-2 fw-bolder">Our Product Range</h5>
          <p className="mt-3  me-md-5 text-justify">
            HAMS is a versatile player in the garment industry, specializing in
            the production and export of a wide array of apparel. The product
            range encompasses T-shirts, Polo Shirts, Sweatshirts, Rugby Shirts,
            Tank Tops, Fashionable Wear, Fancy Tops, Skirts, Leggings, Dresses,
            Hooded Jackets, Kids Wear, Undergarments, Swimwear, and more.
          </p>
        </div>
      </div>
      {/* Added Border*/}
      <div className="border-top border-1"></div>
      {/* Product Name, Image & Link */}
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="d-flex">
                  <div className="mb-4 cursor-pointer">
                    {/* Tops Image & Link */}
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

                  <div className="d-none d-md-block mb-4 justify-content-center align-content-center">
                    <div className="col">
                      {/* Bottoms Image & Link */}
                      <Link onClick={handleImageBottoms}>
                        <div className="col my-3 p-2">
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Bottoms</h5>
                            </div>
                            <div className="">
                              <img
                                src={Bottoms}
                                alt="Bottoms"
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                      {/* Lounge Wear Image & Link */}
                      <Link onClick={handleImageLounge}>
                        <div className="col my-3 p-2">
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Lounge wear</h5>
                            </div>
                            <div className="">
                              <img
                                src={LoungeWear}
                                alt="Lounge wear"
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                      {/* Kids Wear Image & Link */}
                      <Link onClick={handleImageKids}>
                        <div className="col my-3 p-2">
                          <div className="photo-text-position1 mb-4">
                            <div className="photo-text-overlay1">
                              <h5 className="fs-6 fw-bolder">Kids wear</h5>
                            </div>
                            <div className="">
                              <img
                                src={KidsWear}
                                alt="Kids wear"
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
    </>
  );
};

export default productRange;
