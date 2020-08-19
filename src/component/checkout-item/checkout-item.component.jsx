import React, {useContext} from 'react';

import CustomSelect from '../custom-select/custom-select.component';

import { CartContext } from '../../provider/cart-provider/cart-provider';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, cheese, sauce }) => {
    const { name, imageUrl, price, quantity, ableToCustomCheese, ableToCustomSauce, key, index, optionSauce, optionCheese } = item;
    // const {cheese, sauce ,selectedCheese, selectedSauce } = useContext(CartContext);
    return(
        <div className='checkout-item-list' key={key}>
               <div>
                    <div className='img-container'>
                        <img alt='' src={imageUrl}></img> 
                    </div>
                    <span className='name'>{name}</span>
                    {/* <CustomSelect className='cheese' value={cheese} onChange={selectedCheese} options={ableToCustomCheese} ></CustomSelect>
                    <CustomSelect className='sauce' value={sauce} onChange={selectedSauce} options={ableToCustomSauce} isMulti ></CustomSelect> */}
                    <span>{optionSauce}</span>
                    <span>{optionCheese}</span>
                    <span className='amount'>{quantity}</span>
                    <span className='price'>{price}</span>
                    <span className='delete-icon'>x</span>
                </div> 
        </div>
    );
}

export default CheckoutItem;