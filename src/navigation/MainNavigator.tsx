import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainStackParamList } from './RootStackParamList.tsx';
import { HomeScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          header: () => renderHeader('Hello Maxime', navigation, true),
        })}
      />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
