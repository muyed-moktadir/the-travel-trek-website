import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
const {img,price,name,about}=service;
const navigate=useNavigate()

const checkOutHandle=()=>{
    navigate('/checkout')
}
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
            <div className='btn-container'>
            <button onClick={checkOutHandle} className='btn'><p>Book Now</p></button>
            </div>
        </div>
    );
};

export default Service;