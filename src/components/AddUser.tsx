import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../context";
import { InputUser } from "../types";

const initialUserData = {
  name: "",
  age: "",
  salary: "",
};

export const AddUser = () => {
  const [user, setUser] = useState<InputUser>(initialUserData);
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("error");
  }

  const { handleAdd } = context;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAdd(user);
    setUser(initialUserData);
  };

  const changeUserData = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          onChange={(e) => changeUserData("name", e.target.value)}
        />
        <input
          type="number"
          value={user.age}
          onChange={(e) => changeUserData("age", e.target.value)}
        />
        <input
          type="number"
          value={user.salary}
          onChange={(e) => changeUserData("salary", e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};
