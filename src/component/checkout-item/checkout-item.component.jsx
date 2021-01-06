import React, {useContext} from 'react';

import { CartContext } from '../../provider/cart-provider/cart-provider';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity, key, optionSauce, optionCheese } = item;
    const { clearItemFromCart } = useContext(CartContext);

    function clearOptions() {
        optionSauce.length = 0;
        optionCheese.length = 0;
        clearItemFromCart(item);
    }
    function clearOption() {
        optionSauce.length = 0;
        clearItemFromCart(item);
    }
    function deleteItem() {
        clearItemFromCart(item);
    }

    let clearItem;
    if(optionSauce && optionCheese){
        clearItem = clearOptions;
    } else if (optionSauce) {
        clearItem = clearOption;
    } else {
        clearItem = deleteItem;
    }
 
    return(
        <div className='checkout-item-list' key={key}>
            <div className='img-container'>
                <img alt='' src={imageUrl} className='image'></img> 
            </div>
            <span className='name'>{name}</span>
            <div className='cheese-list'>
                {optionCheese ?
                    optionCheese.map((cheese, index) => (
                        <li className='selected-item' key={index}>
                            {cheese}
                        </li>
                    )) : ''
                }
            </div>
            <div className='sauce-list'>
                {optionSauce ?
                        optionSauce.map((sauce, index) => (
                            <li className='selected-item' key={index}>
                                {sauce}
                            </li>
                        )) : ''
                }
            </div>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <span className='delete-icon' onClick={() => clearItem(item)}>&#10006;</span>
        </div>
    );
}

export default CheckoutItem;