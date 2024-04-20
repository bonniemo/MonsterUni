export type Monster = {
    id: string;
    name: string;
    age: number;
    species: string;
    abilities: string[];
    isEvil: boolean;
    avatar: string;
};

export type MonsterState = {
    monsters: Monster[];
}

export type GlobalContextProp = {
    children: React.ReactNode;
}

export type MonsterInfoProp = {
    monster: Monster;
}

export type Action = 
| { type: "ADD"; payload: Monster }
| { type: "REMOVE"; payload: string };