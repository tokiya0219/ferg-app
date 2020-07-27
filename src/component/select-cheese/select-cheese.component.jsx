import React, { useContext } from 'react';
import Select from 'react-select';

import SelectCheeseContext from '../../context/select-cheese/select-cheese.context';

import './select-menu.styles.scss';

const SelectCheese = () => {
    const selectCheese = useContext(SelectCheeseContext);
    return(
        <div className='select-item'>
            <Select className='select' options={selectCheese} placeholder='choose your cheese' ></Select>
        </div>
    )
}

export default SelectCheese;