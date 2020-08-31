import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemCount, getCartItemPrice, getFixedPrice } from './cart.utils';

export const CartContext = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cheese: '',
    selectedCheese: () => {},
    sauce: '',
    selectedSauce: () => {},
    friesSauce: '',
    selectedFriesSauce: () => {},
    totalPrice: 0
});

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cheese, setCheese] = useState('No cheese');
    const [sauce, setSauce] = useState('Default');
    const [friesSauce, setFriesSauce] = useState('Tomato Sauce');
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
    const selectedCheese = e => setCheese(e.target.value);
    const selectedSauce = e => setSauce(e.target.value);
    const selectedFriesSauce = e => setFriesSauce(e.target.value);

    useEffect(() => {
        setCartItemsCount(getCartItemCount(cartItems));
    }, [cartItems]);

    useEffect(() => {
        setTotalPrice(getFixedPrice(getCartItemPrice(cartItems)));
    }, [cartItems]);

return(
    <CartContext.Provider
    value={{
        cartItems,
        addItem,
        removeItem,
        cartItemsCount,
        clearItemFromCart,
        cheese,
        sauce,
        friesSauce,
        selectedCheese,
        selectedSauce,
        selectedFriesSauce,
        totalPrice,
        
    }}>
    {children}
    </CartContext.Provider>
);
}

export default CartProvider