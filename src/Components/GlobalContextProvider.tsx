import { useReducer } from "react";
import { GlobalContext, InitialMonsterState } from "../State/GlobalStateContext";
import { reducer } from "../State/Reducer";
import { GlobalContextProp } from "../Types/Types";

const GlobalContextProvider = ({ children }: GlobalContextProp) => {
  const [state, dispatch] = useReducer(reducer, InitialMonsterState);
  return (
    <GlobalContext.Provider
      value={{ state, dispatch }}    >
        {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
