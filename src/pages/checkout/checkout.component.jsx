import React, {useContext} from 'react';

import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import CustomButton from '../../component/custom-button/custom-button.component';

import { CartContext } from '../../provider/cart-provider/cart-provider';

import './checkout.styles.scss';

const CheckOut = () => {
    const { cartItems, totalPrice, cartItemsCount } = useContext(CartContext);
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
                <div className='empty-message'>Your cart is empty</div>
            )}
            <div className='total'>
                <span className='total-amount'>{cartItemsCount} items</span>
                <span className='total-price'>Total price is {totalPrice}$</span>
            </div>
            <CustomButton isCheckingout onClick={() => alert('your order has been accepted')}>checkout now</CustomButton>
        </div>
    )
}

export default CheckOut;