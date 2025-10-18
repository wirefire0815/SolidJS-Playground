import { For, useContext } from "solid-js";
import { useUserStore } from "../contexts/UserContext";

export const UserList = () => {
  const { users, removeUser } = useUserStore();

  return (
    <ul>
      <For each={users}>
        {(user) => (
          <div>
            <li>{user.id + ": " + user.name}</li>
            <button onclick={() => removeUser(user)}>x</button>
          </div>
        )}
      </For>
    </ul>
  );
};
