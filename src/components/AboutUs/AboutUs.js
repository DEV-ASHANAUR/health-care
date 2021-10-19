import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SectionHeading from '../SectionHeading/SectionHeading';
import Person from './../Person/Person';

const AboutUs = () => {
    const[members,setMembers] = useState([]);
    useEffect(()=>{
        fetch('person.json')
        .then(res => res.json())
        .then(data => setMembers(data));
    },[]);
    return (
        <>
            <Breadcrumb pageName='About Us' formPage='Home' toPage='About Us'></Breadcrumb>
            <div className='container my-5'>
                <SectionHeading>About Us</SectionHeading>
                <div className="row py-5">
                    <div className="col-md-6 text-center pb-3">
                        <img src="https://cdn.britannica.com/w:400,h:300,c:crop/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg" className='img-fluid img-thumbnail text-center' alt=".." />
                    </div>
                    <div className="col-md-6 pb-3">
                        <h4 className='text-center' style={{fontWeight:'700'}}>A bit About Us</h4>
                        <p style={{fontSize:'20px',textAlign:'justify'}}>
                        Health Care Founded in 2005, City of Hope is a national leader in health care. We provide each patient with an individualized, comprehensive care experience and deliver the highest quality treatment and expertise.

                        We are one of only 51 National health care Institute (NCI)-designated comprehensive health centers in the U.S. The NCI designation recognizes excellence in treatment, research and expertise to address the many faces of the disease, whether in early or late stage, and for common or rare types of health.
                        </p>
                    </div>
                </div>
                <SectionHeading>Our Expert Doctor</SectionHeading>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {
                        members.map(member => <Person key={member.id} person={member}></Person>)
                    }
                </div>
            </div>
        </>
    );
};

export default AboutUs;