import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isShopping, ...props}) => (
<button className={`${ isShopping ? 'isShopping' : '' } custom-button`} {...props}>{children}</button>
);

export default CustomButton;