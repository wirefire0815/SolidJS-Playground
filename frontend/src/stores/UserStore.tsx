import { createStore } from "solid-js/store";
import { User } from "../models/userModel";

export function createUserStore() {
  const [users, setUsers] = createStore<User[]>([]);
  let _globalID = 1;

  function addUser(name: string) {
    if (name.trim()) {
      setUsers([
        ...users,
        { id: _globalID++, name: name.trim(), activation: false },
      ]);
    }
  }

  function removeUser(removingUser: User) {
    setUsers(users.filter((user) => user.id !== removingUser.id));
  }

  return {
    users,
    addUser,
    removeUser,
  };
}
