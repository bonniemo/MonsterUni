export type Monster = {
    id: string;
    first_name: string;
    last_name: string;
    avatar?: string,
    description: string;
    abilities: {
        science: string[];
        magic: string[];
    };
    origin: string;
    num_horns?: number;
    num_eyes: number;
    num_arms?: number;
    num_wings?: number;
    num_tentacles?: number;
    num_mouths?: number;
    num_tails?: number;
    num_legs?: number;
    allergies?: string[];
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