import React, {useContext} from 'react';

import { CartContext } from '../../provider/cart-provider/cart-provider';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity, ableToCustomCheese, ableToCustomSauce, key, index, optionSauce, optionCheese } = item;
    const {addItem, removeItem, clearItemFromCart } = useContext(CartContext);
    return(
        <div className='checkout-item-list' key={key}>
            <div className='img-container'>
                <img alt='' src={imageUrl} className='image'></img> 
            </div>
            <span className='name'>{name}</span>
            <span className='cheese'>{optionCheese}</span>
            <span className='sauce'>{optionSauce}</span>
            <span className='quantity' role='img'>
                <div className='emoji' onClick={() => removeItem(item)}>
                    &#10134;
                </div>
                <span className='value'>{quantity}</span>
                <div className='emoji' onClick={() => addItem(item)}>
                    &#10133;
                </div>
            </span>
            <span className='price'>{price}</span>
            <span className='delete-icon' onClick={() => clearItemFromCart(item)}>&#10006;</span>
        </div>
    );
}

export default CheckoutItem;