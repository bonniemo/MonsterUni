import { useContext } from "react";
import { useFormInput } from "../../Hooks/useFormInput";
import { GlobalContext } from "../../State/GlobalStateContext";
import { v4 as uuidv4 } from "uuid";

const FormInput = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const description = useFormInput("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: {
        id: uuidv4(),
        first_name: firstName.value,
        last_name: lastName.value,
        description: description.value,
      },
    });
    console.log(state.monsters);
  };

  return (
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
  );
};

export default FormInput;
