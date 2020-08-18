import React, {useContext} from 'react';

import CustomSelect from '../custom-select/custom-select.component';

import {SelectContext} from '../../provider/select-provider/select-provider';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity, ableToCustomCheese, ableToCustomSauce, key } = item;
    const {cheese, sauce ,selectedCheese, selectedSauce } = useContext(SelectContext);
    return(
        <div className='checkout-item-list' key={key}>
               <div>
                    <div className='img-container'>
                        <img alt='' src={imageUrl}></img> 
                    </div>
                    <span className='name'>{name}</span>
                    {/* <CustomSelect className='cheese' value={cheese} onChange={selectedCheese} options={ableToCustomCheese} ></CustomSelect>
                    <CustomSelect className='sauce' value={sauce} onChange={selectedSauce} options={ableToCustomSauce} isMulti ></CustomSelect> */}
                    <span>{sauce.value}</span>
                    <span>{cheese.value}</span>
                    <span className='amount'>{quantity}</span>
                    <span className='price'>{price}</span>
                    <span className='delete-icon'>x</span>
                </div> 
        </div>
    );
}

export default CheckoutItem;