import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
           <nav>
                <Link to="/order">order</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/">shop</Link>
                <Link to="/login">login</Link>
           </nav>
                
        </div>
    );
};

export default Header;