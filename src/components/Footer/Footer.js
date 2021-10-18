import React from 'react';
import './Footer.css';
import fotlogo from '../../assets/logo/logo.png';
const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="container pt-5">
                <div className="row text-white text-center">
                    <div className="col-md-4">
                        <img src={fotlogo} width='130' alt="" />
                        <p className='py-2'>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                    <div className="col-md-4">
                        <h5><span className='border-bottom border-primary'>Talk to us</span></h5>
                        <div className='social-icon'>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <h5>
                        <span className='border-bottom border-primary'>Newsletter</span>
                    </h5>
                    <p className='pt-2'>Get our offers & News in your inbox</p>
                    <input type="text" className='newsletter' placeholder='Enter Your Email' />
                    <input type="submit" value='send' className='btn-send' />
                    </div>
                </div>
                <hr />
                <span className='d-block text-center text-white py-3'>copyright &copy; 2021 all right reserve by healthcare ltd.</span>
            </div>
        </div>
    );
};

export default Footer;