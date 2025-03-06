import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  username: string | null;
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  onboardingCompleted?: boolean;
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
    setUserData: (state, action: PayloadAction<UserState>) => {
      const newState = { ...state, ...action.payload };
      AsyncStorage.setItem('user', JSON.stringify(newState));
      return newState;
    },
    completeOnboarding: (state) => {
      const newState = { ...state, onboardingCompleted: true };
      AsyncStorage.setItem('user', JSON.stringify(newState));
      return newState;
    },
    loadUserData: (state, action: PayloadAction<UserState>) => ({
      ...state,
      ...action.payload,
    }),
    logout: () => {
      AsyncStorage.removeItem('user');
      return { ...initialState };
    },
  },
});

export const selectUserData = (state: { user: UserState }) => state.user;
export const selectIsAuthenticated = (state: { user: UserState }) => !!state.user.accessToken;
export const selectOnboardingCompleted = (state: { user: UserState }) => state.user.onboardingCompleted;

export const { setUserData, completeOnboarding, loadUserData, logout } = userSlice.actions;

export default userSlice.reducer;
