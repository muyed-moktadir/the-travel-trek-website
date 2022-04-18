import React from 'react';
import Banner from '../Banner/Banner';
import OthersPackage from '../OthersPackage/OthersPackage';
import OthersPackages from '../OthersPackages/OthersPackages';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OthersPackages></OthersPackages>
        </div>
    );
};

export default Home;