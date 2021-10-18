import React from 'react';
import './OurSpeciality.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import spaciality from '../../assets/specailty.jpg';
const OurSpeciality = () => {
    return (
        <div className='container my-5'>
            <SectionHeading>Our Speciality</SectionHeading>
            <div className="row py-4">
                <div className="col-md-6">
                    <img src={spaciality} className='img-fluid img-thumbnail' alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className='text-center'><span className='border-bottom border-primary border-3'>Why</span> You Choose Us</h3>
                    <div className='my-5'>
                        <h6 className='type-heading'>Clinical Excellence</h6>
                        <p className='type-desc'>We are committed to delivering medical solutions for even the most difficult cases for the benefit of patients from around the world.</p>
                    </div>
                    <div className='my-5'>
                        <h6 className='type-heading'>Cutting-edge Technologies</h6>
                        <p className='type-desc'>We provide a hospital experience at par with global standards using cutting-edge technologies for invasive as well as non-invasive treatments.</p>
                    </div>
                    <div className='my-5'>
                        <h6 className='type-heading'>Personalized Care</h6>
                        <p className='type-desc'>Providing personalized care for the most comfortable healthcare experience is the very culture of Continental Hospitals.</p>
                    </div>
                    <div className='my-5'>
                        <h6 className='type-heading'>Experienced team</h6>
                        <p className='type-desc'>Our commitment is to deliver the best in healthcare to patients from anywhere in the world. We pride ourselves on having given a new lease of life to numerous international patients.</p>
                    </div>
                    <div className='my-5'>
                        <h6 className='type-heading'>Quality Standards</h6>
                        <p className='type-desc'>The efficient and organised way of working at Continental Hospitals allows us to cater to patients from across the globe with the best in healthcare.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpeciality;