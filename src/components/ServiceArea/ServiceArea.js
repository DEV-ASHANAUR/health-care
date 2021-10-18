import React from 'react';
import './ServiceArea.css';
import Service from '../Service/Service';
import useFetch from '../../hooks/useFetch';
import SectionHeading from '../SectionHeading/SectionHeading';

const ServiceArea = () => {
    const [service] = useFetch();
    return (
        <div className='container my-5'>
            <SectionHeading>Our Services</SectionHeading>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    service.map(item => <Service key={item.id} data={item}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceArea;