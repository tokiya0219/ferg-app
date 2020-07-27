import React,{ useState, createContext } from 'react';

export const SelectContext = createContext({
    isOpen: false,
    toggling: () => {},
    selectedOption: null,
    onOptionClicked: () => {}
});

const SelectProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
        setSelectedOption(value);

        setIsOpen(false);
        console.log(selectedOption);
    }

    return (
        <SelectContext.Provider
        value={{
            isOpen,
            toggling,
            selectedOption,
            onOptionClicked
            }}>
        {children}
        </SelectContext.Provider>
    )

}

export default SelectProvider;