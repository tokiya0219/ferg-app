import React, {useState, createContext} from 'react';

export const SelectContext = createContext({
   cheese: '',
   selectedCheese: () => {},
   sauce: '',
   selectedSauce: () => {}
}) 

const SelectProvider = ({children}) => {
    const [cheese, setCheese] = useState('Cheddar');
    const [sauce, setSauce] = useState('Tomato Relish');


    const selectedCheese = (e) => setCheese(e.target.value);
    const selectedSauce = (e) => setSauce(e.target.value);

    return(
    <SelectContext.Provider
    value={{
        cheese,
        selectedCheese,
        sauce,
        selectedSauce
    }}>
        {children}
        </SelectContext.Provider>
    );
}

export default SelectProvider