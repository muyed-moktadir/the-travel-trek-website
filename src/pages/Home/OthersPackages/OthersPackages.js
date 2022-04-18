import React from 'react';
import useTravelServices from '../../../CustomHook/CustomHook';
import OthersPackage from '../OthersPackage/OthersPackage';

const OthersPackages = () => {
    const [services]=useTravelServices();
    return (
        <div>
            <h1>Others Packages</h1>
            <div className='services-container'>
            {
                services.map(service=><OthersPackage
                     key={service.id}
                    service={service}
                    ></OthersPackage> 
                )
            }
            </div>
        </div>
    );
};

export default OthersPackages;