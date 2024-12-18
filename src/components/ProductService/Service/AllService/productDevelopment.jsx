import React from "react";
import Knitwear from "../../../../assets/AllAssets/ProductService/Service/Kniwearr.png";
import "./AllService.css";

const productDevelopment = () => {
  return (
    <div className="container my-3">
      <div className="mx-3">
        <h5 className="fw-bold fs-3">Products Development</h5>
        <p className="my-3 text-justify">
          HAMS Garments Limited (HAMSGL) is a leading player in the garment
          manufacturing industry, renowned for its diverse and high-quality
          product offerings. The company specializes in producing a wide range
          of apparel, catering to various market segments.
        </p>
      </div>
      <div className="photo-text-product my-3">
        <div className="photo-text-overlay-product">
          <p className="text-center mx-2">
            <span className="fw-bolder fs-4 border-bottom border-1 pb-1">
              Knitwear
            </span>
            <br />
            <span
              className=""
              style={{
                fontSize: "14px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              HAMSGL excels in the production of knitwear, including a variety
              of tops and bottoms. The company's expertise in knitting
              technology allows for the creation of versatile and comfortable
              garments.
            </span>
          </p>
        </div>
        <img
          className="img-fluid rounded"
          src={Knitwear}
          alt=""
          style={{ height: "300px", width: "1100px", objectFit: "cover" }}
        />
      </div>

      <div className="my-3">
        <div
          className="d-flex flex-wrap text-justify"
          style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
        >
          <div className="col-md-4 col-sm-12 p-4">
            <h5 className="fw-bold ">Women's Wear</h5>
            <p className="my-3 ">
              With a keen focus on fashion trends, HAMSGL produces an array of
              women's wear, ranging from trendy tops to fashionable bottoms. The
              company's commitment to innovative designs and high-quality
              fabrics is evident in its women's wear collections.
            </p>
          </div>

          <div className="col-md-4 col-sm-12 p-4">
            <h5 className="fw-bold">Undergarments and Lingerie</h5>
            <p className="my-3">
              HAMSGL has a dedicated unit for the production of undergarments,
              including lingerie, underwear, boxers, and bras. The company's
              commitment to quality and comfort extends to its intimate apparel
              offerings.
            </p>
          </div>

          <div className="col-md-4 col-sm-12 p-4">
            <h5 className="fw-bold">Sustainable Fabrics</h5>
            <p className="my-3">
              In line with global sustainability goals, HAMSGL is actively
              engaged in producing sustainable fabrics. This commitment is
              evident in the incorporation of eco-friendly practices and
              materials to reduce the environmental impact of its products.
            </p>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="d-flex gap-5">
          <div className="text-justify">
            <h5 className="fw-bold">Innovative Designs</h5>
            <p className="my-3">
              HAMSGL stands out for its innovative designs and fabric patterns.
              The company embraces various techniques, including Siro/Grindle
              look quality, space-dyed look melange, inject yarn, and more,
              ensuring a diverse and appealing product range.
            </p>
          </div>
          <div className="mt-3 text-justify">
            <p className="mt-4 me-3">
              HAMSGL caters to the younger demographic with its children's wear
              collection, featuring comfortable and stylish garments designed
              for the unique needs of kids.
            </p>
            <h5 className="fw-bold text-end">Innovative Designs</h5>
          </div>
        </div>
      </div>

      <div>
        <div className="my-3 rounded">
          <div className="row pt-5">
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Tops</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div className="">
                    <ul>
                      <li>T-shirts</li>
                      <li>Blouses</li>
                      <li>Shirts Polo</li>
                      <li>Shirts</li>
                      <li>Sweatshirts</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Hoodies</li>
                      <li>Tank tops</li>
                      <li>Tunics</li>
                      <li>Crop tops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Bottoms</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Trousers</li>
                      <li>Leggings</li>
                      <li>Shorts</li>
                      <li>Skirts</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Culottes</li>
                      <li>Joggers</li>
                      <li>Pants</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Dresses</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Casual dresses</li>
                      <li>Formal dresses</li>
                      <li>Maxi dresses</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Shift dresses</li>
                      <li>Bodycon dresses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Knitwear</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Pullovers</li>
                      <li>Rompers</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Knitted dresses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Outerwear</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Jackets</li>
                      <li>Blazers</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Coats</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Activewear</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Sportswear</li>
                      <li>Workout clothes</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Athletic apparel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Children's Wear</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Kids' tops</li>
                      <li>Children's dresses</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Kids' bottoms</li>
                      <li>Kidswear sets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Undergarments and Lingerie</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Bras</li>
                      <li>Boxers</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Panties</li>
                      <li>Lingerie sets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className=" gap-3 p-3 rounded  my-2"
                style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
              >
                <h5 className="fw-bold fs-5">Nightwear</h5>
                <div
                  className="d-flex justify-content-around"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    <ul>
                      <li>Pajama sets</li>
                      <li>Sleepwear</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Nightgowns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDevelopment;
