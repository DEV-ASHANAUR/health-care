import React from 'react';
import Banner from '../Banner/Banner';
import Department from '../Department/Department';
import OurSpeciality from '../OurSpeciality/OurSpeciality';
import ServiceArea from '../ServiceArea/ServiceArea';
import './Home.css'
const Home = () => {
    return (
        <>
           <Banner></Banner>
           <ServiceArea></ServiceArea>
           <Department></Department>
           <OurSpeciality></OurSpeciality>
        </>
    );
};

export default Home;