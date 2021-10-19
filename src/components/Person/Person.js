import React from 'react';
import './Person.css';

const Person = (props) => {
    // object destructuring
    const {name,image,designation} = props.person;
    return (
        <div className="col">
            <div className="card cus-card py-3">
                <div className='image'>
                    <img src={image} className="img-fluid" alt="person" />
                </div>
                <div className="card-body cus-card-body">
                    <h3 className='text-capitalize'>{name}</h3>
                    <p className='text-uppercase'>{designation}</p>
                    <hr />
                    <button className="custom-btn"> <i className="fas fa-stethoscope"></i> view History</button>
                    <div className="social-icon">
                        <i className="fab fa-facebook-square fac-color"></i>
                        <i className="fab fa-twitter-square tw-color"></i>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Person;