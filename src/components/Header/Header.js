import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h2>STUDY-MODULE</h2>
        </div>
    );
};

export default Header;