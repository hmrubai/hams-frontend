import React from "react";
import EmployeeFeedback from "../../assets/AllPhotoFinal/EmplyeeFirst/Employee-Feedback&Collaboration.jpg";
import EmployeeSafetyWell from "../../assets/AllPhotoFinal/EmplyeeFirst/Employee-Safety&Well-being.jpg";
import HolisticWell from "../../assets/AllPhotoFinal/EmplyeeFirst/HolisticWellbeing1.jpg";
import WorkCulture from "../../assets/AllPhotoFinal/EmplyeeFirst/InclusiveWorkCulture1.jpg";
import RecognitionAppreciation from "../../assets/AllPhotoFinal/EmplyeeFirst/Recognition&Appreciation.jpg";
import DevelopmentEmpowerment from "../../assets/AllPhotoFinal/EmplyeeFirst/Skill-Development&Empowerment.jpg";
import EmployeeFirstCover from "../../assets/otherPageCover/employeeFirst.jpg";
import "./CertificationDetails.css";
const CertificationDetails = () => {
  return (
    <>
      <img className="img-fluid my-2 rounded" src={EmployeeFirstCover} alt="" />

      <div className="container col-9 text-center py-3">
        <h5>Impact Story: Putting Employees First at HAMS Garments Limited</h5>
        <p className="text-center text-justify">
          In the bustling world of textile manufacturing, HAMS Garments Limited
          (HAMSGL) stands out not just for its fabric and fashion but for a
          profound commitment to placing its employees at the forefront.
        </p>
      </div>

      <div className="row d-flex my-2 mx-2">
        <div className="col-md-4 p-0 m-0">
          <div className="photo-text-position-emplyee">
            <div className="photo-text-overlay-emplyee text-justify">
              <p className="text-wrap">
                <span className="fw-bold">Holistic Well-being</span> <br />
                HAMSGL holds several certifications, including ACCORD, RMG
                Sustainability Council (RSC), Sedex, WRAP, Higg Index, and BSCI.
                These certifications validate the company's adherence to
                ethical, social, and environmental standards.
              </p>
            </div>
            <img
              src={HolisticWell}
              className="img-fluid rounded"
              style={{ width: "600px", height: "612px" }}
            />
          </div>
        </div>
        <div className="col-md-8 p-1 m-0">
          <div className="photo-text-position-emplyee">
            <div className="photo-text-overlay-emplyee text-justify">
              <p className="text-wrap">
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
              style={{ width: "1200px", height: "600px" }}
            />
            <img
              src={WorkCulture}
              className="img-fluid rounded d-md-block d-none"
              style={{ width: "1200px", height: "300px" }}
              alt="Work Culture"
            />
          </div>
          <div className="d-flex pt-1">
            <div className="col-md-6 col-sm-6 pe-1">
              <div className="photo-text-position-emplyee">
                <div className="photo-text-overlay-emplyee text-justify">
                  <p className="text-wrap">
                    <span className="fw-bold">
                      Skill Development and Empowerment
                    </span>{" "}
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
                  style={{ width: "600px", height: "800px" }}
                />
                <img
                  src={DevelopmentEmpowerment}
                  className="img-fluid rounded d-md-block d-none"
                  style={{ width: "600px", height: "300px" }}
                  alt="Work Culture"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="photo-text-position-emplyee">
                <div className="photo-text-overlay-emplyee text-justify">
                  <p className="text-wrap">
                    <span className="fw-bold">
                      Employee Safety and Well-being
                    </span>
                    <br />
                    HAMSGL goes beyond mere compliance with safety regulations;
                    it prioritizes a culture of safety and well-being. Stringent
                    safety protocols, regular training sessions, and a proactive
                    approach to identifying and mitigating potential risks
                    ensure that employees can focus on their work with the
                    confidence that their safety is paramount.
                  </p>
                </div>
                <img
                  src={EmployeeSafetyWell}
                  className="img-fluid rounded d-md-none"
                  style={{ width: "600px", height: "800px" }}
                />
                <img
                  src={EmployeeSafetyWell}
                  className="img-fluid rounded d-md-block d-none"
                  style={{ width: "600px", height: "300px" }}
                  alt="Work Culture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-2">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">Recognition and Appreciation</h5>
                <div className="photo-text-position-emplyee">
                  <div className="photo-text-overlay-emplyee text-justify">
                    <p className="text-wrap">
                      Acknowledging the hard work and dedication of employees is
                      ingrained in the HAMSGL culture. Regular recognition
                      programs, employee of the month awards, and platforms that
                      celebrate achievements create a positive and motivating
                      work environment. The impact is evident in the high
                      morale, job satisfaction, and a sense of pride that
                      employees feel in being associated with HAMSGL.
                    </p>
                  </div>
                  <img
                    src={RecognitionAppreciation}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">
                  Employee Feedback & Collaboration
                </h5>
                <div className="photo-text-position-emplyee">
                  <div className="photo-text-overlay-emplyee text-justify">
                    <p className="text-wrap">
                      HAMSGL recognizes that the best insights often come from
                      those on the front lines. The company actively seeks and
                      values employee feedback, fostering a culture of open
                      communication and collaboration. Employees aren't just
                      contributors to the production line; they are partners in
                      shaping the company's future. This collaborative spirit
                      has a profound impact on innovation, problem-solving, and
                      overall organizational resilience. 
                    </p>
                  </div>
                  <img
                    src={EmployeeFeedback}
                    className="img-fluid rounded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-start d-flex justify-content-center align-items-center text-justify">
        <p className="w-75">
          In HAMSGL, the thread that runs through every success, achievement,
          and milestone is the well-being, empowerment, and satisfaction of its
          employees. It's a story of a company that understands that its
          greatest asset is not the machinery or the products it creates but the
          individuals who bring passion, skill, and dedication to their work
          every day. At HAMSGL, putting employees first isn't just a strategy;
          it's the very fabric that binds the success and sustainability of the
          company.
        </p>
      </div>
    </>
  );
};

export default CertificationDetails;
