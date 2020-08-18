import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemCount } from './cart.utils';

export const CartContext = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cheese: {},
    selectedCheese: () => {},
    sauce: [],
    selectedSauce: () => {}
});

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cheese, setCheese] = useState({});
    const [sauce, setSauce] = useState([]);


    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
    const selectedCheese = (e) => setCheese({value: e.target.value});
    const selectedSauce = (e) => setSauce({value: e.target.value});

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