import { useContext, useState } from "react";
import { useFormInput } from "../../Hooks/useFormInput";
import { GlobalContext } from "../../State/GlobalStateContext";
import { v4 as uuidv4 } from "uuid";
import "./FormInput.scss";
import avatar1 from "../../Assets/MonsterAvatars/ice-totoro.png";
import avatar2 from "../../Assets/MonsterAvatars/fire-mane.png";
import avatar3 from "../../Assets/MonsterAvatars/many-eyes.png";
import avatar4 from "../../Assets/MonsterAvatars/rainbow-wings.png";

const FormInput = () => {
  const { dispatch } = useContext(GlobalContext);

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const description = useFormInput("");
  const [chosenAvatar, setChosenAvatar] = useState("");

  const handleAvatarClick = (avatar: string) => {
    setChosenAvatar(avatar);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: {
        id: uuidv4(),
        first_name: firstName.value,
        last_name: lastName.value,
        description: description.value,
        avatar: chosenAvatar,
      },
    });
  };

  const avatarArr = [avatar1, avatar2, avatar3, avatar4];

  return (
    <>
      <section className="pickAvatar">
        {avatarArr.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            onClick={() => handleAvatarClick(avatar)}
            className={chosenAvatar === avatar ? "chosen" : ""}
          />
        ))}
      </section>

      <form onSubmit={handleSubmit}>
        <>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" {...firstName} id="firstName" />
        </>
        <>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" {...lastName} id="lastName" />
        </>
        <>
          <label htmlFor="description">Description:</label>
          <input type="text" {...description} id="description" />
        </>
        <button type="submit">Add Monster</button>
      </form>
    </>
  );
};

export default FormInput;
