import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1> i am from service details page service id {id} </h1>
        </div>
    );
};

export default ServiceDetails;