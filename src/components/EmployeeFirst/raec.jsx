import React from "react";
import RecognitionAppreciation from "../../assets/AllAssets/EmployeeFirst/Recognition&Appreciation.jpg";
import EmployeeFeedback from "../../assets/AllAssets/EmployeeFirst/Employee-Feedback&Collaboration.jpg";
import "./Employee.css";

const raec = () => {
  return (
    <>
      <div className="container my-2">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">Recognition and Appreciation</h5>
                <div className="photo-text-position-employee">
                  <div className="photo-text-overlay-employee text-justify">
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
                    // style={{ height: "400px", width: "800px" }}
                    style={{ height: "500px", width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-md-5 py-2 px-4">
                <h5 className="fw-bold my-2">
                  Employee Feedback & Collaboration
                </h5>
                <div className="photo-text-position-employee">
                  <div className="photo-text-overlay-employee text-justify">
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
                    // style={{ height: "400px", width: "800px" }}
                    style={{ height: "500px", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Summary... Of Employee First */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 text-justify">
            <p>
              In HAMSGL, the thread that runs through every success,
              achievement, and milestone is the well-being, empowerment, and
              satisfaction of its employees. It's a story of a company that
              understands that its greatest asset is not the machinery or the
              products it creates but the individuals who bring passion, skill,
              and dedication to their work every day. At HAMSGL, putting
              employees first isn't just a strategy; it's the very fabric that
              binds the success and sustainability of the company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default raec;
