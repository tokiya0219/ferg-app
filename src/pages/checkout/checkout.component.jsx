import React, {useContext} from 'react';

import CheckoutItem from '../../component/checkout-item/checkout-item.component';

import { CartContext } from '../../provider/cart-provider/cart-provider';
// import { SelectContext } from '../../provider/select-provider/select-provider';

import './checkout.styles.scss';

const CheckOut = () => {
    const { cartItems } = useContext(CartContext);
    // const { cheese, sauce } = useContext(SelectContext);
    console.log(cartItems);
    return(
        <div className='check-out'>
            <div>
            <h1 className='title'>CHECKOUT</h1>
            </div>
            <div className='item-list'>
                <span className='image'>item image</span>
                <span className='name'>item name</span>
                <span className='cheese'>cheese</span>
                <span className='sauce'>sauce</span>
                <span className='amount'>amount</span>
                <span className='price'>price</span>
                <span className='delete-tag'></span>
            </div>
            {cartItems.length ? (
            cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
    )
}

export default CheckOut;