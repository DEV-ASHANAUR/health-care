import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='bg-banner'>
            <div className="overly">
                <div className="container">
                    <h4 className='text-uppercase text-white'>The Best Medical Center</h4>
                    <h1 className='my-3' style={{fontWeight:'700'}}>Best Care And Better Doctor</h1>
                    <p className='head-description'>In healthcare sector, service excellence is the facility of  the hospital as healthcare service provider to consistently.</p>
                    <button className='discover-btn'>Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;