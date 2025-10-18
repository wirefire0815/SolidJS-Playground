import type { Component } from "solid-js";
import { InputField } from "./components/InputField";
import { UserProvider } from "./contexts/UserContext";
import { UserList } from "./components/UserList";

const App: Component = () => {
  return (
    <UserProvider>
      <h1>My kingdom come</h1>
      <InputField />
      <UserList />
    </UserProvider>
  );
};

export default App;
