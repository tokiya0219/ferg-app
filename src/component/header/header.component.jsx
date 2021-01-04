import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <Link className='logo' to='/'>
                    Ferg Burger
                </Link>
            </div>
            <div className='options-container'>
                <Link className='option' to='/menu'>
                    Menu
                </Link>
                <Link className="option" to='/sign in'>
                    Sign in
                </Link>
                <Link className='option' to='/checkout'>
                    Checkout
                </Link>
            </div>
        </div>
    );
}

export default Header;