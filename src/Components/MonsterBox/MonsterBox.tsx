import { useContext } from "react";
import { GlobalContext } from "../../State/GlobalStateContext";
import MonsterList from "./MonsterList";

const MonsterBox = () => {
  const { state } = useContext(GlobalContext);
  
  return (
    <>
      <MonsterList monsters={state.monsters} />
    </>
  );
};

export default MonsterBox;
