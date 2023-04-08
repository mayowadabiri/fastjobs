import { create } from 'zustand';

interface User {
  id: string;
  username: string;
}
interface UserState {
  user: User | undefined;
  updateUser: (data: User) => void;
}

export const useBearStore = create<UserState>((set: any) => ({
  user: undefined,
  updateUser: (data: User) => set((state: any) => ({ user: data })),
}));
