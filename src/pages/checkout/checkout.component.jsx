import React, {useContext} from 'react';

import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import CustomButton from '../../component/custom-button/custom-button.component';

import { CartContext } from '../../provider/cart-provider/cart-provider';

import './checkout.styles.scss';

const CheckOut = () => {
    const { cartItems, totalPrice, cartItemsCount } = useContext(CartContext);
    function checkedOut () {
        alert('your order has been accepted');
        window.location.reload(false);
    }
    return(
        <div className='check-out'>
            <div>
            <h1 className='title'>CHECKOUT</h1>
            </div>
            <div className='item-list'>
                <span className='image'>image</span>
                <span className='name'>name</span>
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
                <span className='total-price'>{totalPrice}$</span>
            </div>
            {
                cartItems.length ?
            <CustomButton isCheckingout onClick={checkedOut}>checkout now</CustomButton> : ''
            }
        </div>
    )
}

export default CheckOut;