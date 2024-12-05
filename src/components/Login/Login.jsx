import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useLoginMutation } from "../../services/post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("hams@gmail.com");
  const [password, setPassword] = useState("12345");
  const [login, res] = useLoginMutation();

  useEffect(() => {
    if (res.isSuccess) {
      const user = JSON.stringify(res?.data?.data);
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {},
        onClose: () => {
          localStorage.setItem("HAMS-TOKEN", res?.data?.data?.token);
          localStorage.setItem("HAMS-USER", user);
          setEmail("");
          setPassword("");

          setTimeout(() => {
            navigate("/");
          }, 3000);
        },
      });
    } else if (res && res.status === "rejected") {
      toast.error(res.error?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [res, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    await login(data);
  };

  return (
    <div>
      <div className="justify-content-center">
        <div className="d-flex col-md-12 col-sm-12 col-lg-12 justify-content-center">
          <ToastContainer />
          <div className="">
            {/* col-md-5 col-sm-12 */}
            <div className="">
              <div className="justify-content-center align-content-center pt-4">
                <div>
                  <div className="login-container">
                    <div className="inputs">
                      <form onSubmit={handleSubmit}>
                        <div className="input">
                          <i>
                            <AiOutlineMail
                              className="img"
                              size={25}
                            ></AiOutlineMail>
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
                            <RiLockPasswordLine
                              className="img"
                              size={25}
                            ></RiLockPasswordLine>
                          </i>
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

export default Login;
