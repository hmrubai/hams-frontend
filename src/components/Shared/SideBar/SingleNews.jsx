import React from 'react';

const SingleNews = ({singleNews}) => {
    const {id,heading,date,image} = singleNews;

    return (
        <div className='d-flex my-3'>
            <div>
                <img src={image} alt="" className='img-fluid' />
            </div>
            <div className='mx-2'>
                <p className='mb-0 description-text'>{date}</p>
                <h6 className='my-2'>
                    {heading}
                </h6>
            </div>
        </div>
    );
};

export default SingleNews;