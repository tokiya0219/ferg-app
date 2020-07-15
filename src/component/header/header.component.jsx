import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <Link className='logo' to='/'>
                    ferg burger
                </Link>
            </div>
            <div className='options-container'>
                <Link className='option' to='/menu'>
                    menu
                </Link>
                <Link className='option' to='/option'>
                    check out
                </Link>
            </div>
        </div>
    );
}

export default Header;