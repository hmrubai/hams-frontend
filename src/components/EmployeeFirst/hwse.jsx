import React from "react";
import HolisticWell from "../../assets/AllAssets/EmployeeFirst/HolisticWellbeing.jpg";
import WorkCulture from "../../assets/AllAssets/EmployeeFirst/Inclusive-Work-Culture.jpg";
import DevelopmentEmpowerment from "../../assets/AllAssets/EmployeeFirst/Skill-Development&Empowerment.jpg";
import EmployeeSafetyWell from "../../assets/AllAssets/EmployeeFirst/Employee-Safety&Well-being.jpg";
import "./Employee.css";

const hwse = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row g-3">
        <div className="col-md-4 col-sm-12">
          <div className="photo-text-position-employee">
            <div className="photo-text-overlay-employee">
              <p className="text-wrap text-justify">
                <span className="fw-bold">Holistic Well-being</span> <br />
                HAMSGL holds several certifications, including ACCORD, RMG
                Sustainability Council (RSC), Sedex, WRAP, Higg Index, and BSCI.
                These certifications validate the company's adherence to
                ethical, social, and environmental standards.
              </p>
            </div>
            <img
              src={HolisticWell}
              className="img-fluid rounded d-md-none"
              // style={{ width: "1200px", height: "600px" }}
              style={{ width: "1200px", height: "400px" }}
              alt="Holistic Well-being"
            />
            <img
              src={HolisticWell}
              className="img-fluid rounded d-md-block d-none"
              style={{ width: "600px", height: "965px" }}
              alt="Holistic Well-being"
            />
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="photo-text-position-employee">
            <div className="photo-text-overlay-employee">
              <p className="text-wrap text-justify">
                <span className="fw-bold">Inclusive Work Culture</span> <br />
                The impact of HAMSGL's commitment to an inclusive work culture
                reverberates through the diverse voices that shape the company.
                The deliberate effort to foster diversity and eliminate
                discrimination ensures that every employee, regardless of
                gender, background, or role, feels an integral part of the
                HAMSGL family. Inclusivity isn't a buzzword at HAMSGL; it's the
                cornerstone of their organizational DNA.
              </p>
            </div>
            <img
              src={WorkCulture}
              className="img-fluid rounded d-md-none"
              // style={{ width: "1200px", height: "600px" }}
              style={{ width: "1200px", height: "400px" }}
              alt="Inclusive Work Culture Images"
            />
            <img
              src={WorkCulture}
              className="img-fluid rounded d-md-block d-none"
              style={{ width: "1200px", height: "500px" }}
              alt="Inclusive Work Culture Images"
            />
          </div>
          <div className="row g-1 my-1">
            <div className="col-md-6 col-sm-12">
              <div className="photo-text-position-employee">
                <div className="photo-text-overlay-employee">
                  <p className="text-wrap text-justify">
                    <span className="fw-bold">
                      Skill Development and Empowerment
                    </span>
                    <br />
                    Training programs, mentorship opportunities, and avenues for
                    professional development empower employees to hone their
                    skills and climb the career ladder within the organization.
                    The impact is not just seen in individual career
                    trajectories but in the collective expertise that elevates
                    the entire company.
                  </p>
                </div>
                <img
                  src={DevelopmentEmpowerment}
                  className="img-fluid rounded d-md-none"
                  // style={{ width: "600px", height: "800px" }}
                  style={{ width: "600px", height: "400px" }}
                  alt="Skill Development and Empowerment Images"
                />
                <img
                  src={DevelopmentEmpowerment}
                  className="img-fluid rounded d-md-block d-none"
                  // style={{ width: "600px", height: "300px" }}
                  style={{ width: "600px", height: "450px" }}
                  alt="Skill Development and Empowerment Images"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="photo-text-position-employee">
                <div className="photo-text-overlay-employee">
                  <p className="text-wrap text-justify">
                    <span className="fw-bold">
                      Employee Safety and Well-being
                    </span>
                    <br />
                    HAMSGL goes beyond mere compliance with safety regulations;
                    it prioritizes a culture of safety and well-being.Stringent
                    safety protocols, regular training sessions, and a proactive
                    approach to identifying and mitigating potential risks
                    ensure that employees can focus on their work with the
                    confidence that their safety is paramount.
                  </p>
                </div>
                <img
                  src={EmployeeSafetyWell}
                  className="img-fluid rounded d-md-none"
                  // style={{ width: "600px", height: "800px" }}
                  style={{ width: "600px", height: "400px" }}
                  alt="Employee Safety and Well-being Images"
                />
                <img
                  src={EmployeeSafetyWell}
                  className="img-fluid rounded d-md-block d-none"
                  // style={{ width: "600px", height: "300px" }}
                  style={{ width: "600px", height: "450px" }}
                  alt="Employee Safety and Well-being Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hwse;
