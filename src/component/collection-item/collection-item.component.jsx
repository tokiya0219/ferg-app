import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../provider/cart-provider/cart-provider';

import ItemsContext from '../../context/item/item.context';

import './collection-item.styles.scss';

const CollectionItem = ({ match }) => {
    const collections = useContext(ItemsContext);
    const collectionItem = collections[match.params.itemKey];
    const { key, imageUrl, name, ingredient, price, ableToCustomSauce, ableToCustomCheese, optionCheese, optionSauce, ableToCustomFriesSauce } = collectionItem;
    const { addItem, cheese, selectedCheese, sauce, selectedSauce, selectedFriesSauce, friesSauce } = useContext(CartContext);

    function pushFunc() {
        optionCheese.push(cheese);
        optionSauce.push(sauce);
        addItem(collectionItem);
    }
    function saucePushFunc(){
        optionSauce.push(friesSauce);
        addItem(collectionItem);
    }
    function itemPushFunc() {
        addItem(collectionItem);
    }
    let handleAction;
    if(optionCheese && optionCheese) {
        handleAction = pushFunc;
    } else if (optionSauce) {
        handleAction = saucePushFunc;
    } else{
        handleAction = itemPushFunc;
    }
    
    return(
                <div className='collection-item' key={key}>
                    <div className='collection'>
                        <img className='image' alt='' src={`${imageUrl}`}></img>
                        <div className='content'>
                            <h1 className='name'>{name}</h1>
                            <h1 className='price'>{price}NZD</h1>
                            <h3 className='ingredient'>{ingredient}</h3>
                                {ableToCustomCheese ?
                                    <select className='select-item' value={cheese} onChange={selectedCheese} >
                                    {
                                        ableToCustomCheese.map((option, index) => (
                                        <option className='select' key={index}  value={option}>{option}</option>
                                        ))
                                    }
                                    </select>
                                    :''
                                }
                                {ableToCustomSauce ?
                                    <select className='select-item' value={sauce} placeholder='select sauce' onChange={selectedSauce}>
                                        {
                                            ableToCustomSauce.map((option, index) => (
                                            <option className='select' key={index} value={option}>{option}</option>
                                            ))
                                        }
                                    </select> :
                                    ''
                                }
                                {
                                ableToCustomFriesSauce ?
                                    <select className='select-item' placeholder='select sauce' value={friesSauce} onChange={selectedFriesSauce}>
                                    {
                                        ableToCustomFriesSauce.map((option, index) => (
                                        <option className='select' key={index} value={option}>{option}</option>
                                        ))
                                    }
                                        </select> : ''
                                }
                            <CustomButton isShopping onClick={() => handleAction(collectionItem)}>Grab me!!</CustomButton>
                        </div>
                    </div>
                </div>
            );
}

export default CollectionItem;