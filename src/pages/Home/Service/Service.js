import React from 'react';
import './Service.css'
const Service = ({service}) => {
const {img,price,name,about}=service;
    return (
        <div className='service-container'>
            <div className='image'>
            <img src={img} alt="" />
            </div>
            <div className='service-details'>
                <h2>{name}</h2>
                <p>Package: {about.length > 20? about.slice(0,150) +'...': about}</p>
                <h3>price : ${price}</h3>
            </div>
        </div>
    );
};

export default Service;