import React from 'react';
const Content = (props) => {
    const {title,image,description} = props.data;
    return (
        <>
            <div className="col-md-6">
                <img src={image} className="card-img-top img-fluid img-thumbnail" alt={image} />
            </div>
            <div className="col-md-6">
                <h3 style={{fontWeight:'700'}}>Service Name : {title}</h3>
                <h3 style={{fontWeight:'700'}}>Description <i className="fas fa-level-down-alt"></i> </h3>
                <p style={{fontSize:'25px'}}>{description}</p>
            </div>
        </>
    );
};

export default Content;