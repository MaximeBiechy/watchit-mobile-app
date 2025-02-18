import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStackParamList } from './RootStackParamList.tsx';
import { ChooseConnectionModeScreen, LoginScreen } from '../screens/index.ts';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="ChooseConnectionMode" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="ChooseConnectionMode" component={ChooseConnectionModeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
