import { useState, useEffect } from "react";
import {
  FaCircleUser,
  FaArrowLeft,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useRegisterMutation } from "../../services/post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [register, res] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password,
      company: companyName,
      phone: mobileNumber,
    };
    await register(data);
  };

  useEffect(() => {
    if (res.isSuccess) {
      toast.success(
        "Your Username and Password Successfully Create, Waiting the Admin Approve",
        {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );

      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 6000);

      return () => clearTimeout(timeoutId);
    }
  }, [res, navigate]);

  return (
    <div>
      <div className="justify-content-center">
        <div className="d-flex col-md-12 col-sm-12 col-lg-12 justify-content-center">
          <div className="">
            <ToastContainer />
            <div className="">
              <div className="justify-content-center align-content-center pt-4">
                <div>
                  <div className="login-container">
                    <div className="inputs">
                      <form onSubmit={handleSubmit}>
                        <div className="input">
                          <i>
                            <FaCircleUser className="img" size={25} />
                          </i>
                          <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="input mt-2">
                          <i>
                            <AiOutlineMail className="img" size={25} />
                          </i>
                          <input
                            type="email"
                            placeholder="info@hams.com.bd"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="input mt-2">
                          <i>
                            <RiLockPasswordLine className="img" size={25} />
                          </i>
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div className="input mt-2">
                          <i>
                            <MdWork className="img" size={25} />
                          </i>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="input mt-2">
                          <i>
                            <FaMobileScreenButton className="img" size={25} />
                          </i>
                          <input
                            type="text"
                            placeholder="Contact Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                          />
                        </div>

                        <div className="submit-container">
                          <button type="submit" className="submit">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="text-center mt-3 mb-5">
                      <span>
                        <FaArrowLeft className="" size={15} />
                        <Link to="/" className="px-1 fw-bolder">
                          Go back to Home Page
                        </Link>
                      </span>
                    </div>
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

export default Signup;
