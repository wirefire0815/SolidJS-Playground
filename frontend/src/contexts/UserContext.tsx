import { createContext, ParentProps, useContext } from "solid-js";
import { createUserStore } from "../stores/UserStore";

const UserContext = createContext<ReturnType<typeof createUserStore>>();

export const UserProvider = (props: ParentProps) => {
  const store = createUserStore();

  return (
    <UserContext.Provider value={store}>{props.children}</UserContext.Provider>
  );
};

export function useUserStore() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("no context");
  return ctx;
}
