// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  username: string | null;
  email: string | null;
  userType: string | null;
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
  email: null,
  userType: null,
  isAuthenticated: false,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;