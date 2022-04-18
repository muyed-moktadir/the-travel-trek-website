import React from 'react';

const OthersPackage = ({service}) => {
    const {img,price,name,about}=service;
    return (
        <div className='service-container'>
            <div className='image'>
            <img src={img} alt="" />
            </div>
            <div className='service-details'>
                <h2>{name}</h2>
                <p title={about}><strong>Package</strong>: {about.length > 10? about.slice(0,100) +'...': about}</p>
                <h3>price : ${price}</h3>
            </div>
        </div>
    );
};

export default OthersPackage;