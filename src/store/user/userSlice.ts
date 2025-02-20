import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  onboardingCompleted: boolean;
}

const initialState: UserState = {
  username: null,
  email: null,
  accessToken: null,
  refreshToken: null,
  onboardingCompleted: false,
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
    completeOnboarding: (state) => ({
      ...state,
      onboardingCompleted: true,
    }),
  },
});

export const selectUserData = (state: { user: UserState }) => state.user;
export const selectIsAuthenticated = (state: { user: UserState }) => !!state.user.accessToken;
export const selectOnboardingCompleted = (state: { user: UserState }) => state.user.onboardingCompleted;

export const { setUserData, clearUserData, completeOnboarding } = userSlice.actions;

export default userSlice.reducer;
