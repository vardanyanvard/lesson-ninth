import { useState } from "react";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import { InputUser, IUser } from "./types";
import { UserContext } from "./context";
import "./App.css";

const initialState: IUser[] = [];

function App() {
  const [users, setUsers] = useState(initialState);

  const removeUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAdd = (user: InputUser) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  return (
    <>
      <UserContext.Provider value={{ users, removeUser, handleAdd }}>
        <AddUser />
        <UserList />
      </UserContext.Provider>
    </>
  );
}

export default App;
