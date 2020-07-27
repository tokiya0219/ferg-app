import React, { useContext } from 'react';

import SelectSauce from '../select-sauce/select-sauce.component';
import SelectCheese from '../select-cheese/select-cheese.component';
import CustomButton from '../custom-button/custom-button.component';

import ItemsContext from '../../context/item/item.context';

import './collection-item.styles.scss';

const CollectionItem = ({ match }) => {
    const collections = useContext(ItemsContext);
    const collection = collections[match.params.itemKey];
    const { imageUrl, name, ingredient, price, ableToCustomSauce, ableToCustomCheese } = collection;
    return(
                <div className='collection-item'>
                    <div className='collection'>
                        <img className='image' alt='' src={`${imageUrl}`}></img>
                        <h1 className='content'>{name}</h1>
                        <h1 className='content'>{price}NZD</h1>
                        <h3 className='ingredient'>{ingredient}</h3>
                        { ableToCustomSauce ? <SelectSauce/> : ''}
                        {ableToCustomCheese ? <SelectCheese/> : ''}
                        <CustomButton isShopping>Grab me!!</CustomButton>
                    </div>
                </div>
            );
}

export default CollectionItem;