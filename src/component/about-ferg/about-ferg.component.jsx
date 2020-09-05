import React, { useContext } from 'react';

import InfomationsContext from '../../context/info/info.context';

import './about-ferg.styles.scss';

const Ferg = () => {
    const info = useContext(InfomationsContext);
    return(
        <div className='our-page'>
            <h1 className='title'>ABOUT US</h1>
            {
                info.lists.map(info => (
                    <div className='list' key={info.id}>
                    <h2 className='list-item' id={info.id} > {info.title} </h2>
                    <span className='description'>{info.description}</span>
                    </div>
                ))}
        </div>
    );
}

export default Ferg;