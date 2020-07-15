import React from 'react';

import SHOP_DATA from '../../shop.data';
import CollectionPreview from '../collection-preview/collection-preview'

import './menu-list.styles.scss';

export default class MenuList extends React.Component{
constructor(props) {
    super(props);

    this.state ={
        collections:SHOP_DATA
    }
}

render() {
    const { collections } = this.state;
    return(
    <div className='menu'>
        <h1 className='menu-title'>MENU</h1>
        <div className='menu-item'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    </div>
    );
}
}