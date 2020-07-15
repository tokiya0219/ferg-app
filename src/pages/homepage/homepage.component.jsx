import React from 'react';

import MainPic from '../../component/main-pic/main-pic.component';
import Ferg from '../../component/about-ferg/about-ferg.component';

import './homepage.styles.scss';

const HomePage = () => {
return (
    <div className='home-page'>
        <MainPic />
        <Ferg />
    </div>
);
}

export default HomePage;