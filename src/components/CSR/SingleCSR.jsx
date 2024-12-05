import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GoHorizontalRule } from 'react-icons/go';

const SingleCSR = ({service}) => {
    const {id,line1, line2, line3, line4, image,} = service;
    return (
            <div className={`row my-5 mx-lg-3 mx-sm-1 flex-column-reverse ${id % 2 !== 0 ? "flex-lg-row " : "flex-lg-row-reverse"}`}>
                  <div className="col-lg-7 col-md-7 col-sm-12 my-auto">
                    <ul className="list-unstyled">
                      <li className="my-2 d-flex align-items-center">
                        <AiFillCheckCircle className="me-1 check-icon" />
                        <span className="description-text">
                          {line1}
                        </span>
                      </li>
                      <li className="my-2 d-flex align-items-center">
                        <AiFillCheckCircle className="me-1 check-icon" />
                        <span className="description-text">
                          {line2}
                        </span>
                      </li>
                      <li className="my-2 d-flex align-items-center">
                        <AiFillCheckCircle className="me-1 check-icon" />
                        <span className="description-text">
                        {line3}
                        </span>
                      </li>
                      { line4.length >0 && <li className="my-2 d-flex align-items-center">
                        <AiFillCheckCircle className="me-1 check-icon" />
                        <span className="description-text">
                        {line4}
                        </span>
                      </li>}
                    </ul>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 my-auto zoom-container">
                    <img
                      src={image}
                      className="img-fluid zoomable-image"
                      alt=""
                      srcSet=""
                    />
                  </div>
                </div>
    );
};

export default SingleCSR;