import React, { useState, createContext } from 'react';

export const MainPicContext = () => createContext({
    isHovering: false,
    handleMouseHover: () => {},
});

const MainPicProvider = ({children}) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseHover = () => setIsHovering(!isHovering);

    return(
        <MainPicProvider
        value={{handleMouseHover, isHovering}}>
            {children}
        </MainPicProvider>
    )

}

export default MainPicProvider;