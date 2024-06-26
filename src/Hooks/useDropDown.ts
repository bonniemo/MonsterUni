import { UseDropDownProps } from "../Types/Types";

export const useDropDown = <T extends { id: string }>({ data, setSelectedItem }:UseDropDownProps<T>) => {    

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const selectedItem = data.find(item => item.id === e.target.value)
        selectedItem && setSelectedItem(selectedItem)
        
    };
    return { setSelectedItem, handleSelect }   
}