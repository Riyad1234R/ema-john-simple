import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
           <nav>
           <a href="/Shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">inventory</a>
                <a href="/login">login</a>
           </nav>
                
        </div>
    );
};

export default Header;