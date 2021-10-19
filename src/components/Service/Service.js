import React from 'react';
import { useHistory } from 'react-router';
const Service = (props) => {
    const history = useHistory();
    const {id,title,description,image} = props.data;
    //handleServiceDetails
    const handleServiceDetails = () => {
        history.push(`/details/${id}`);
    }
    return (
        <div className="col">
            <div className="card h-100">
            <div className='service-img'>
                <img src={image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text text-description">{description.slice(0, 100) }..</p>
                <button onClick={handleServiceDetails} className='read-btn'>read more <i className="fas fa-arrow-right"></i></button>
            </div>
            </div>
        </div>
    );
};

export default Service;