import { MonsterInfoProp } from "../../Types/Types";

const MonsterInfo: React.FC<MonsterInfoProp> = ({ monster }) => {
  return (
    <>
      <h3>{monster.name}</h3>
      <p>Species: {monster.species}</p>
      <p>Age: {monster.age}</p>
      <p>Abilities: {monster.abilities.join()}</p>
      <p>Loyalty: {monster.isEvil ? 'Evil' : 'Good'}</p>
      
    </>
  );
};

export default MonsterInfo;
