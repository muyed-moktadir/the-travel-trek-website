import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
            <footer>
            <h3>The Travel Trek</h3>
            <h4><small>copyright @ {year} </small></h4>
        </footer>
    );
};

export default Footer;