import React from 'react';
import './styles.css';

const Footer = () => {
    const className = 'Footer';
    return (
        <div className={className}>
            <p className={`${className}_link`}>Developed by <a href="https://www.google.com">James DeChavez</a></p>
        </div>
    );
};

export default Footer;