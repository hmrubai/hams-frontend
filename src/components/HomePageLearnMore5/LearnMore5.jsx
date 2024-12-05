import React from "react";
import "./LearnMore5.css";
import section1 from "../../assets/company-menu-section/section1.png";
import mission from "../../assets/company-menu-section/mission.png";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import rightArrow from "../../assets/right-arrow.png";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Product1 from "../../assets/ProductServices/services-1.jpg";
import Product2 from "../../assets/ProductServices/services-2.jpg";
import Product3 from "../../assets/ProductServices/services-3.jpg";
import Product4 from "../../assets/ProductServices/services-4.jpg";
import Product5 from "../../assets/ProductServices/services-5.jpg";
import Product6 from "../../assets/ProductServices/services-6.jpg";
import Product7 from "../../assets/ProductServices/services-7.jpg";
import Product8 from "../../assets/ProductServices/services-8.jpg";

const LearnMore5 = () => {
  const companyMenuData = [
    {
      id: "1",
      heading1: "About HAMS",
      heading2:
        "Let's Talk About The <span className='minus-icon-style'>Company</span>",
      description1:
        "Lorem ipsum dolor sit amet, consectetuadipisicing elit. Iusto asperiores praesentium doloremque ipsam sit impeditadipisicing elit. Iusto asperiores praesentium doloremque ipsam sit impedit consecteturdistinctio accusamus, cum fugit. Eius earum optio amet eaque nostrum dicta animi illo maiores,",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias?",
    },
  ];

  const now = 60;
  return (
    <div>
      <div>
        <section className="mt-5">
          <div className="container-fluid">
            <div className="">
              <div className="row justify-content-center main-container mx-auto mt-5">
                <div className="col-lg-2 col-sm-12 col-md-2 left-sidenav sticky-bottom">
                  <SideNav />
                </div>
                <div className="col-lg-8 col-sm-12 col-md-8 mt-5">
                  <div id="productsDevelopment">
                    <div className="row my-5 mx-lg-3 mx-sm-1">
                      <div className="col-md-5 col-lg-5 col-sm-12 my-auto zoom-container">
                        <img
                          src={Product2}
                          className="img-fluid zoomable-image"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                        <h4
                          className="fw-bold"
                          style={{ color: "rgba(255, 97, 0, 1)" }}
                        >
                          Products Development
                        </h4>
                        <p className="mb-0 description-text">
                          HAMS Garments Limited (HAMSGL) is a leading player in
                          the garment manufacturing industry, renowned for its
                          diverse and high-quality product offerings. The
                          company specializes in producing a wide range of
                          apparel, catering to various market segments
                        </p>
                        <br />
                      </div>

                      <div className="mt-3">
                        <p className="description-text">
                          <h5 className="fw-bold">Knitwear</h5>
                          <p>
                            HAMSGL excels in the production of knitwear,
                            including a variety of tops and bottoms. The
                            company's expertise in knitting technology allows
                            for the creation of versatile and comfortable
                            garments.
                          </p>
                        </p>

                        <p className="description-text">
                          <h5 className="fw-bold">Women's Wear</h5>
                          <p>
                            With a keen focus on fashion trends, HAMSGL produces
                            an array of women's wear, ranging from trendy tops
                            to fashionable bottoms. The company's commitment to
                            innovative designs and high-quality fabrics is
                            evident in its women's wear collections
                          </p>
                        </p>
                        <p className="description-text">
                          <h5 className="fw-bold">
                            Undergarments and Lingerie
                          </h5>
                          <p>
                            HAMSGL has a dedicated unit for the production of
                            undergarments, including lingerie, underwear,
                            boxers, and bras. The company's commitment to
                            quality and comfort extends to its intimate apparel
                            offerings.
                          </p>
                        </p>
                        <p className="description-text">
                          <h5 className="fw-bold">Sustainable Fabrics</h5>
                          <p>
                            In line with global sustainability goals, HAMSGL is
                            actively engaged in producing sustainable fabrics.
                            This commitment is evident in the incorporation of
                            eco-friendly practices and materials to reduce the
                            environmental impact of its products.
                          </p>
                        </p>
                        <p className="description-text">
                          <h5 className="fw-bold">Innovative Designs</h5>
                          <p>
                            HAMSGL stands out for its innovative designs and
                            fabric patterns. The company embraces various
                            techniques, including Siro/Grindle look quality,
                            space-dyed look melange, inject yarn, and more,
                            ensuring a diverse and appealing product range.
                          </p>
                        </p>
                        <p className="description-text">
                          <h5 className="fw-bold">Children's Wear</h5>
                          <p>
                            HAMSGL caters to the younger demographic with its
                            children's wear collection, featuring comfortable
                            and stylish garments designed for the unique needs
                            of kids.
                          </p>
                        </p>
                        <p className="description-text">
                          <h6 className="text-bold">
                            Here is a list of items that HAMSGL manufactures:
                          </h6>
                          <h5 className="fw-bold">Tops :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>T-shirts</li>
                            <li>Blouses</li>
                            <li>Shirts</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Polo shirts</li>
                            <li>Sweatshirts</li>
                            <li>Hoodies</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Tank tops</li>
                            <li>Tank tops</li>
                            <li>Crop tops</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">Bottoms :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Trousers</li>
                            <li>Leggings</li>
                            <li>Shorts</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Skirts</li>
                            <li>Culottes</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Joggers</li>
                            <li>Pants</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">Knitwear :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Pullovers</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Rompers</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Knitted dresses</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">Dresses :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Casual dresses</li>
                            <li>Formal dresses</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Maxi dresses</li>
                            <li>Shift dresses</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Bodycon dresses</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">Outerwear :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Jackets</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Coats</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Blazers</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">Activewear :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Sportswear</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Athletic apparel</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Workout clothes</li>
                          </ul>
                        </div>
                        <br />

                        <p className="description-text">
                          <h5 className="fw-bold">Children's Wear :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Kids' tops</li>
                            <li>Kids' bottoms</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Children's dresses</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Kidswear sets</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">
                            Undergarments and Lingerie :
                          </h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Bras</li>
                            <li>Panties</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Boxers</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Lingerie sets</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">Nightwear :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Pajama sets</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Nightgowns</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Sleepwear</li>
                          </ul>
                        </div>
                        <br />
                        <p className="description-text">
                          <h5 className="fw-bold">Sustainable Apparel :</h5>
                        </p>

                        <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                          <ul className="col-md-6 col-lg-3">
                            <li>Garments made from recycled materials</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Eco-friendly fabrics</li>
                          </ul>
                          <ul className="col-md-6 col-lg-3">
                            <li>Sustainable fashion pieces</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="fabrication"
                    className="row flex-lg-row flex-column-reverse my-5 mx-lg-3 mx-sm-1"
                  >
                    <div className="">
                      <div className="d-flex">
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                            <h4
                              className="fw-bold"
                              style={{ color: "rgba(255, 97, 0, 1)" }}
                            >
                              Strengths in fabrication
                            </h4>
                            <p className="mb-0 description-text mx-2">
                              HAMSGL offering versatility to meet various market
                              demands by the fabrication process of HAMSGL
                            </p>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 my-top zoom-container">
                            <img
                              src={Product3}
                              className="img-fluid zoomable-image"
                              alt=""
                              srcSet=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="description-text">
                          <h5 className="fw-bold">Fabric Variety</h5>
                          <p>
                            HAMSGL specializes in producing a wide array of
                            fabrics, including 100% Cotton, Cotton blended with
                            modal viscose, tencel, etc.
                          </p>
                          <p>
                            Other fabric options include PC (Polyester-Cotton),
                            CVC (Chief Value Cotton), PV (Polyester-Viscose),
                            Linen, Hemp, and various blends.
                          </p>
                        </div>

                        <div className="description-text">
                          <h5 className="fw-bold">Innovative Designs</h5>
                          <p>
                            The company excels in creating innovative designs
                            and fabric patterns, such as Siro/Grindle look
                            quality, space-dyed look melange, inject yarn, snow
                            effect quality, neppy look, lurex or metallic yarn,
                            and more.
                          </p>
                          <p>
                            Specialized fabrics like viscose melange, dope-dyed
                            melange, and real indigo contribute to a diverse
                            product range.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">Knitting Expertise</h5>
                          <p>
                            HAMSGL has a well-equipped knitting unit with a
                            capacity of 25,000 kgs per day production.
                          </p>
                          <p>
                            The knitting unit features 64 sets of circular
                            knitting machines, producing single jersey, fleece,
                            terry, rib interlock, and other fabric types.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">Dyeing Capabilities</h5>
                          <p>
                            The dyeing and finishing unit covers 70,000 sq. ft
                            and has a production capacity of 30,000 kgs per day
                            for dyeing and 40,000 kgs per day for finishing.
                          </p>
                          <p>
                            The unit is equipped with 28 sets of dyeing machines
                            and 20 sets of finishing machines, ensuring a
                            comprehensive dyeing and finishing process.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">
                            Advanced Knitting Technology
                          </h5>
                          <p>
                            The knitting unit boasts 64 sets of circular
                            knitting machines, producing a variety of fabric
                            types, including single jersey, fleece, rib, and
                            more.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">Sustainability Measures</h5>
                          <p>
                            HAMSGL has incorporated sustainability into its
                            fabric production, as evidenced by its efforts to
                            reduce energy consumption, GHG emissions, and water
                            usage per unit by 2030.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">Capacity Expansion</h5>
                          <p>
                            The company plans to enhance its dyeing, sewing, and
                            storage capacities, signaling a commitment to
                            meeting growing market demands.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">Quality Assurance</h5>
                          <p>
                            HAMSGL follows stringent quality standards,
                            employing a 4-point system for fabric and AQL 1.5
                            for finished garments.
                          </p>
                          <p>
                            The company conducts lab tests with accredited
                            partners such as ITS, SGS, BV, and in-house
                            facilities for fabric and accessory testing.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">Sustainable Fabrics</h5>
                          <p>
                            HAMSGL is well-versed in producing sustainable
                            fabrics, contributing to a responsible and
                            environmentally conscious approach in the fashion
                            industry.
                          </p>
                        </div>
                        <div className="description-text">
                          <p>
                            HAMSGL's strengths in fabric innovation, diverse
                            product offerings, sustainability initiatives, and
                            future-focused expansion plans position it as a
                            formidable player in the textile and garment
                            manufacturing industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="cutting">
                    <div className="row my-5 mx-lg-3 mx-sm-1">
                      <div className="col-md-5 col-lg-5 col-sm-12 my-auto zoom-container">
                        <img
                          src={Product4}
                          className="img-fluid zoomable-image"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                        <h4
                          className="fw-bold"
                          style={{ color: "rgba(255, 97, 0, 1)" }}
                        >
                          Cutting
                        </h4>
                        <p className="mb-0 description-text">Text- Ripon vi</p>
                        <br />
                      </div>
                    </div>
                  </div>

                  <div
                    id="chestPrint"
                    className="row flex-lg-row flex-column-reverse my-5 mx-lg-3 mx-sm-1"
                  >
                    <div className="">
                      <div className="d-flex">
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                            <h4
                              className="fw-bold"
                              style={{ color: "rgba(255, 97, 0, 1)" }}
                            >
                              Chest Print
                            </h4>
                            <p className="mb-0 description-text mx-2">
                              At HAMS, our Placement Printing Section is a
                              testament to our commitment to innovation and
                              quality in garment printing. With a sprawling
                              36,000 sq. ft dedicated to this art, we stand at
                              the forefront of the industry with a production
                              capacity of 1,00,000 p ieces per day.
                            </p>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 my-top zoom-container">
                            <img
                              src={Product7}
                              className="img-fluid zoomable-image"
                              alt=""
                              srcSet=""
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="description-text">
                          <h6 className="fw-bold">Specialized Machinery</h6>
                          <p>
                            Equipped with state-of-the-art manual tables,
                            octopus, and oval type machines, our facility is
                            designed for precision and efficiency in every print
                            we produce.
                          </p>
                        </div>

                        <div className="description-text">
                          <h6 className="fw-bold">Diverse Print Offerings</h6>
                          <p>
                            Our expertise extends across a wide spectrum of
                            prints, including but not limited to:
                          </p>
                        </div>
                        <div className="description-text">
                          <h6 className="fw-bold">
                            Fit and Pattern Adjustments
                          </h6>

                          <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                            <ul className="col-md-6 col-lg-3">
                              <li>Laser Print</li>
                              <li>Pigment Print</li>
                              <li>Rubber Print</li>
                              <li>Puff Print</li>
                              <li>Plastisol Print</li>
                              <li>Glitter Print</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>High-Density Print</li>
                              <li>Silicon Gel Print</li>
                              <li>Photo Print</li>
                              <li>Discharge Print</li>
                              <li>Metallic Print</li>
                              <li>Spray Print</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Engrave Print</li>
                              <li>Foil Print</li>
                              <li>Stone Setting</li>
                              <li>Flock Print</li>
                            </ul>
                          </div>
                        </div>
                        <div className="description-text">
                          <h6 className="fw-bold">Current Nominations</h6>
                          <p>
                            Renowned global brands such as H&M, Puma, Next,
                            Primark, M&S, Pepkor, New look, Kmart, and more have
                            nominated us for their placement print requirements,
                            showcasing the trust they place in our capabilities.
                          </p>
                        </div>
                        <div className="description-text">
                          <h6 className="fw-bold">Quality Beyond Boundaries</h6>
                          <p>
                            With almost three decades of experience, HAMS
                            Fashion Ltd has consistently delivered prints of
                            unparalleled quality. Our chest prints, a focal
                            point in fashion, are crafted with meticulous
                            attention to detail, ensuring that each garment
                            stands out with vibrancy and durability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="embroidery">
                    <div className="row my-5 mx-lg-3 mx-sm-1">
                      <div className="col-md-5 col-lg-5 col-sm-12 my-auto zoom-container">
                        <img
                          src={Product8}
                          className="img-fluid zoomable-image"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                        <h4
                          className="fw-bold"
                          style={{ color: "rgba(255, 97, 0, 1)" }}
                        >
                          Embroidery Unit
                        </h4>
                        <p className="mb-0 description-text my-1">
                          <span className="fw-bold">Location:</span> 10 Thousand
                          Sq. Ft
                        </p>
                        <p className="mb-0 description-text  my-1">
                          <span className="fw-bold">Equipment:</span> 5 sets of
                          Tajima (Japan) Embroidery machines
                        </p>
                        <p className="mb-0 description-text  my-1">
                          <span className="fw-bold">Capacity:</span> 24 Heads
                          per unit, 5 billion stitch capacity per month
                        </p>
                        <p className="mb-0 description-text  my-1">
                          <span className="fw-bold">Production Output:</span>
                          Around 6~7K pcs per day
                        </p>
                        <p className="mb-0 description-text  my-1">
                          <span className="fw-bold">Special Attachments</span>
                          <ui>
                            <li className="mx-3">
                              Sequin device: 4 colour reversible
                            </li>
                            <li className="mx-3">Ap device</li>
                          </ui>
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>

                  <div
                    id="garments"
                    className="row flex-lg-row flex-column-reverse my-5 mx-lg-3 mx-sm-1"
                  >
                    <div className="">
                      <div className="d-flex">
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                            <h4
                              className="fw-bold"
                              style={{ color: "rgba(255, 97, 0, 1)" }}
                            >
                              Garments
                            </h4>
                            <p className="mb-0 description-text mx-2">
                              Text - Ripon vi
                            </p>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 my-top zoom-container">
                            <img
                              src={Product5}
                              className="img-fluid zoomable-image"
                              alt=""
                              srcSet=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="wash">
                    <div className="row my-5 mx-lg-3 mx-sm-1">
                      <div className="col-md-5 col-lg-5 col-sm-12 my-auto zoom-container">
                        <img
                          src={mission}
                          className="img-fluid zoomable-image"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                        <h4
                          className="fw-bold"
                          style={{ color: "rgba(255, 97, 0, 1)" }}
                        >
                          Wash
                        </h4>
                        <p className="mb-0 description-text my-1">
                          In the realm of garment finishing, HAMS Garments takes
                          pride in its comprehensive wash profile, offering a
                          spectrum of techniques that elevate the appeal and
                          character of each garment.
                        </p>
                        <br />
                      </div>

                      <div className="mt-3">
                        <div className="description-text">
                          <h5 className="fw-bold">Distinct Washes</h5>
                          <div>
                            HAMS specializes in a variety of wash techniques,
                            including but not limited to:
                            <ui>
                              <li className="ms-3">
                                <span className="fw-bold">Enzyme Wash:</span>{" "}
                                Achieving a soft and worn-in feel.
                              </li>
                              <li className="ms-3">
                                <span className="fw-bold">Stone Wash:</span>{" "}
                                Creating a vintage, faded appearance.
                              </li>
                              <li className="ms-3">
                                <span className="fw-bold">Acid Wash:</span>{" "}
                                Introducing unique patterns and textures.
                              </li>
                              <li className="ms-3">
                                <span className="fw-bold">Bleach Wash:</span>{" "}
                                Providing a distressed and lived-in look.
                              </li>
                              <li className="ms-3">
                                <span className="fw-bold">Garment Dyeing:</span>
                                Ensuring vibrant and consistent colors.
                              </li>
                            </ui>
                          </div>
                        </div>

                        <div className="description-text">
                          <h5 className="fw-bold">
                            Customization and Innovation
                          </h5>
                          <p>
                            The wash profile at HAMS is not just about processes
                            but a canvas for creativity. Customization is key,
                            allowing clients to tailor wash effects to suit
                            their brand identity. The commitment to innovation
                            means that HAMS continually explores new wash
                            techniques to stay ahead of trends.
                          </p>
                        </div>
                        <div className="description-text">
                          <h5 className="fw-bold">Sustainability Focus</h5>
                          <p>
                            HAMS integrates sustainable practices into its wash
                            profile, using eco-friendly detergents and
                            implementing water-saving measures. The aim is to
                            minimize the environmental impact while maintaining
                            the highest standards of quality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="accreditation"
                    className="row flex-lg-row flex-column-reverse my-5 mx-lg-3 mx-sm-1"
                  >
                    <div className="">
                      <div className="d-flex">
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                            <h4
                              className="fw-bold"
                              style={{ color: "rgba(255, 97, 0, 1)" }}
                            >
                              Overview of accreditation
                            </h4>
                            <div className="mb-0 description-text mx-2">
                              <p>
                                HAMS Group's Textile Lab have accreditations
                                from various organizations for standards related
                                to textile testing and quality assurance.
                              </p>
                              <ui>
                                <li className="m-2">
                                  <span className="fw-bold">
                                    Fiber Analysis:
                                  </span>{" "}
                                  Evaluation of the composition and properties
                                  of textile fibers.
                                </li>
                                <li className="m-2">
                                  <span className="fw-bold">
                                    Yarn Count and Twist Per Inch (TPI):
                                  </span>{" "}
                                  Assessment of yarn characteristics, including
                                  count and twist.
                                </li>
                                <li className="m-2">
                                  <span className="fw-bold">
                                    Fabric Weight:
                                  </span>{" "}
                                  Measurement of fabric density.
                                </li>
                                <li className="m-2">
                                  <span className="fw-bold">
                                    Dimensional Stability:
                                  </span>
                                  Testing fabric's stability during washing and
                                  cleaning processes.
                                </li>
                                <li className="m-2">
                                  <span className="fw-bold">
                                    Color Fastness:
                                  </span>{" "}
                                  Determination of how well fabrics resist
                                  fading or bleeding when exposed to various
                                  conditions.
                                </li>
                              </ui>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 my-top zoom-container">
                            <img
                              src={Product6}
                              className="img-fluid zoomable-image"
                              alt=""
                              srcSet=""
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="description-text">
                          Accreditations from well-known bodies like ITS, SGS,
                          BV, or specific industry standards (e.g., OEKO-TEX)
                          added credibility to the lab's testing capabilities.
                        </p>

                        <div className="description-text">
                          <h6 className="fw-bold">H&M (Hennes & Mauritz)</h6>

                          <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                            <ul className="col-md-6 col-lg-3">
                              <li>Fiber Analysis</li>
                              <li>Yarn Count</li>
                              <li>Twist Per Inch (TPI)</li>
                              <li>Appearance Test</li>
                              <li>Fabrics Weight</li>
                              <li>Dimensional Stability</li>
                              <li>Spirality</li>
                              <li>ICI Pilling</li>
                              <li>Martindale Pilling & Abrasion</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Busting Strength</li>
                              <li>Color Fastness to Wash/Color</li>
                              <li>Cross Staining</li>
                              <li>Saliva</li>
                              <li>Perspiration</li>
                              <li>Rubbing</li>
                              <li>Phenolic Yellowing Appearance</li>
                              <li>After Wash</li>
                              <li>Print Durability</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Embellishment Durability</li>
                              <li>Nickel Test</li>
                              <li>Button Pull Force</li>
                              <li>Stay New</li>
                              <li>Determination of pH Value</li>
                              <li>Extension</li>
                              <li>Modulus</li>
                              <li>Modulus</li>
                            </ul>
                          </div>
                        </div>

                        <div className="description-text">
                          <h6 className="fw-bold">Kmart</h6>

                          <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                            <ul className="col-md-6 col-lg-3">
                              <li>Fiber Analysis</li>
                              <li>Yarn Count</li>
                              <li>Twist Per Inch (TPI)</li>
                              <li>Appearance Test</li>
                              <li>Fabrics Weight</li>
                              <li>Dimensional Stability</li>
                              <li>Spirality</li>
                              <li>ICI Pilling</li>
                              <li>Martindale Pilling & Abrasion</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Busting Strength</li>
                              <li>Color Fastness to Wash/Color</li>
                              <li>Cross Staining</li>
                              <li>Saliva</li>
                              <li>Perspiration</li>
                              <li>Rubbing</li>
                              <li>Phenolic Yellowing Appearance</li>
                              <li>After Wash</li>
                              <li>Print Durability</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Embellishment Durability</li>
                              <li>Nickel Test</li>
                              <li>Button Pull Force</li>
                              <li>Stay New</li>
                              <li>Determination of pH Value</li>
                              <li>Extension</li>
                              <li>Modulus</li>
                              <li>Modulus</li>
                            </ul>
                          </div>
                        </div>

                        <div className="description-text">
                          <h6 className="fw-bold">M&S (Marks & Spencer)</h6>

                          <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                            <ul className="col-md-6 col-lg-3">
                              <li>Fiber Analysis</li>
                              <li>Yarn Count</li>
                              <li>Twist Per Inch (TPI)</li>
                              <li>Appearance Test</li>
                              <li>Fabrics Weight</li>
                              <li>Dimensional Stability</li>
                              <li>Spirality</li>
                              <li>ICI Pilling</li>
                              <li>Martindale Pilling & Abrasion</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Busting Strength</li>
                              <li>Color Fastness to Wash/Color</li>
                              <li>Cross Staining</li>
                              <li>Saliva</li>
                              <li>Perspiration</li>
                              <li>Rubbing</li>
                              <li>Phenolic Yellowing Appearance</li>
                              <li>After Wash</li>
                              <li>Print Durability</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Embellishment Durability</li>
                              <li>Nickel Test</li>
                              <li>Button Pull Force</li>
                              <li>Stay New</li>
                              <li>Determination of pH Value</li>
                              <li>Extension</li>
                              <li>Modulus</li>
                              <li>Modulus</li>
                            </ul>
                          </div>
                        </div>

                        <div className="description-text">
                          <h6 className="fw-bold">NEXT</h6>

                          <div className="col-12 d-flex flex-wrap justify-content-center flex-sm-column flex-lg-row">
                            <ul className="col-md-6 col-lg-3">
                              <li>Fiber Analysis</li>
                              <li>Yarn Count</li>
                              <li>Twist Per Inch (TPI)</li>
                              <li>Appearance Test</li>
                              <li>Fabrics Weight</li>
                              <li>Dimensional Stability</li>
                              <li>Spirality</li>
                              <li>ICI Pilling</li>
                              <li>Martindale Pilling & Abrasion</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Busting Strength</li>
                              <li>Color Fastness to Wash/Color</li>
                              <li>Cross Staining</li>
                              <li>Saliva</li>
                              <li>Perspiration</li>
                              <li>Rubbing</li>
                              <li>Phenolic Yellowing Appearance</li>
                              <li>After Wash</li>
                              <li>Print Durability</li>
                            </ul>
                            <ul className="col-md-6 col-lg-3">
                              <li>Embellishment Durability</li>
                              <li>Nickel Test</li>
                              <li>Button Pull Force</li>
                              <li>Stay New</li>
                              <li>Determination of pH Value</li>
                              <li>Extension</li>
                              <li>Modulus</li>
                              <li>Modulus</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="underGarments">
                    <div className="row my-5 mx-lg-3 mx-sm-1">
                      <div className="col-md-5 col-lg-5 col-sm-12 my-auto zoom-container">
                        <img
                          src={mission}
                          className="img-fluid zoomable-image"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                        <h4
                          className="fw-bold"
                          style={{ color: "rgba(255, 97, 0, 1)" }}
                        >
                          Under Garments
                        </h4>
                        <p className="mb-0 description-text my-1">
                          Text - Repon vi.
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>

                  <div
                    id="etp"
                    className="row flex-lg-row flex-column-reverse my-5 mx-lg-3 mx-sm-1"
                  >
                    <div className="">
                      <div className="d-flex">
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                            <h4
                              className="fw-bold"
                              style={{ color: "rgba(255, 97, 0, 1)" }}
                            >
                              Effluent Treatment Plant
                            </h4>
                            <div className="mb-0 description-text mx-2">
                              <p>
                                At HAMS Garments Limited, the Effluent Treatment
                                Plant (ETP) serves as a pivotal component in the
                                company's commitment to environmental
                                responsibility. This concise overview sheds
                                light on the ETP
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 my-top zoom-container">
                            <img
                              src={section1}
                              className="img-fluid zoomable-image"
                              alt=""
                              srcSet=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="description-text">
                          <h5 className="fw-bold">Innovative Transformation</h5>
                          <p>
                            The ETP has undergone a significant innovation
                            journey, transitioning from a conventional
                            biological system to a more advanced Membrane Bio
                            Reactor (MBR). This forward-looking step places HAMS
                            at the forefront of eco-friendly textile processing.
                          </p>
                        </p>

                        <p className="description-text">
                          <h5 className="fw-bold">Sustainable Milestones</h5>
                          <p>
                            HAMS Garments Limited has set ambitious
                            sustainability goals, targeting a 50% reduction in
                            energy and water consumption per unit by 2030 from
                            the 2020 baseline.
                          </p>
                          <p>
                            The ETP's transition to MBR is a foundational step,
                            aligning with HAMS' commitment to a 40% reduction in
                            greenhouse gas emissions per unit by 2030.
                          </p>
                          <p>
                            In essence, the ETP at HAMS Garments Limited not
                            only ensures compliance with environmental
                            regulations but also propels the company toward a
                            greener and more sustainable future in the textile
                            industry.
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnMore5;
