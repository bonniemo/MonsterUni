import { useState } from "react";
import { Monster, MonsterState } from "../../Types/Types";
import MonsterInfo from "./MonsterInfo";

const MonsterList = ({ monsters }: MonsterState) => {
    const [monster, setMonster] = useState<Monster | null>(null)

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonster = monsters.find(monster => monster.id === e.target.value)
        selectedMonster && setMonster(selectedMonster)
    }
  return (
    <>
      <section className="MonsterList">
        <h1>Alumni</h1>
        <label htmlFor="pickMonster">Students:</label>
        <select name="pickMonster" onChange={handleSelect}>
            <option value="">Name:</option>
            {monsters.map((m) => (
                <option value={m.id} key={m.id}>
                    {m.name}
                </option>
            ))}
        </select>
      </section>
      {monster && <MonsterInfo monster={monster}/>}
    </>
  );
};

export default MonsterList;
