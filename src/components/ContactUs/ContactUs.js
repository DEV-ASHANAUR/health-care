import React from 'react';
import './ContactUs.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SectionHeading from '../SectionHeading/SectionHeading';
const ContactUs = () => {
    return (
        <>
            <Breadcrumb pageName='Contact Us' formPage='Home' toPage='Contact Us'></Breadcrumb>
            <div className='container my-5'>
                <SectionHeading>Contact Us</SectionHeading>
                <div className="row row-cols-1 row-cols-md-3 g-4 py-4">
                    <div className="col">
                        <div className="card dep-card h-100 py-3">
                            <div className="card-body text-center">
                                <p className='dep-icon'><i className="fas fa-location-arrow"></i></p>
                                <h3 className="card-title" style={{fontWeight:'700',color: '#1279a1'}}>Address</h3>
                                <p className="card-text">198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card dep-card h-100 py-3">
                            <div className="card-body text-center">
                                <p className='dep-icon'><i className="fas fa-phone-square-alt"></i></p>
                                <h3 className="card-title" style={{fontWeight:'700',color: '#1279a1'}}>Contact Number
                                </h3>
                                <p className="card-text">+ 1235 2355 98</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card dep-card h-100 py-3">
                            <div className="card-body text-center">
                                <p className='dep-icon'><i className="fas fa-envelope-open-text"></i></p>
                                <h3 className="card-title" style={{fontWeight:'700',color: '#1279a1'}}>Email Address</h3>
                                <p className="card-text">healthcare009@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 py-5">
                    
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29211.030096190865!2d89.64958929999999!3d23.769523099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634642238832!5m2!1sen!2sbd" height="100%"
                        width="100%" title="location" allowfullscreen="" loading="lazy"></iframe>
                    
                    </div>
                    <div className="col-md-6 py-5">
                        <div className='mt-5'>
                            <input type="text" className='form-control mb-3' placeholder='Enter Name' />
                            <input type="text" className='form-control mb-3' placeholder='Enter Subject' />
                            <input type="text" className='form-control mb-3' placeholder='Enter Address' />
                            <textarea className='form-control mb-3' id="" cols="30" rows="10" placeholder="Message"></textarea>
                            <button className='send-message'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;