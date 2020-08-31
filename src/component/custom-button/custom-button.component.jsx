import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isShopping, isCheckingout, ...props}) => (
<button className={`${ isShopping ? 'isShopping' : '' } 
    ${isCheckingout ? 'isCheckingout' : ''} custom-button`} 
    {...props}>
    {children}
</button>
);

export default CustomButton;