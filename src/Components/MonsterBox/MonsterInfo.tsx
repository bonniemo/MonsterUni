import { MonsterInfoProp } from "../../Types/Types";

const MonsterInfo: React.FC<MonsterInfoProp> = ({ monster }) => {
  return (
    <>
      <h3>{monster.first_name} {monster.last_name}</h3>
      <p>Description: {monster.description}</p>
      <img src={monster.avatar} alt="" />
      <p>Origin: {monster.origin}</p>
      {monster.num_horns && <p>Number of Horns: {monster.num_horns}</p>}
      <p>Number of Eyes: {monster.num_eyes}</p>
      {monster.num_arms && <p>Number of Arms: {monster.num_arms}</p>}
      {monster.num_wings && <p>Number of Wings: {monster.num_wings}</p>}
      {monster.num_tentacles && <p>Number of Tentacles: {monster.num_tentacles}</p>}
      {monster.num_mouths && <p>Number of Mouths: {monster.num_mouths}</p>}
      {monster.num_tails && <p>Number of Tails: {monster.num_tails}</p>}
      {monster.num_legs && <p>Number of Legs: {monster.num_legs}</p>}
      {monster.abilities && (
        <div>
          <p>Abilities:</p>
          <ul>
            {Object.entries(monster.abilities).map(([category, abilities]) => (
              <li key={category}>
                <strong>{category}</strong>: {abilities.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
      {monster.allergies && monster.allergies.length > 0 && (
        <div>
          <p>Allergies:</p>
          <ul>
            {monster.allergies.map((allergy, index) => (
              <li key={index}>{allergy}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MonsterInfo;
