import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Content from './Content';
const ServiceDetails = () => {
   const[service] = useFetch();
    const {serviceId} = useParams();
    const filderData = service.filter(pd => pd.id === parseInt(serviceId))
    return (
        <>
            <Breadcrumb pageName='Service Details' formPage='Home' toPage='Service Details'></Breadcrumb>
            <div className='container my-5'>
                <div className="row">
                    {
                        filderData.map(item => <Content key={item.id} data={item}></Content>)
                    }
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;