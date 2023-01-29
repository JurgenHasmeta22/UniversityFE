import IUser from "./IUser";

export default interface AppStoreState {
  user: IUser | null;
  searchTerm: string | null;
  setUser: (data: IUser | null) => void;
  setSearchTerm: (data: string | null) => void;
}