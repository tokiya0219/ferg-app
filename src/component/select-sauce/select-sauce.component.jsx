import React, { useContext } from 'react';
import Select from 'react-select';

import SelectSauceContext from '../../context/select-sauce/select-sauce.context';

import '../select-cheese/select-menu.styles.scss';

const SelectSauce = () => {
    const selectSauce = useContext(SelectSauceContext);
    return(
        <div className='select-item'>
            <Select isMulti className='select' options={selectSauce} placeholder='choose your sauce'></Select>
        </div>
    )
}

export default SelectSauce;