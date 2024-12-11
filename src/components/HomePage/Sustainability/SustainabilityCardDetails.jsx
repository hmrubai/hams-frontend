import { React } from "react";
import SustainabilityCover from "../../../assets/otherPageCover/sustainability.jpg";
import "./Sustainability.css";

import Achievements from "../../../assets/AllPhotoFinal/SustainabilityRoute/Achievements&impact.jpg";
import AntiHarassment from "../../../assets/AllPhotoFinal/SustainabilityRoute/socialresponsibility2.jpg";
import EthicalPractices from "../../../assets/AllPhotoFinal/SustainabilityRoute/Ethical-Business-Practices.jpg";
import FemaleEmpowermen from "../../../assets/AllPhotoFinal/SustainabilityRoute/socialresponsibility1.jpg";
import ReducingImpact1 from "../../../assets/AllPhotoFinal/SustainabilityRoute/Reducing-Environmental-Impact-1.jpg";
import ReducingImpact2 from "../../../assets/AllPhotoFinal/SustainabilityRoute/Reducing-Environmental-Impact-2.jpg";
import ReducingImpact3 from "../../../assets/AllPhotoFinal/SustainabilityRoute/Reducing-Environmental-Impact-3.jpg";
import ReducingImpact4 from "../../../assets/AllPhotoFinal/SustainabilityRoute/Reducing-Environmental-Impact-4.jpg";
import ReductionCarbon from "../../../assets/AllPhotoFinal/SustainabilityRoute/Reduction-Carbon-Emissions.jpg";
import CommunityEngagement from "../../../assets/AllPhotoFinal/SustainabilityRoute/Sustainability22.png";
import Mus from "../../../assets/AllPhotoFinal/SustainabilityRoute/Innovationssustainablepractices.jpg";

