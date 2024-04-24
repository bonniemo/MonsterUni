import { useContext } from "react";
import { MonsterInfoProp } from "../../Types/Types";
import Button from "../Button";
import { GlobalContext } from "../../State/GlobalStateContext";

const MonsterInfo: React.FC<MonsterInfoProp> = ({ monster, setSelectedItem }) => {
  const { dispatch } = useContext(GlobalContext)

    const handleAdd = () => {
      console.log('clicked add')
    }
    const handleRemove = (id: string) => {
      dispatch({
        type: "REMOVE",
        payload: id,
      });
      setSelectedItem(null);
    };

  return (
    <>
    {monster && 
      <article className="monsterInfoCard">
        <img src={monster.avatar} alt="" />
        <section className="txt">
          <h1>
            {monster.first_name} {monster.last_name}
          </h1>
          <p>{monster.description}</p>
          <p>Origin: {monster.origin}</p>
          {monster.num_horns && <p>Number of Horns: {monster.num_horns}</p>}
          <p>Number of Eyes: {monster.num_eyes}</p>
          {monster.num_arms && <p>Number of Arms: {monster.num_arms}</p>}
          {monster.num_wings && <p>Number of Wings: {monster.num_wings}</p>}
          {monster.num_tentacles && (
            <p>Number of Tentacles: {monster.num_tentacles}</p>
          )}
          {monster.num_mouths && <p>Number of Mouths: {monster.num_mouths}</p>}
          {monster.num_tails && <p>Number of Tails: {monster.num_tails}</p>}
          {monster.num_legs && <p>Number of Legs: {monster.num_legs}</p>}
        </section>
        <section>
          {/* will change add to edit */}
          <Button onClick={handleAdd} className="add btn">Edit</Button>
          <Button onClick={() => handleRemove(monster.id)} className="btn">Delete</Button>
        </section>
      </article>    
    }
    </>
  );
};

export default MonsterInfo;
