import create from "zustand";
import AppStoreState from "~/main/interfaces/IStore";

export const useStore = create<AppStoreState>((set, get): AppStoreState => ({
  user: null,
  searchTerm: "",
  setUser: (data) => {
    set({ user: data });
  },
  setSearchTerm: (data) => {
    set({ searchTerm: data });
  }
}));
