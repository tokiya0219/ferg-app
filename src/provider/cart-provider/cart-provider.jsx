import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemCount } from './cart.utils';

export const CartContext = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cheese: '',
    selectedCheese: () => {},
    sauce: [],
    selectedSauce: () => {}
});

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cheese, setCheese] = useState('no cheese');
    const [sauce, setSauce] = useState('default');

    const addItem = item => setCartItems(addItemToCart(cartItems, item, cheese));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
    const selectedCheese = e => setCheese(e.target.value);
    const selectedSauce = e => setSauce(e.target.value);

    useEffect(() => {
        setCartItemsCount(getCartItemCount(cartItems));
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
        selectedCheese,
        selectedSauce
    }}>
    {children}
    </CartContext.Provider>
);
}

export default CartProvider