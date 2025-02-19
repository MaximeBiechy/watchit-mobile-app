// ? Undefined is used to indicate that the route doesn't have any params
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

export type AuthStackParamList = {
  ChooseConnectionMode: undefined;
  Login: undefined;
  Signup: undefined;
};

export type MainStackParamList = {
  Home: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type MainNavigationProp = NativeStackNavigationProp<MainStackParamList>;
