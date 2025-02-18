import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStackParamList } from './RootStackParamList.tsx';
import { ChooseConnectionMode } from '../screens/index.ts';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="ChooseConnectionMode" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="ChooseConnectionMode" component={ChooseConnectionMode} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
