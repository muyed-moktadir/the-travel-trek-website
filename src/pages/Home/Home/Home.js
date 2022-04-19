import React from 'react';
import Banner from '../Banner/Banner';
import OthersPackages from '../OthersPackages/OthersPackages';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
            <OthersPackages></OthersPackages>
        </div>
    );
};

export default Home;