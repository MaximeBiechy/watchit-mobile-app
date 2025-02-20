import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { useSelector } from 'react-redux';
import MainNavigator from './MainNavigator.tsx';
import AuthNavigator from './AuthNavigator.tsx';
import OnboardingNavigator from './OnboardingNavigator.tsx';
import darkTheme from '../styles/themes.ts';
import { RootStackParamList } from './RootStackParamList.tsx';
import { selectIsAuthenticated, selectOnboardingCompleted } from '../store/user/userSlice.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const onboardingCompleted = useSelector(selectOnboardingCompleted);

  let screen;
  if (isAuthenticated) {
    if (onboardingCompleted) {
      screen = <Stack.Screen name="MainStack" component={MainNavigator} />;
    } else {
      screen = <Stack.Screen name="OnboardingStack" component={OnboardingNavigator} />;
    }
  } else {
    screen = <Stack.Screen name="AuthStack" component={AuthNavigator} />;
  }

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })} theme={darkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { paddingHorizontal: 16, paddingTop: 8 } }}>
        {screen}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
