import React, { useEffect, useState } from 'react';
import './ServiceArea.css';
import Service from '../Service/Service';
import useFetch from '../../hooks/useFetch';
import SectionHeading from '../SectionHeading/SectionHeading';

const ServiceArea = () => {
    const [service] = useFetch();
    const [preloading, setPreloading] = useState(false)
    //loading 
    useEffect(() => {
        setPreloading(true)
        setTimeout(() => {
            setPreloading(false)
        },2000)
    },[])
    return (
        <div className='container my-5'>
            <SectionHeading>Our Services</SectionHeading>

            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {
                    preloading?
                    <div className="col text-center">
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                    :
                    service.map(item => <Service key={item.id} data={item}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceArea;