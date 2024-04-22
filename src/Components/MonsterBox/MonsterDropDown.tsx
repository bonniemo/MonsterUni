import { useState } from "react";
import DropDown from "../DropDown";
import MonsterInfo from "./MonsterInfo";
import { Monster, MonsterState } from "../../Types/Types";

const MonsterDropDown = ({ monsters }: MonsterState) => {
  const [selectedItem, setSelectedItem] = useState<Monster | null>(null);  
  const handleSelected = (item: Monster | null) => {
    setSelectedItem(item);
  };
  return (
    <>
      <DropDown
        data={monsters}
        label={"Students:"}
        optionTitle={"Name:"}
        setSelectedItem={handleSelected}
      />
      {selectedItem && <MonsterInfo monster={selectedItem} />}
    </>
  );
};

export default MonsterDropDown;
