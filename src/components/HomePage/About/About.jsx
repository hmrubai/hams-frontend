import React, { useRef } from "react";
import './About.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import rectangle16 from '../../../assets/rectangle-16.png';
import award2 from '../../../assets/award2.png';
import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import CountUp from "react-countup";
// import worker from '../../../assets/worker.png';

const About = () => {
    const videoUrl = 'https://www.youtube.com/embed/OaV3ZbXib3M?si=gq74NVZifes7gOqo';

    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
    });
    useEffect(() => {
        if (inView) {
            setCount(29);
        }
    }, [inView]);

    return (
        <div className='container mt-5 d-flex justify-content-center'>
            <div className='row section-height d-flex justify-content-center col-md-10 align-item-center container-sm'>
                <div className='col-lg-5 col-sm-6 col-md-6 my-1'>
                    {/* <img src={rectangle16} alt="" className='img-fluid my-2 ' srcSet="" /> */}
                     <iframe
                                    width="100%"
                                    height="100%"
                                    src={videoUrl}
                                    title="YouTube Video"
                                    frameborder="0"
                                    allowfullscreen
                                ></iframe>
                </div>
                <div className='col-lg-7 col-sm-6 col-md-6 h-75'>
                    <h4 className='secondary-heading'>About HAMS</h4>

                    <h3 className='section-heading-text'>We provide the best textile <br /> solution since 1994</h3>
                    <p className='mb-0 p-1 description-text w-100 w-lg-75 w-md-75 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in quaerat quidem fugiat sapiente aspernatur
                        laudantium excepturi sint, placeat ea itaque, enim rem temporibus quia aliquid tempora!
                    </p>
                    <div className='d-flex mt-3'>
                        <div className='experience dark-background'>
                            <div className='experience-image'>
                                <img src={award2} className='mt-4' alt="" srcSet="" />
                            </div>

                            <div ref={ref}>
                                <CountUp start={0} end={count} duration={2} delay={0} suffix='+'>
                                    {({ countUpRef }) => (
                                        <div className="count-up">
                                            <h4 className='text-white text-center mt-2 mb-0' style={{ fontFamily: 'Roboto' }} ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <p className='text-white text-center' style={{ fontFamily: 'Roboto', fontWeight: '500' }}>Years Experience</p>
                            </div>

                        </div>

                        <div>
                            <ul className='list-style px-3 px-md-1 description-text'>
                                <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Best premium quality</li>
                                <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Long Lasting Durable </li>
                                <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Handcrafted by skilled</li>
                                <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Eco-friendly products</li>
                                <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Durable</li>
                            </ul>
                            {/* <div className='mx-3' style={{ marginTop: '-15px' }}> */}
                            <div className='mx-3' style={{ marginTop: '-15px' }}>
                                <Button className='section-button border-0'>Learn More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;

{/* <div>
            <Row className="container-sm w-75 mx-auto my-5">
                <Col lg={6}>
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <img src={rectangle16} className="img-fluid" alt="" srcSet="" />
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className="my-auto">
                    <h4 className='secondary-heading'>About HAMS</h4>
                    <h3 className='section-heading-text'>We provide the best textile <br /> solution since 1994</h3>
                    <p className='mb-0 py-1 description-text w-100 w-lg-75 w-md-75 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in quaerat quidem fugiat sapiente aspernatur
                        laudantium excepturi sint, placeat ea itaque, enim rem temporibus quia aliquid tempora!
                    </p>
                    <Row className="my-2">
                        <Col lg={4} sm={5} className="bg-dark mx-2">
                            <div className="d-flex justify-content-center my-3">
                                <img src={award2} alt="" className="img-fluid" srcSet="" />
                            </div>
                            <div ref={ref}>
                                <CountUp start={0} end={count} duration={2} delay={0} suffix='+'>
                                    {({ countUpRef }) => (
                                        <div className="count-up">
                                            <h4 className='text-white text-center mt-2 mb-0' style={{ fontFamily: 'Roboto' }} ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <p className='text-white text-center' style={{ fontFamily: 'Roboto', fontWeight: '500' }}>Years Experience</p>
                            </div>
                        </Col>
                        <Col lg={7} sm={5}>
                            <div>
                                <ul className='list-style px-3 px-md-1 description-text'>
                                    <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Best premium quality</li>
                                    <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Long Lasting Durable </li>
                                    <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Handcrafted by skilled</li>
                                    <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Eco-friendly products</li>
                                    <li className="my-1"><AiFillCheckCircle className='list-icon-bg' /> Durable</li>
                                </ul>
                               
                                <Button className="border-0 section-button">Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div> */}