import React from 'react';
import { withRouter } from 'react-router-dom';

import Menu from '../../assets/menu-fergburger-wall.jpg';

import './collection-preview.styles.scss';

const CollectionPreiview = ({ title, items, history, match }) => (
    <div className='collection-preview' style={{backgroundImage : `url(${Menu})`}}>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
            {items.map(item => (
                <div key={item.key} className='store-item'>
                    <div className='item' style={{backgroundImage:`url(${item.imageUrl})`}} onClick={() => history.push(`${match.url}/${item.key}`)} />
                    <div className='item-info'>
                        <span className='item-name'>
                                {item.name}
                        </span>
                        <span className='item-price'>
                            {item.price} NZD
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );

export default withRouter(CollectionPreiview);