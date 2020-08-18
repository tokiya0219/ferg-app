import React, { useContext } from 'react';

import CustomSelect from '../custom-select/custom-select.component';
import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../provider/cart-provider/cart-provider';
import { SelectContext } from '../../provider/select-provider/select-provider';

import ItemsContext from '../../context/item/item.context';

import './collection-item.styles.scss';

const CollectionItem = ({ match }) => {
    const collections = useContext(ItemsContext);
    const collectionItem = collections[match.params.itemKey];
    const { key, imageUrl, name, ingredient, price, ableToCustomSauce, ableToCustomCheese } = collectionItem;
    const { addItem } = useContext(CartContext);
    const {selectedCheese, cheese, selectedSauce, sauce} = useContext(SelectContext);
    return(
                <div className='collection-item' key={key}>
                    <div className='collection'>
                        <img className='image' alt='' src={`${imageUrl}`}></img>
                        <h1 className='content'>{name}</h1>
                        <h1 className='price'>{price}NZD</h1>
                        <h3 className='ingredient'>{ingredient}</h3>
                            {ableToCustomCheese.length ?
                                <select onChange={selectedCheese} >
                                {
                                    ableToCustomCheese.map((cheese, index) => (
                                    <option key={index}  value={cheese.value}>{cheese.label}</option>
                                    ))
                                }
                                </select>
                                :''
                            }
                            {ableToCustomSauce.length ?
                                <select onChange={selectedSauce} placeholder='select sauce'>
                                    {
                                        ableToCustomSauce.map((sauce, index) => (
                                        <option key={index} value={sauce.value}>{sauce.label}</option>
                                        ))
                                    }
                                </select> :
                                ''
                            }
                        <CustomButton isShopping onClick={() => addItem(collectionItem)}>Grab me!!</CustomButton>
                    </div>
                </div>
            );
}

export default CollectionItem;