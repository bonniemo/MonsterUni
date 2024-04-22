import { useContext } from "react";
import { GlobalContext } from "../../State/GlobalStateContext";
import MonsterDropDown from "./MonsterDropDown";

const MonsterBox = () => {
  const { state } = useContext(GlobalContext);
  
  return (
    <>
      <MonsterDropDown monsters={state.monsters}/>      
    </>
  );
};

export default MonsterBox;
