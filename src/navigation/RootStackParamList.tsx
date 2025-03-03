// ? Undefined is used to indicate that the route doesn't have any params
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AuthStack: undefined;
  OnboardingStack: undefined;
  MainStack: undefined;
};

// ? AUTH STACK
export type AuthStackParamList = {
  ChooseConnectionMode: undefined;
  Signin: undefined;
  Signup: undefined;
  EmailVerification: { userData: { email: string; password: string } };
};

// ? ONBOARDING STACK
export type OnboardingStackParamList = {
  Onboarding: undefined;
  ChooseAvatar: undefined;
};

// ? MAIN STACK
export type MainStackParamList = {
  Tabs: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
  MyListsTab: undefined;
  ProfileTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: { id: number; title: string };
  Search: undefined;
};

export type MyListStackParamList = {
  MyList: undefined;
};

export type ProfileStackParamList = {
  UserProfile: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type OnboardingNavigationProp = NativeStackNavigationProp<OnboardingStackParamList>;
export type MainNavigationProp = NativeStackNavigationProp<MainStackParamList>;
export type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
export type MyListNavigationProp = NativeStackNavigationProp<MyListStackParamList>;
export type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackParamList>;
