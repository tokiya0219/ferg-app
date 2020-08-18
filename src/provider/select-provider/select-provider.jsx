import React, {useState, createContext} from 'react';

export const SelectContext = createContext({
   cheese: {},
   selectedCheese: () => {},
   sauce: {},
   selectedSauce: () => {}
}) 

const SelectProvider = ({children}) => {
    const [cheese, setCheese] = useState({value: 'Cheddar'});
    const [sauce, setSauce] = useState({value: 'default'});


    const selectedCheese = (e) => setCheese({value: e.target.value});
    const selectedSauce = (e) => setSauce({value: e.target.value});

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