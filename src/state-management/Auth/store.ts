import { create } from "zustand";

interface UserStore {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: "",
  login: (user) => set(() => ({ user })),
  logout: () => set(() => ({ user: "" })),
}));

export default useUserStore;
