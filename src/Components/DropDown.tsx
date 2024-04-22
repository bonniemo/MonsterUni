import { useDropDown } from "../Hooks/useDropDown";

type DropDownProps<T> = {
  label: string;
  optionTitle: string;
  data: T[]; 
  setSelectedItem: (item: T | null) => void;
};

const DropDown = <T extends { id: string; name: string }>({
  label,
  optionTitle,
  data,  
  setSelectedItem
}: DropDownProps<T>) => {
  const { handleSelect } = useDropDown({
    data,
    setSelectedItem,
  });

  return (
    <>
      <label htmlFor="pick">{label}</label>
      <select name="pick" onChange={handleSelect}>
        <option value="">{optionTitle}</option>
        {data.map((d) => (
          <option value={d.id} key={d.id}>
            {d.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
