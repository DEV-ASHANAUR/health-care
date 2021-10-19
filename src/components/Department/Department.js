import React from 'react';
import './Department.css';
import SectionHeading from '../SectionHeading/SectionHeading';

const Department = () => {
    return (
        <>
            <SectionHeading>Our Department</SectionHeading>
            <div className="department-section">
                <div className="depoverly">
                    <div className='container p-5'>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card dep-card h-100 py-3">
                                    <div className="card-body text-center">
                                        <p className='dep-icon'><i className="fas fa-x-ray"></i></p>
                                        <h3 className="card-title" style={{fontWeight:'700',color: '#1279a1'}}>Cardiology</h3>
                                        <p className="card-text">If even a fraction of heart-disease patients are missing their regular cardiology visits during the pandemic.</p>
                                        <button className='learn-btn'><span>learn more</span> <span className="material-icons">
                                            arrow_right_alt
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card dep-card h-100 py-3">
                                    <div className="card-body text-center">
                                        <p className='dep-icon'><i className="fas fa-head-side-mask"></i></p>
                                        <h3 className="card-title" style={{fontWeight:'700',color: '#1279a1'}}>Neurology
                                        </h3>
                                        <p className="card-text">The scientific study of the diagnosis and treatment of disorders of nerves and the nervous system..</p>
                                        <button className='learn-btn'><span>learn more</span> <span className="material-icons">
                                            arrow_right_alt
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card dep-card h-100 py-3">
                                    <div className="card-body text-center">
                                        <p className='dep-icon'><i className="fas fa-lungs"></i></p>
                                        <h3 className="card-title" style={{fontWeight:'700',color: '#1279a1'}}>Urology</h3>
                                        <p className="card-text">The scientific, clinical, and especially surgical aspects of the study of the urine.</p>
                                        <button className='learn-btn'><span>learn more</span> <span className="material-icons">
                                            arrow_right_alt
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Department;