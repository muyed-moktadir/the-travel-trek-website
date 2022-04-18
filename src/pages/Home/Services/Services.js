import React from 'react';
import useTravelServices from '../../../CustomHook/CustomHook';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services]=useTravelServices();
    return (
        <div>
            <h1>My Services</h1>
            <div className='services-container'>
            {
                services.map(service=><Service 
                key={service.id}
                service={service}></Service>)
            }
            </div>

        </div>
    );
};

export default Services;