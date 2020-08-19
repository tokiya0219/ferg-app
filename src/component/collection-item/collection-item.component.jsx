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
    const { key, imageUrl, name, ingredient, price, ableToCustomSauce, ableToCustomCheese, optionCheese, optionSauce } = collectionItem;
    const { addItem, cheese, selectedCheese, sauce, selectedSauce } = useContext(CartContext);
    function pushFunc() {
        optionCheese.push(cheese);
        optionSauce.push(sauce);
        addItem(collectionItem);
    }
    return(
                <div className='collection-item' key={key}>
                    <div className='collection'>
                        <img className='image' alt='' src={`${imageUrl}`}></img>
                        <h1 className='content'>{name}</h1>
                        <h1 className='price'>{price}NZD</h1>
                        <h3 className='ingredient'>{ingredient}</h3>
                        <form>
                            {ableToCustomCheese.length ?
                                <select onChange={selectedCheese} required >
                                {
                                    ableToCustomCheese.map((option, index) => (
                                    <option key={index}  value={option}>{option}</option>
                                    ))
                                }
                                </select>
                                :''
                            }
                            {ableToCustomSauce.length ?
                                <select placeholder='select sauce' onChange={selectedSauce}>
                                    {
                                        ableToCustomSauce.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                        ))
                                    }
                                </select> :
                                ''
                            }
                        </form>
                        <CustomButton isShopping onClick={() => pushFunc()}>Grab me!!</CustomButton>
                    </div>
                </div>
            );
}

export default CollectionItem;