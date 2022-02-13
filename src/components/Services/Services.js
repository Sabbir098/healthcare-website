import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

     useEffect( () => {
         fetch('./fakedata.JSON')
         .then(res => res.json())
         .then(data => setServices(data))
     }, [])
    return (
    <div>
        <div className='service-title'>
            <h2 className='text-info'>Our Best Services</h2>
        </div>
        <div className='services-container'>
            {
                services.map(service => <Service
                allService={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services; 