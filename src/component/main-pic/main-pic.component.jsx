import React, {useContext} from 'react';

import { MainPicContext } from '../../provider/main-pic-provider/main-pic-provider.component'

import './main-pic.styles.scss';

const MainPic = () => {
    const {isHovering, handleMouseHover} = useContext(MainPicContext)
    return (
        <div>
            <div className='main-pic'
            onMouseEnter={handleMouseHover}
            onMouseOut={handleMouseHover}
            >
            {
                isHovering &&
                <h1 className='header'>Ferg Loves You</h1>
            }
            </div>
        </div>
    );
    }


export default MainPic;