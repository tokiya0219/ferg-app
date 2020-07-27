import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isShopping}) => (
<button className={`${ isShopping ? 'isShopping' : '' } custom-button`}>{children}</button>
);

export default CustomButton;