import React from 'react';
import './ProductDetails.css';
import productDetailsHeroImage from '../../assets/producct-details/producctDetailsHeroImage.png';
import section1 from '../../assets/producct-details/section1.png';

const ProductDetails = () => {
    return (
        <div>
            <section>
                <img src={productDetailsHeroImage} className='img-fluid' alt="" srcset="" />
            </section>
            <section className='container my-5' style={{ maxWidth: '1000px' }}>
                <div className="row">
                    <dir className="col-4">
                        <img src={section1} className='img-fluid' alt="" />
                    </dir>
                    <div className="col-8"></div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;