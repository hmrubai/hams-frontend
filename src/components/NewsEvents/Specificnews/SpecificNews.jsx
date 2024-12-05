import React from 'react';
import rightArrow from '../../../assets/right-arrow.png';
import eventImage1 from '../../../assets/newsEventSection/eventImage1.png';
import SideBar from '../../Shared/SideBar/SideBar';
import image43 from '../../../assets/image43.png';
import './SpecificNews.css';

const SpecificNews = () => {
    const sideSectionColor = 'rgba(246, 246, 246, 1)';
    return (
        <div>
            <section className='news-events-section-bg-image d-flex flex-column justify-content-center align-items-center'>
                <div className="d-flex flex-column align-items-center">
                </div>
                <h1 className='text-white text-center'>Do Well, Live Well & <br />
                    <span className='hero-text'>Dress</span> Very Well</h1>
                <div className='d-flex'>
                    <p className='text-white mb-0 mx-2'>Home</p>
                    <img src={rightArrow} className='mx-2' alt="" srcSet="" />
                    <p className='text-white mb-0 mx-2'>Company</p>
                </div>
            </section>
            <section className='my-5 container-sm'>
                <div className="row news-container mx-auto">

                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <h5 className='specific-news-heading'>
                            Unveiling the Latest Garment Trends at Fashion Forward 2023
                        </h5>
                        <div className='col-lg-10 col-md-10 col-sm-12'>
                            <p className='description-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className='specific-news-heading description-text'>July,23,2023</p>
                            <img src={eventImage1} className='w-100' alt="" srcSet="" />
                            <p className='description-text my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat
                                e velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className='description-text'>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>

                            <p className='description-text'>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur aliquip ex ea commodo.
                            </p>

                            <div className="row">
                                <div className="col-lg-7">
                                    <img src={image43} className='img-fluid' alt="" srcSet="" />
                                </div>
                                <div className="col-lg-5">
                                    <div className="">
                                        <p className='description-text'>
                                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur aliquip ex ea commodo.nulla pariatur aliquip ex ea commodo.nulla pariatur aliquip ex
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className='description-text'>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur aliquip ex ea commodo.
                            </p>

                            <p className='description-text'>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur aliquip ex ea commodo.
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12 my-3 w-lg-100" style={{ backgroundColor: sideSectionColor }}>

                        <SideBar />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpecificNews;