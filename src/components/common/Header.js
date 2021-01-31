import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-wrap'>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    );
};

export default Header;