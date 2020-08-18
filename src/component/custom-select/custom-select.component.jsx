import React from 'react';
import Select from 'react-select';

import './custom-select.styles.scss';

const CustomSelect = ({ ...props }) => {
    return(
        <div className='select-item'>
            <Select className='select'{...props} ></Select>
        </div>
    )
}

export default CustomSelect;