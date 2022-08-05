import React from 'react';
import './styles.css';

const Footer = () => {
    const className = 'Footer';
    return (
        <div className={className}>
            <p>Developed by <a href="https://www.google.com" className={`${className}_link`}>James DeChavez</a></p>
        </div>
    );
};

export default Footer;