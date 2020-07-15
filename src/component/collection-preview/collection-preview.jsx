import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreiview = ({ title, items }) => (
    <div className='collection-preview'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
            {items.map(item => (
                <div key={item.key} className='store-item'>
                    <div className='item' style={{backgroundImage:`url(${item.imageUrl})`}} />
                    <div  className='item-info'>
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
)

export default CollectionPreiview;