const SustainabilityCardDetails = () => {
  return (
    <>
      <img
        className="img-fluid my-3 rounded"
        src={SustainabilityCover}
        alt=""
      />

      <div className="container text-center my-3">
        <h5 className="using-title-font">HAMS Garments Limited</h5>
        <h5 className="text-bold fs-4 my-3 using-title-font">
          A Commitment to Sustainability
        </h5>
      </div>
      <div className="border-top border-1"></div>
      <div className="container my-3 text-justify ">
        <p className="my-2">
          <span className="fw-bold">Introduction:</span> HAMS Garments Limited
          (HAMSGL) is a prominent player in the textile and garment
          manufacturing industry, renowned not only for its high-quality
          products but also for its unwavering commitment to sustainability.
          This case study delves into HAMSGL's sustainability promises,
          highlighting key initiatives, achievements, and the impact on both the
          environment and the community.
        </p>
        <p className="my-3">
          <span className="fw-bold">Sustainability Goals:</span>HAMSGL has set
          ambitious sustainability goals, aligning with global standards and
          industry best practices. The goals encompass various facets of
          sustainability, including environmental conservation, social
          responsibility, and ethical business practices.
        </p>
      </div>

      <div className="container my-3">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4 mb-3 justify-content-center align-content-center">
                <h5 className="fw-bold my-3 text-end using-title-font">
                  Reducing Environmental Impact
                </h5>
                <p className="text-justify">
                  <span className="fw-bold">Waste Management:</span>HAMSGL
                  actively manages and reduces waste through innovative
                  initiatives. A prime example is the implementation of a
                  Circular Value Chain, aiming to minimize the environmental
                  footprint associated with production processes.
                </p>
                <p className="my-3 text-justify">
                  <span className="fw-bold">Energy Efficiency:</span>
                  Installation of energy-efficient boilers and the incorporation
                  of Variable Frequency Drives (VFDs) in Water Treatment Plants
                  (WTP) and Effluent Treatment Plants (ETP) demonstrate HAMSGL's
                  commitment to reducing energy consumption.
                </p>
                <p className="text-justify">
                  <span className="fw-bold">Water Conservation:</span> The
                  company has successfully reduced water consumption per unit,
                  implementing rainwater harvesting systems, and exploring
                  innovative methods like reusing the last wash-off bath in the
                  dyeing process.
                </p>
              </div>
              <div className="col-md-4 p-3 gap-3">
                <div className="py-2">
                  <img
                    src={ReducingImpact1}
                    className="img-fluid rounded"
                    style={{ width: "400px", height: "250px" }}
                  />
                </div>
                <div className="py-2 d-none d-md-block">
                  <img
                    src={ReducingImpact2}
                    className="img-fluid rounded d-none d-md-block"
                    style={{ width: "400px", height: "250px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 p-3  gap-3 d-none d-md-block">
                <div className="py-2">
                  <img
                    src={ReducingImpact3}
                    className="img-fluid rounded d-none d-md-block"
                    style={{ width: "400px", height: "250px" }}
                  />
                </div>
                <div className="py-2">
                  <img
                    src={ReducingImpact4}
                    className="img-fluid rounded d-none d-md-block"
                    style={{ width: "400px", height: "250px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <h5 className="fw-bold my-3 text-start using-title-font">
                Social Responsibility
              </h5>
              <div className="col-md-6">
                <div className="py-2">
                  <div className="photo-text-sustainability">
                    <div className="text-justify  photo-text-overlay-sustainability">
                      <p className="fw-bolder mx-3">
                        <span className="fw-bold">Female Empowerment: </span>
                        HAMSGL is actively promoting gender diversity,
                        particularly in supervisory roles. Through training
                        programs and collaborations with external projects like
                        the Gear Project, the company is fostering a more
                        inclusive and diverse workforce.
                      </p>
                    </div>
                    <img
                      src={FemaleEmpowermen}
                      className="img-fluid rounded"
                      style={{ width: "800px", height: "400px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="py-2">
                  <div className="photo-text-sustainability">
                    <div className="text-justify  photo-text-overlay-sustainability">
                      <p className="fw-bolder mx-3">
                        <span className="fw-bold">
                          Anti-Harassment Initiatives:
                        </span>{" "}
                        To create a safe and respectful workplace, HAMSGL has
                        formed Anti-Harassment Committees, aligning with court
                        verdicts and undergoing training with industry leaders
                        like H&M. Awareness campaigns through various channels
                        reinforce their commitment to a harassment-free
                        environment.
                      </p>
                    </div>
                    <img
                      src={AntiHarassment}
                      className="img-fluid rounded"
                      style={{ width: "800px", height: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold my-2">Ethical Business Practices</h5>
                <div className="photo-text-sustainability">
                  <div className="text-justify  photo-text-overlay-sustainability">
                    <p className="fw-bolder mx-3">
                      <span className="fw-bold">
                        Compliance Certifications:
                      </span>{" "}
                      HAMSGL holds several certifications, including ACCORD, RMG
                      Sustainability Council (RSC), Sedex, WRAP, Higg Index, and
                      BSCI. These certifications validate the company's
                      adherence to ethical, social, and environmental standards.
                    </p>
                  </div>
                  <img
                    src={EthicalPractices}
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold my-2 using-title-font">
                  Achievements and impact
                </h5>
                <div className="photo-text-sustainability">
                  <div className="text-justify  photo-text-overlay-sustainability">
                    <p className="fw-bolder mx-3">
                      HAMSGL has made significant strides in its sustainability
                      journey, leading to positive outcomes
                    </p>
                  </div>
                  <img
                    src={Achievements}
                    className="img-fluid rounded"
                    style={{ width: "600px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold my-2 using-title-font">
                  Reduction in Carbon Emissions
                </h5>
                <div className="photo-text-sustainability">
                  <div className="text-start photo-text-overlay-sustainability text-justify">
                    <p className="fw-bolder mx-3">
                      By investing in energy-efficient machinery and modifying
                      processes, HAMSGL has achieved a noteworthy reduction in
                      carbon emissions, contributing to a greener and more
                      sustainable future.
                    </p>
                  </div>
                  <img
                    src={ReductionCarbon}
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
        <h5 className="fw-bolder using-title-font">Community Engagement</h5>
      </div>
      <div className="photo-text-sustainability">
        <div className="photo-text-overlay-sustainability">
          <p className="fs-5 fw-bolder mx-5">
            Collaborative projects with external entities, such as the Gear
            Project and PACT-II, showcase HAMSGL's commitment to engaging with
            the community and addressing broader industry challenges.
          </p>
        </div>
        <img
          src={CommunityEngagement}
          alt=""
          className="img-fluid d-none d-md-block h-100 w-100"
        />
        <img
          src={CommunityEngagement}
          alt="Knitting Unit"
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      <div className="challenge-Innovation">
        <div className="row my-3 ps-5 pe-3">
          <div className="col-12">
            <div className="row text-justify">
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-3">
                <h5 className="fw-bolder using-title-font">
                  Employee Satisfaction
                </h5>
                <p className="">
                  The company's emphasis on gender diversity, anti-harassment
                  measures, and ethical business practices has led to a more
                  inclusive workplace, fostering higher employee satisfaction
                  and commitment.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-3">
                <h5 className="fw-bolder using-title-font">
                  Challenges and Future steps
                </h5>
                <p className="">
                  Despite the commendable progress, HAMSGL acknowledges
                  challenges and envisions future steps to enhance
                  sustainability
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 px-3 my-3">
                <h5 className="fw-bolder using-title-font">
                  Continuous Improvement
                </h5>
                <p className="">
                  HAMSGL aims to stay aligned with global indices and improve
                  Year-over-Year (YoY). Regular audits, performance monitoring,
                  and collaboration with industry experts form part of the
                  continuous improvement strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h3 className="fw-bolder fs-3 using-title-font">
          Innovations and sustainable practices
        </h3>
      </div>
      <div className="photo-text-sustainability">
        <div className="photo-text-overlay-sustainability">
          <p className="fs-5 fw-bolder mx-5">
            The company is investing in research and development to explore
            innovative materials and processes, ensuring sustainability remains
            at the forefront of its business operations.
          </p>
        </div>

        <img
          src={Mus}
          alt=""
          className="img-fluid d-none d-md-block"
          style={{ width: "100%", height: "500px" }}
        />

        <img
          src={Mus}
          className="img-fluid d-block d-md-none"
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      <div className="container my-3 text-center">
        <h5 className="fw-bolder using-title-font">Conclusion</h5>
        <p className="my-2 text-justify text-center">
          HAMS Garments Limited stands as a beacon of sustainability in the
          textile and garment industry. Through a combination of strategic
          goals, practical initiatives, and a commitment to ethical and social
          responsibilities, HAMSGL not only meets industry standards but also
          sets new benchmarks for others to follow. The case of HAMSGL serves as
          an inspiring example of how sustainability can be ingrained into the
          core of business operations, driving positive change for the company,
          its stakeholders, and the environment.
        </p>

        <a
          href="https://drive.google.com/file/d/1101THNZVfEFrgvQvCehQLfZxRJkaFqae/view?usp=sharing"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn fw-bold my-3"
          style={{ background: "rgb(255, 97, 0)", color: "rgb(255, 255, 255)" }}
        >
          Download PDF
        </a>
      </div>
    </>
  );
};

export default SustainabilityCardDetails;
