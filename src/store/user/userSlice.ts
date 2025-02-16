import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: UserState = {
  username: null,
  email: null,
  accessToken: null,
  refreshToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => ({
      ...state,
      username: action.payload.username,
      email: action.payload.email,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
    }),
    clearUserData: (state) => ({
      ...state,
      username: null,
      email: null,
      accessToken: null,
      refreshToken: null,
    }),
  },
});

export const selectUserData = (state: { user: UserState }) => state.user;

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
