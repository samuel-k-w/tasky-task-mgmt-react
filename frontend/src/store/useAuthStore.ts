import { create } from "zustand";
import { AuthStore, User } from "@/types/auth";

const useAuthStore = create<AuthStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: null,

  setToken: (token: string) => set({ token }),

  login: (userData: User, token: string) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData, token });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
