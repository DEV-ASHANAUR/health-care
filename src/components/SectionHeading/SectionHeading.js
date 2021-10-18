import React from 'react';
import './SectionHeading.css';
import svg from '../../assets/3-layers5.svg';
const SectionHeading = ({children}) => {
    return (
        <div className="heading py-3">
            <h1>{children}</h1>
            {/* <i className="fas fa-heartbeat heart-style"></i> */}
            <img src={svg} alt="" />
        </div>
    );
};

export default SectionHeading;