import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation } from "react-router-dom";
import {
  useGetAllPostQuery,
  useGetClientProductQuery,
} from "../../services/post";

function MyVerticallyCenteredModal(props) {
  const res = useGetClientProductQuery(props?.clientId);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="row">
        {res?.currentData?.data?.map((data, i) => (
          <div className="d-flex col-md-3" key={i}>
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${data?.image}`}
              className="p-1 img-fluid"
              alt=""
            />
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
}

const OurClient = () => {
  const [modalShow, setModalShow] = useState(false);
  const [clientId, setClientId] = useState(0);

  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const aboutRes = useGetAllPostQuery();

  const clientObject = aboutRes?.data?.data?.client;
  const clientData = aboutRes?.data?.data?.clientList;

  if (aboutRes.isFetching)
    return (
      <div>
        <div className="spinner-grow" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    );

  if (aboutRes.isError) return <h1>An error occur {aboutRes.error.error}</h1>;

  return (
    <div id="client" className="">
      <div className="bg-Image-Client">
        <div className="container py-5">
          <div className="text-center text-white">
            <h6
              className=""
              style={{
                color: "rgba(255, 255, 255, 1)",
                borderBottom: "3px solid rgba(255, 97, 0, 1)",
                display: "inline",
                paddingBottom: "3px",
              }}
            >
              {clientObject.short_title}
            </h6>
            <h4
              className="pt-4 pb-2"
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              {clientObject.title}
            </h4>
            <div>
              <div className="row mx-auto">
                <div className="col-lg-7 col-sm-12 mx-auto">
                  <p
                    className=""
                    style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  >
                    {clientObject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="row text-center">
              {clientData.map((quality) => (
                <div key={quality.id} className="col-md-4 col-6 p-1">
                  <div className="d-flex flex-column align-items-center p-2">
                    <div className="w-50 shadow-none d-flex justify-content-center">
                      <a
                        href={quality.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${import.meta.env.VITE_IMAGE_URL}/${
                            quality.logo
                          }`}
                          className="img-fluid rounded"
                          style={{ width: "120px", height: "70px" }}
                          alt=""
                        />
                      </a>
                    </div>
                    <Button
                      variant="d-none"
                      className=" shadow-none "
                      onClick={() => {
                        setModalShow(true);
                        setClientId(quality.id);
                      }}
                    >
                      <p className="text-white">{quality.name}</p>
                    </Button>
                  </div>
                </div>
              ))}

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                clientId={clientId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
