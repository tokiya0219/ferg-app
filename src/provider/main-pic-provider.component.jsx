import React, { useState, createContext } from 'react';

export const MainPicContext = createContext({
    isHovering: false,
    handleMouseHover: () => {}
});

const MainPicProvider = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseHover = () => setIsHovering(!isHovering);

    return(
        <MainPicContext.Provider
        value={{handleMouseHover, isHovering}}>
            {children}
        </MainPicContext.Provider>
    )

}

export default MainPicProvider;