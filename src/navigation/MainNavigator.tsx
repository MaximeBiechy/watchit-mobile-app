import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainStackParamList } from './RootStackParamList.tsx';
import TabNavigator from './TabNavigator.tsx';

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
