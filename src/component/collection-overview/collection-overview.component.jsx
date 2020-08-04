import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview';

import CollectionsContext from '../../context/shop/shop.context';

import Menu from '../../assets/menu-fergburger-wall.jpg';

import './collection-overview.styles.scss';

const CollectionOverview = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map( key => collectionsMap[key]);

    return(
    <div className='menu'>
        <div className='menu-item' style={{backgroundImage : `url(${Menu})`}}>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
            ))
            }
        </div>
    </div>
    );
}

export default CollectionOverview;
    