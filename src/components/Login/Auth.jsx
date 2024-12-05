import LoginPhoto from "../../assets/loginPhoto (Custom).png";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/hamslogo.png";
import "./Login.css";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="">
        <div className="">
          <div className="d-flex col-md-12 col-sm-12 col-lg-12 justify-content-center">
            <div className="col-md-7 d-none d-md-block">
              <div className="">
                <img
                  className="img-fluid w-100"
                  style={{ height: "100vh" }}
                  src={LoginPhoto}
                  alt=""
                />
              </div>
            </div>

            <div className="mobile col-md-5 col-sm-12 overflow-scrollable">
              <div className="">
                <div className="justify-content-center align-content-center p-2 mt-5">
                  <div className="text-center fs-bold">
                    <img src={Logo} className="w-25 h-25" alt="" />
                  </div>
                  <div className="">
                    <Nav
                      variant="underline"
                      className="justify-content-center"
                      defaultActiveKey=""
                    >
                      <Nav.Item>
                        <Nav.Link
                          onClick={() => handleTabClick("login")}
                          active={activeTab === "login"}
                          className={`py-2 px-5 fw-bold m-2 ${
                            activeTab === "login" ? "btn-primary" : ""
                          }`}
                          style={{
                            background:
                              activeTab === "login"
                                ? "rgba(255, 97, 0, 1)"
                                : "white",
                            color: activeTab === "login" ? "white" : "black",
                          }}
                        >
                          Login
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          onClick={() => handleTabClick("singup")}
                          active={activeTab === "singup"}
                          className={`py-2 px-5 fw-bold m-2 ${
                            activeTab === "singup" ? "btn-primary" : ""
                          }`}
                          style={{
                            backgroundColor:
                              activeTab === "singup"
                                ? "rgba(255, 97, 0, 1)"
                                : "white",
                            color: activeTab === "singup" ? "white" : "black",
                          }}
                        >
                          SignUp
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {activeTab === "login" && (
                      <div>
                        <Login></Login>
                      </div>
                    )}
                    {activeTab === "singup" && (
                      <div>
                        <Signup></Signup>
                      </div>
                    )}
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

export default Auth;
