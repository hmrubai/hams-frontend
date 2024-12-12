import React from "react";
import FemaleEmpowermen from "../../assets/AllAssets/GoingGreen/SocialResponsibility/socialresponsibility1.jpg";
import AntiHarassment from "../../assets/AllAssets/GoingGreen/SocialResponsibility/socialresponsibility2.jpg";
import "./GoingGreen.css";
const socialResponsibility = () => {
  return (
    <>
      <div className="container my-4">
        <div className="rows d-flex">
          <div className="col-12">
            <div className="row">
              <h5 className="fw-bold my-3 text-start">Social Responsibility</h5>
              <div className="col-md-6">
                <div className="py-2">
                  <div className="photo-text-sustainability">
                    <div className="text-justify photo-text-overlay-sustainability">
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
                      alt="Female Empowerment Image"
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
                        </span>
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
                      alt="Anti-Harassment Initiatives Image"
                    />
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

export default socialResponsibility;
