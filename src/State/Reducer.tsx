import { Action, MonsterState } from "../Types/Types";

export const reducer = (state: MonsterState, action: Action) => {
    switch (action.type) {
        case "ADD": 
            return {
                monsters: [...state.monsters, action.payload],
            }
        case "REMOVE": 
            return {
                monsters: state.monsters.filter((monster) => monster.id !== action.payload)
            }
        default: 
            return state;
    }
}