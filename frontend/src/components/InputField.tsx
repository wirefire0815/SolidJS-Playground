import { Component, createSignal } from "solid-js";
import { useUserStore } from "../contexts/UserContext";

export const InputField: Component = () => {
  const [name, setName] = createSignal("");
  const userStore = useUserStore();

  const handleUserAdd = () => {
    userStore.addUser(name());
    setName("");
  };

  return (
    <div>
      <input value={name()} onInput={(e) => setName(e.currentTarget.value)} />
      <button onclick={handleUserAdd}>add</button>
    </div>
  );
};
