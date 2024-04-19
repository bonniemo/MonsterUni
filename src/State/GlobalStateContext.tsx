import { createContext } from "react";
import { MonsterState, Action } from "../Types/Types";
import monsterData from "../Data/Monsters.json"

export const InitialMonsterState: MonsterState = monsterData;

export const GlobalContext = createContext<{
  state: MonsterState;
  dispatch: React.Dispatch<Action>;
}>({
  state: InitialMonsterState,
  dispatch: () => null,
});
